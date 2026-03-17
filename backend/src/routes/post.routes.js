const express = require("express")
const postRouter = express.Router()
const postController = require("../Controller/post.controller")

// multer use kiya jata hain taaki hum iske data ko server  side par read kar sake bina iske undefined aata hain 
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})

// middleware 
const IdentifyUser = require("../middlewares/auth.middleware")





//  POST /api/routes [protected]
//  req.body={caption,image-file}

postRouter.post("/",upload.single("image"),IdentifyUser,postController.createPostController)


postRouter.get("/",IdentifyUser,postController.getPostController)


// returns the details abouts an specific posts with the id . also check whwlther  the post is belong to thast user or not 

// GET /api/posts/details/:postId

postRouter.get("/details/:postId",IdentifyUser,postController.getPostDetailsController)


// @routes POST  /api/posts/like/:postId
// @descrition like a post eith the is provided  
postRouter.post("/like/:postId",IdentifyUser,postController.likePostController)

postRouter.post("/unlike/:postId",IdentifyUser,postController.unLikePostController)


// @routes POST /api/posts/feed
//  @description get all the post created in the DB
// @acess Private
postRouter.get("/feed" , postController.getFeedController)

module.exports = postRouter
    