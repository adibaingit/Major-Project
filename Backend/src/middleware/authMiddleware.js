const jwt=require('jsonwebtoken')


async function authUser(req,res,next) {
    const token=req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Unauthrized access"
        })
    }
    let decode
    try{
        decode=jwt.verify(token,process.env.JWT_SECRET_KEY)
        //console.log(decode);
        
    }catch(err){
        return res.status(401).json({
            message:"Something went wrong or Unauthrized access"
        })
    }
    req.user=decode
    next();
}

module.exports={authUser};