const User = require("../models/User");

exports.register = async (req,res,next) =>{

    const {username, email, password} = req.body;

    try{
        const user = await User.create({
            username,
            email,
            password,
        })
    } catch(error) {
         res.status(500).json({
              success: false,
              error: error.message
         })
    }

    res.send("Register Route");
}

exports.login = (req,res,next) =>{
    res.send("Login Route");
}


exports.forgotpassword =  (req,res,next) =>{
       res.send("Forgot Password Route");
}

exports.resetpassword = (req,res,next) =>{
       res.send("Reset Password Route");
}