const express = require("express")
const userController = require("../Controller/user.cntroller")
const userRouter =express.Router()
// middleware 
const IdentifyUser = require("../middlewares/auth.middleware")



/**
 * @route POST /api/users/follow/:userid
 * @description Follow a user
 * @access Private
 */
userRouter.post("/follow/:username", IdentifyUser, userController.followUserController)


/** 
 * @route POST /api/users/unfollow/:userid
 * @description Unfollow a user
 * @access Private
 */
userRouter.post("/unfollow/:username", IdentifyUser, userController.unfollowUserController)



module.exports = userRouter;
