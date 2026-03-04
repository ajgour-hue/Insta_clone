const express = require("express")
const userModel = require("../model/user.model")

const authRouter = express.Router()

authRouter.post("/register", async (req, res) => {
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

    if (isUserExistsByUsername) {
        return res.status(409).json({
            message: "Username already exists"
        })
    }

    })