const express=require('express');
const authRoutes=require('../src/routes/authRoutes')
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const tripRoutes=require("./routes/tripPlanRoutes");

const profileRoutes=require('./routes/profileRoutes')

require('./config/OauthPassport'); // Initialize Passport Config

const app=express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(cookieParser())

//prefix API
app.use("/api/auth",authRoutes);
app.use("/api/profile",profileRoutes);
app.use("/api/trips", tripRoutes);

module.exports=app