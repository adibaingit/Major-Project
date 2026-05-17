const express=require('express')
const router=express.Router();
const {getAllCities,getCityDetails,searchCity}=require('../controllers/cityController')



// router.get("/",getAllCities)
router.get("/:cityName",getCityDetails)
router.get("/",searchCity)

module.exports=router