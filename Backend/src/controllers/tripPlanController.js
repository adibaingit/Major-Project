const TripPlan = require('../models/tripPlan');
const City = require("../models/city");
const Festival = require("../models/festival");

const {fetchFoursquarePlaces} = require("../services/placesService");
const { generateItinerary } = require("../services/geminiService");
const { buildPrompt, buildGeminiSchema } = require("../utils/promptBuilder");

const userModel=require('../models/user')

// ─────────────────────────────────────────────
// Builds arrivalJourney only when startCity
// is provided — skipped entirely otherwise
// ─────────────────────────────────────────────
const buildArrivalJourney = (startCity, destinationCity, transportTips,groupSize) => {
  if (!startCity) return null;

  const sc = startCity.toLowerCase();
  const flightCities = ["mumbai", "bangalore", "kolkata", "chennai", "hyderabad", "delhi"];

  if (flightCities.includes(sc)) {
    return {
      from: startCity,
      to: destinationCity,
      mode: "flight",
      detail: `Fly from ${startCity} to the nearest airport. ${transportTips?.airport || ""}`,
      estimatedCost: 4500* (groupSize || 1),
    };
  }

  return {
    from: startCity,
    to: destinationCity,
    mode: "train",
    detail: `Board a train from ${startCity} to ${destinationCity}. ${transportTips?.railwayStation || ""}`,
    estimatedCost: 600,
  };
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
    } = req.body;

    const userId = req.user.id;
    const user=await userModel.findById(userId);
    const touristType = user.touristType || "domestic";

    // ── Validation ────────────────────────────
    if (!destinationCityId || !startDate || !endDate || !budget) {
      return res.status(400).json({
        success: false,
        message: "destinationCityId, startDate, endDate, and budget are required.",
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
    5        
  ),

  // 2. Fetch Restaurants based on Dietary preference
  // We pass ["Food & Craft"] as the interest so it hits the Dining category,
  // then the service uses the 'dietary' variable for the query string.
  fetchFoursquarePlaces(
    city.coordinates, 
    ["Food & Craft"], 
    5, 
    dietary    // Pass dietary here so the service can filter for 'veg'
  ),
]);

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
      budget,
      touristType,
      interests,
      dietary,
      startDate: start.toDateString(),
      travelMonth,
    });

    // console.log("Generated Prompt for Gemini:\n");
    // console.log(prompt);
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

    const arrivalJourney = buildArrivalJourney(startCity, city.name, city.transportTips,groupSize);

    const totalEstimatedCost =
      aiResponse.totalEstimatedCost ||
      aiResponse.itinerary.reduce((sum, d) => sum + (d.dailyCostEstimate || 0), 0);

    const budgetStatus = totalEstimatedCost <= budget ? "within_budget" : "over_budget";

    if (budgetStatus === "over_budget") {
      console.warn(`⚠️  Trip cost ₹${totalEstimatedCost} exceeds budget ₹${budget}.`);
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
      status: "draft",
    });

    await newTrip.save();

    return res.status(201).json({
      success: true,
      message: "Trip generated successfully!",
      budgetStatus,
      data: {
        tripId: newTrip._id,
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

module.exports = { generateTrip };