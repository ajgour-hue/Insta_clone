const express = require("express")
const authRouter = express.Router()
const authController = require("../Controller/auth.controller")
const IdentifyUser = require("../middlewares/auth.middleware")

// registration api
// POST api/auth/register
authRouter.post("/register",authController.registerController)


// login apio
//  POST api/auth/login
authRouter.post("/login", authController.loginController)

// get-me data like my posts 
// POST api/auth/get-me
authRouter.post("/get-me",IdentifyUser,authController.getMeController)

module.exports = authRouter