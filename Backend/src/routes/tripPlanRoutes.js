const express=require('express')
const router=express.Router();
const {authUser} =require('../middleware/authMiddleware')
const {generateTrip}=require('../controllers/tripPlanController')

router.post("/generate",authUser,generateTrip)


module.exports=router