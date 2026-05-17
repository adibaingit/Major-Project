const express=require('express')
const router=express.Router();
const {authUser} =require('../middleware/authMiddleware')
const {generateTrip, getTripById,getAllTrips}=require('../controllers/tripPlanController')

router.post("/generate",authUser,generateTrip)
router.get("/:id",authUser,getTripById)
router.get("/",authUser,getAllTrips)


module.exports=router