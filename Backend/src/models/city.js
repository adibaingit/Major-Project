const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  image:       { type: String },              // URL
  description: { type: String },
  category:    { type: String },              // "monument", "park", "temple", etc.
  timings:     { type: String },
  entryFee:    { type: String },
});

const citySchema = new mongoose.Schema({
  name:         { type: String, required: true, unique: true },
  state:        { type: String, required: true },
  coordinates:  { lat: Number, lng: Number },

  // Hero section
  heroImage:    { type: String },             // landscape banner URL
  tagline:      { type: String },             // "Dil Walon Ki Delhi"

  // About section
  description:  { type: String },
  famousFor:    [String],                     // ["Red Fort", "Street Food", "Mughal History"]
  
  bestMonths:   [String],
  avoidMonths:  [String],
  tags:         [String],

  // Places to visit
  placesToVisit: [placeSchema],               // ← NEW embedded array

  transport: {
    airport:        String,
    railwayStation: String,
    busStand:       String,
    metroAvailable: Boolean,
    localTransport: String,
  },

  emergencyNumbers: {
    police:          String,
    ambulance:       String,
    touristHelpline: String,
    womenHelpline:   String,
  },
  
safetyInfo: {
  generalSafety:   { type: String },  // "Delhi is generally safe for tourists..."
  womenSafety:     { type: String },  // "Avoid isolated areas after 9pm, prefer Metro..."
  localBehaviour:  { type: String },  // "Locals are helpful but persistent touts near monuments..."
  scamAlerts:      [String],          // ["Fake guides at Red Fort", "Overpriced autos near airport"]
  emergencyTips:   [String],          // ["Always share live location with someone"]
},
  videoTour:  {type:String},

  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('City', citySchema);