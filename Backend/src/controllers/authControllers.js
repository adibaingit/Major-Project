const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt=require('bcryptjs')
const passport=require('passport')


//manual register
async function register(req, res) {
  const { username, email, password, googleId, touristType } = req.body;

  const isUserExists = await userModel.findOne({
    $or: [
        { username }, 
        { email }],
  });

  if (isUserExists) {
    return res.status(401).json({
      message: "user already exists",
    });
  }

  //insert hash password
  const hashPassword=await bcrypt.hash(password,10) //10 is salt

  const user = userModel.create({
    username,
    email,
    password:hashPassword,
    googleId,
    touristType,
  });


  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
  res.cookie("token", token);

  return res.status(200).json({
    success:true,
    message: "User registerd sucessfully",
    token,
    user
  });
}

//manual login
async function login(req,res) {
  const {username, email, password} =req.body;
  const user=await userModel.findOne({
    $or:[
    {username},
    {email}
  ]});
  //if user not found
  if(!user){
    return res.status(401).json({
      message:"user not found"
    })
  }
  //if user registered using Oauth password is not available
  if(!user.password){
    return res.status(401).json({
      message:"registered using google, use google for login"
    })
  }
  //check password
  const checkpassword=await bcrypt.compare(password,user.password)  //give true or false
  if(!checkpassword){
    return res.status(401).json({
      message:"invalid credentials"
    })
  }

  const token=jwt.sign({id:user._id}, process.env.JWT_SECRET_KEY);
  res.cookie("token",token);

  return res.status(200).json({
    success:true,
    message:"login sucessfully",
    token,
    user
  })
}

//Oauth

async function googleAuth(req,res,next) {
  passport.authenticate('google', { scope: ['profile', 'email'], prompt:'select_account'})(req, res, next);
}

//callback
async function googleCallback(req,res,next) {
  passport.authenticate('google', { session: false},(err, user, info) => {
        if (err) {
            console.error("Passport Auth Error:", err);
            return res.redirect('http://localhost:5000/api/auth/login?error=server_error');
        }

        if (!user) {
            console.log("No user found/created");
            return res.redirect('http://localhost:5000/api/auth/login?error=no_user');
        }

        try {
            const token = jwt.sign(
                { id: user._id}, 
                process.env.JWT_SECRET_KEY, 
                { expiresIn: '7d' }
            );
            //res.cookie("token",token);

            // Redirect to frontend with the token
            res.redirect(`http://localhost:5173/login-success?token=${token}`);
        } catch (jwtError) {
            console.error("JWT Error:", jwtError);
            res.redirect('http://localhost:5173/login?error=token_error');
        }
    })(req, res, next);
}


//logout
async function logout(req,res) {
  res.clearCookie("token");
  res.status(200).json({
    message:"logout Sucessfully"
  })
}

module.exports = { register,login,googleAuth,googleCallback, logout};
