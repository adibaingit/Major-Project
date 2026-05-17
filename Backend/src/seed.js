// seed.js
const mongoose = require('mongoose');
const City = require('./models/city'); // Path to your schema
const citiesData = require('./data/citiesData'); // Path to your data

const festival=require('./models/festival')
const festivalData=require('./data/festivalData')
require('dotenv').config();

const tripPlan=require('./models/tripPlan')
const tripPlanData=require('./data/tripPlanData')

const seedDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Admin:u9ZgA6lpwZDhBj3S@majorproject.lay5c5r.mongodb.net/SafarAI');
    console.log("Connected to DB...");

    // Insert 20 cities
    await City.insertMany(citiesData);
    console.log("25 Cities inserted successfully!");

    //insert 20 festivals
    // await festival.insertMany(festivalData);
    // console.log("20 festivals inserted")

    // await tripPlan.insertMany(tripPlanData)
    // console.log("inserted")
    // await City.deleteMany({ name: { $nin: ["Delhi" ,"Kolkata" ]} });
    // console.log("deleted")
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();