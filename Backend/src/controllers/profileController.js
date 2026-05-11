const userModel=require('../models/user')

async function profile(req,res) {
    const decode=req.user 

    try {
        const user=await userModel.findById(decode.id).select('-password');
        return res.status(200).json({
        message:"User Profile",
        user
    })
    } catch (error) {
        console.log(error);
    }
}

//delete account
async function deleteAccount(req,res) {
    const user=req.user
    // console.log(user);
    await userModel.findByIdAndDelete(user.id);
    res.clearCookie("token");
    return res.status(200).json({
        message:"Account deleted Sucessfully"
    })

}

module.exports={profile,deleteAccount}