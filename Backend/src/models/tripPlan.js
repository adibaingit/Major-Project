const mongoose = require("mongoose");

// --- SLOT SCHEMA (Individual activities within a day) ---
const slotSchema = new mongoose.Schema({
  time: { type: String }, // e.g., "09:00 AM"
  placeName: { type: String }, 
  PlaceId: { type: String }, // To link back to Google Maps if needed
  rating: { type: Number }, // From Google Places API
  image: { type: String }, // URL or Photo Reference from Google
  duration: { type: String }, // e.g., "2 hours"
  activity:{type:String},
  warnings: [String],  // ["High UV", "Uneven terrain", "Cover head inside mosque"]
  

  
  transport: {
    mode: { type: String }, // "auto", "metro", "cab", "walking"
    detail: { type: String }, // "Take Yellow Line from Huda City Center"
    estimatedCost: { type: Number, default: 0 }, 
  },
  foodNearby: [{ 
    name: String, 
    priceRange: String, 
    rating: Number 
  }],
  culturalNote: { type: String }, // Gemini's AI insight about the place
});
// --- DAY SCHEMA (A single day of the itinerary) ---
const daySchema = new mongoose.Schema({
  dayNumber: { type: Number },
  date: { type: String },
  title: { type: String }, // e.g., "Exploring Old Delhi Heritage"
  slots: [slotSchema],
  hotelSuggestion: {
    name: String,
    priceRange: String,
    address: String,
    rating: Number,
  },
  dailyCostEstimate: { type: Number, default: 0 },
});
// --- MAIN TRIPPLAN SCHEMA ---
const tripPlanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  
  startCity: { type: String }, 
  // Linked to your static CityModel
  destinationCity: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "City", 
    required: true 
  },
  // Dates replace "days" and "month" inputs
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  
  // These will be calculated automatically in the controller
  days: { type: Number }, 
  travelMonth: { type: String },
  budget: { type: String, required: true,enum
    :["low","avg","luxury"],default:"avg"
   },
  groupSize: { type: Number, default: 1 },
 
  touristType: { type: String }, 
  
  interests: [{ 
    type: String, 
    enum: [
      "Adventure", "Historical", "Village Life", 
      "Culture", "NightLife & Clubs", "Hidden Gems", 
      "Stargazing", "Food & Craft"
    ] 
  }],
  dietary: { type: String, enum: ["veg", "non-veg", "both"] },

  // Conditional field
  arrivalJourney: {
    from: String,
    to: String,
    mode: String,
    estimatedCost: Number
  },
  itinerary: [daySchema],
  totalEstimatedCost: { type: Number },

  healthConsiderations: [{ 
  type: String,
  enum: ["skin-sensitive", "respiratory", "mobility-limited", "heart-condition", "diabetic", "none"]
}],
 status: { type: String, enum: ["draft", "active", "completed"], default: "draft", },

}, { timestamps: true });

const tripPlanModel = mongoose.model("TripPlan", tripPlanSchema);


module.exports = tripPlanModel;