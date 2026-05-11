const express=require('express')
const router=express.Router();

const {profile,deleteAccount}=require('../controllers/profileController')
const authMiddleware=require('../middleware/authMiddleware')

router.get("/me",authMiddleware.authUser,profile)
router.delete("/me",authMiddleware.authUser,deleteAccount)

module.exports=router