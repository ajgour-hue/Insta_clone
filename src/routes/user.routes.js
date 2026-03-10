const express = require("express")
const userController = require("../Controller/user.cntroller")
const userRouter =express.Router()
// middleware 
const IdentifyUser = require("../middlewares/auth.middleware")


//  @route POST /api/users/follow/:userId
//   @description follow a user
// @acess private

userRouter.post("/follow/:username",IdentifyUser,userController.followUserController)

module.exports = userRouter;
