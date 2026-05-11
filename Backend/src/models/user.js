const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    require: function () {
      return this.authprovider === 'local';
    },
  }, // null for OAuth users

  googleId: {
    type: String,
    unique: true,
    sparse: true,
  }, //sparse give uniqueness to only non-null values so non google user not effected

  touristType: {
    type: String,
    enum: ["domestic", "nri", "foreign"],
    default: "domestic",
  },

  savedPlans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TripPlan",
    },
  ],

  authprovider: {
    type: String,
    enum: ["local", "google"],
    
  },

  //  dietary:      { type: String, enum: ['veg', 'jain', 'nonveg', 'halal'], default: 'veg' },
  //   isVerified:   { type: Boolean, default: false },
  //   otp:          { type: String },
  //   otpExpiry:    { type: Date },
  //   refreshToken: { type: String },
});


const userModel=new mongoose.model("user",userSchema);


module.exports=userModel;