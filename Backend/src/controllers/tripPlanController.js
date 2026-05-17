const TripPlan = require('../models/tripPlan');
const City = require("../models/city");
const Festival = require("../models/festival");

const {fetchFoursquarePlaces} = require("../services/placesService");
const { generateItinerary } = require("../services/geminiService");
const { buildPrompt, buildGeminiSchema } = require("../utils/promptBuilder");

const userModel=require('../models/user');
const tripPlanModel = require('../models/tripPlan');

// ─────────────────────────────────────────────
// Builds arrivalJourney only when startCity
// is provided — skipped entirely otherwise
// ─────────────────────────────────────────────
const buildArrivalJourney = (startCity, destinationCity, groupSize, budgetCategory = "avg") => {
  if (!startCity) return null;

  const sc = startCity.toLowerCase();
  const dc = destinationCity.toLowerCase();
  
  // 1. Define Tier-1 Cities with Major Airports
  const majorAirports = ["mumbai", "bangalore", "kolkata", "chennai", "hyderabad", "delhi", "pune", "ahmedabad"];
  
  // 2. Determine Travel Mode based on Budget + Availability
  let mode = "train";
  let costPerPerson = 600; // Default Base (Sleeper/3AC)

  const hasFlightOption = majorAirports.includes(sc) && majorAirports.includes(dc);

  if (budgetCategory === "luxury") {
    // Luxury always prefers Flight if available, or Premium Train (1AC/Tejas)
    if (hasFlightOption) {
      mode = "flight";
      costPerPerson = 5500;
    } else {
      mode = "premium train";
      costPerPerson = 2500; // 1AC / Executive Class
    }
  } else if (budgetCategory === "avg") {
    // Average prefers Flight only if it's a major route, otherwise 3AC/2AC Train
    if (hasFlightOption) {
      mode = "flight";
      costPerPerson = 4000;
    } else {
      mode = "train";
      costPerPerson = 1500; // 2AC/3AC
    }
  } else {
    // Low Budget always prefers Train (Sleeper)
    mode = "train";
    costPerPerson = 700;
  }

  // 3. Construct the Details String
  const detailPrefix = mode === "flight" 
    ? `Fly from ${startCity} to the nearest airport.` 
    : `Board a ${mode} from ${startCity} to ${destinationCity}.`;

  return {
    from: startCity,
    to: destinationCity,
    mode: mode,
    // detail: `${detailPrefix} ${transport?.[mode === "flight" ? 'airport' : 'railwayStation'] || ""}`,
    estimatedCost: costPerPerson * (groupSize || 1),
  };
};

//budget calculation
const calculateRealBudget = (category, days, groupSize, travelCost = 0) => {
  const rates = {
    "low": 1500,
    "avg": 3000,
    "luxury": 10000
  };

  const baseDailyCost = rates[category.toLowerCase()] || 4000;
  
  // Total logic: (Rate * People * Days)
  const totalTripBudget = (baseDailyCost * groupSize * days);
  
  // We subtract the journey cost (flight/train) to see 
  // how much is actually left for the "In-City" experience
  // const availableInCityBudget = totalTripBudget - travelCost;

  return totalTripBudget;
};

