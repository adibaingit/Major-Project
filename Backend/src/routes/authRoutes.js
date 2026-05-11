const express=require('express')
const router=express.Router();
const {register,login,googleAuth,googleCallback, logout}=require('../controllers/authControllers')

//manual auth
router.post("/register", register)
router.post("/login",login)

//google auth
router.get("/google",googleAuth)
router.get("/google/callback",googleCallback)

//logout
router.post("/logout",logout)
module.exports=router