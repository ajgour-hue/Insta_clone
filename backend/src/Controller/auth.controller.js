
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const userModel = require("../model/user.model")


 async function registerController (req, res)  {
    const { username, email, password, bio, profileImage, } = req.body


    // normal method

    // const isUserExistsByEmail = await userModel.findOne({email})
    // if(isUserExistsByEmail){
    //     return res.status(409).json({
    //         message : "user already exists with this email"
    //     })
    // }

    // const isUserExistsByUsername  =await userModel.findOne({username})
    // if(isUserExistsByUsername){
    //     return res.status(409).json({
    //         message: "Username already exists"
    //     })
    // }

    // best practicing 

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "Username already exists" +(isUserAlreadyExists.email ==email ? "eMAIL ALREADY EXISTS" : "Username already Exists")
        })
    }

         const hash =  crypto.createHash('sha256').update(password).digest("hex")

         const user = await userModel.create({
            username,
            email,
            password:hash,
            profileImage,
            bio,
         })

        //  token
const token = jwt.sign({
     id:user._id
}, process.env.JWT_SECRET,{expiresIn:"1d"})

res.cookie("token",token)

res.status(201).json({
    message:"user registered sucessfully",
    user:{
        email:user.email,
        // password:user.password
        username : user.username,
        bio: user.bio,
        profileImage: user.profileImage,
    }
})

    }



async function loginController (req,res) {
    const {email,username,password} = req.body

    const user = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    })

    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }

    // 👇 YAHAN ADD KARO
    console.log("Entered password:", password)

    const hash = crypto.createHash("sha256")
    .update(password)
    .digest("hex")

    console.log("Hashed:", hash)
    console.log("DB password:", user.password)

    const isPasswordValid = hash === user.password   

    if(!isPasswordValid){
        return res.status(401).json({
            message:"password invalid"
        })
    }

    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)

    res.status(200).json({
        message:"User logged in successfully"
    })
}

module.exports = {
  registerController,
  loginController
}