// ─────────────────────────────────────────────
// POST /api/trips/generate
// ─────────────────────────────────────────────
const generateTrip = async (req, res) => {
  try {
    const {
      destinationCityId,
      startDate,
      endDate,
      budget,
      groupSize,
      interests,
      dietary,
      startCity, // optional
      healthConsiderations,
    } = req.body;

    console.log(startCity+destinationCityId + startDate+endDate+budget)
    const userId = req.user.id;
    const user=await userModel.findById(userId);
    const touristType = user.touristType || "solo";

    // ── Validation ────────────────────────────
    if (!destinationCityId || !startDate || !endDate || !budget) {
      return res.status(400).json({
        success: false,
        message: "destinationCity, startDate, endDate, and budget are required.",
      });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start + 1) / (1000 * 60 * 60 * 24));

    console.log(days);

    if (days < 1) {
      return res.status(400).json({
        success: false,
        message: "endDate must be after startDate.",
      });
    }

    const travelMonth = start.toLocaleString("default", { month: "long" }); // e.g. "October"
  

    // ════════════════════════════════════════════
    // PHASE 1 — DATA GATHERING
    // ════════════════════════════════════════════

    const city = await City.findById(destinationCityId);
    if (!city || !city.isActive) {
      return res.status(404).json({ success: false, message: "City not found or inactive." });
    }

    if (!city.coordinates?.lat || !city.coordinates?.lng) {
      return res.status(400).json({ success: false, message: "City is missing coordinates." });
    }

    const festivals = await Festival.find({
      city: { $regex: new RegExp(`^${city.name}$`, "i") },
      month: { $regex: new RegExp(travelMonth, "i") },
    });

    const [attractions, restaurants] = await Promise.all([
  // 1. Fetch Attractions based on the user's selected Interests array
  fetchFoursquarePlaces(
    city.coordinates, 
    interests, // Pass the array: ["Adventure", "Culture", etc.]
    9        
  ),

  // 2. Fetch Restaurants based on Dietary preference
  // We pass ["Food & Craft"] as the interest so it hits the Dining category,
  // then the service uses the 'dietary' variable for the query string.
  fetchFoursquarePlaces(
    city.coordinates, 
    ["Food & Craft"], 
    12, 
    dietary    // Pass dietary here so the service can filter for 'veg'
  ),
]);
  
  //new budget after excluding arrivalJourney cost
  const arrivalJourney = buildArrivalJourney(startCity, city.name,groupSize,budget);
  const twoCityTransportCost=arrivalJourney.estimatedCost;

  const realBudget=calculateRealBudget(budget,days,groupSize,twoCityTransportCost ||0);
  console.log(realBudget); //in city budget
  const totalUserBudget=realBudget+twoCityTransportCost;


//console.log(attractions);

    // ════════════════════════════════════════════
    // PHASE 2 — PROMPT BUILDING
    // ════════════════════════════════════════════
//console.log(city);
    const prompt = buildPrompt({
      city,
      festivals,
      attractions,
      restaurants,
      days,
      groupSize: groupSize || 1,
      realBudget,
      touristType,
      interests,
      dietary,
      startDate: start.toDateString(),
      travelMonth,
      healthConsiderations,
    });

    console.log("Generated Prompt for Gemini:\n");
    //  console.log(prompt);
    const schema = buildGeminiSchema(days);

    // ════════════════════════════════════════════
    // PHASE 3 — GEMINI AI GENERATION
    // ════════════════════════════════════════════

    const aiResponse = await generateItinerary(prompt, schema);

    if (!Array.isArray(aiResponse.itinerary)) {
      return res.status(500).json({
        success: false,
        message: "AI response is missing itinerary. Please try again.",
      });
    }

    // ════════════════════════════════════════════
    // PHASE 4 — PROCESSING & STORAGE
    // ════════════════════════════════════════════

    const totalEstimatedCost =
      aiResponse.totalEstimatedCost + twoCityTransportCost ||
      aiResponse.itinerary.reduce((sum, d) => sum + (d.dailyCostEstimate || 0), 0)+twoCityTransportCost;

    const budgetStatus = totalEstimatedCost <= totalUserBudget ? "within_budget" : "over_budget";

    if (budgetStatus === "over_budget") {
      console.warn(`⚠️  Trip cost ₹${totalEstimatedCost} exceeds budget ${totalEstimatedCost}-${totalUserBudget}`);
    }

    const newTrip = new TripPlan({
      user: userId,
      startCity: startCity || undefined,
      destinationCity: destinationCityId,
      startDate: start,
      endDate: end,
      days,
      travelMonth,
      budget,
      groupSize: groupSize || 1,
      touristType,
      interests: interests || [],
      dietary: dietary || undefined,
      arrivalJourney: arrivalJourney || undefined,
      itinerary: aiResponse.itinerary,
      totalEstimatedCost,
      healthConsiderations,
      status: "draft",
    });

    await newTrip.save();

    return res.status(201).json({
      success: true,
      message: "Trip generated successfully!",
      tripId: newTrip._id,
      budgetStatus,
      data: {
        city: city.name,
        days,
        travelMonth,
        budget,
        totalEstimatedCost,
        ...(arrivalJourney && { arrivalJourney }),
        itinerary: newTrip.itinerary,
      },
    });

  } catch (error) {
    console.error("Trip Generation Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while generating the trip.",
      error: error.message,
    });
  }
};


//get trips by id
const getTripById= async(req,res)=>{
  const id=req.params.id
  // console.log(id)
  try{
    const trip=await tripPlanModel.findById(id).populate('destinationCity');
    
    if(!trip){
      return res.status(400).json({
        success:false,
        message:"Trip not found",
      })
    }

    return res.status(200).json({
      success:true,
      message:"Trip Loading...",
      trip
    })

  }catch(err){
    return res.status(400).json(
      {
        success:false,
        message:"Something went Wrong",
        err
      }
    )
  }
}

const getAllTrips= async (req,res) => {
  const userId=req.user.id
  if(!userId){
    return res.status(400).json({
      success:false,
      message:"Unauthrized Access"
    })
  }
  try{
    const trips=await tripPlanModel.find({user:userId}).populate('destinationCity',"name state heroImage").select("days budget")
    if(!trips){
      return res.status(400).json({
        success:false,
        message:"No Trips found"
      })
    }
    res.status(200).json({
      success:true,
      message:"Trips found",
      trips
    })
  } catch(err){
    res.status(200).json({
      success:false,
      message:"Something went wrong",
    })
  }

}

module.exports = { generateTrip ,getTripById,getAllTrips};