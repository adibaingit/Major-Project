const mongoose = require('mongoose');

const festivalSchema = new mongoose.Schema({
  name:         { type: String, required: true },
  city:         { type: String, required: true },
  state:        { type: String },
  month:        { type: String, required: true },
  dateApprox:   { type: String },           // "1st week of October"
  description:  { type: String },
  type:         { type: String, enum: ['religious', 'cultural', 'fair', 'food', 'music'] },
  tips:         { type: String },           // what tourist should know
  mustSee:      { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Festival', festivalSchema);