const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name:         { type: String, required: true, unique: true },
  state:        { type: String, required: true },
  coordinates:  { lat: Number, lng: Number },
  description:  { type: String },
  bestMonths:   [String],                   // ["Oct", "Nov", "Feb", "Mar"]
  avoidMonths:  [String],                   // ["May", "Jun"] - heat / monsoon
  tags:         [String],                   // ["heritage", "spiritual", "beach"]
  transportTips: {
    airport: String, railwayStation: String,
    autoFareGuide: String, metroAvailable: Boolean,
    prepaidTaxiBooth: String,
  },
  govtDiscounts: {
    aadhaarDiscount: Boolean,
    studentDiscount: Boolean,
    seniorDiscount: Boolean,
    description: String,
  },
  emergencyNumbers: {
    police: String, ambulance: String,
    touristHelpline: String, womenHelpline: String,
  },
  isActive:     { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('City', citySchema);