const express = require("express")
const postRouter = express.Router()
const postController = require("../Controller/post.controller")

// multer use kiya jata hain taaki hum iske data ko server  side par read kar sake bina iske undefined aata hain 
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})






//  POST /api/routes [protected]
//  req.body={caption,image-file}

postRouter.post("/",upload.single("image"),postController.createPostController)


postRouter.get("/",postController.getPostController)


// returns the details abouts an specific posts with the id . also check whwlther  the post is belong to thast user or not 

// GET /api/posts/details/:postId

postRouter.get("/details/:postId",postController.getPostDetailsController)

module.exports = postRouter
    