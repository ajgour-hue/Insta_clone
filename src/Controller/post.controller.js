
const postRouter = require("../routes/post.routes")
const jwt = require("jsonwebtoken")
const likeModel = require("../model/like.model")
// imagekit 

const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const postModel = require("../model/post.model")
const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})


// creation of the posts
async function createPostController(req, res) {
    console.log(req.body, req.file);


    // user konsa requwst kar rha h uski id k liye hain

    ///////////
    ///  YAHA PAR HAME ISKO COMMENT KIYA H KYONKI YEH CODE REPAEA HO RHA THAA TO ISKO HAMNE MIDDLEEWARE KI TARAH USE KIYA HAI iDENTIFYuSER KE NAAM SE POST.ROUTES.JS KI FILE MAIN 
    ////////

    // const token = req.cookies.token
    // if (!token) {
    //     return res.status(401).json({
    //         message: "Token not provided, Unauthorised access"
    //     })
    // }


    // let decoded = null
    // try{
    //       decoded = jwt.verify(token,process.env.JWT_SECRET)
    // }
    // catch(err){
    //     res.status(401).json({
    //         message : "user is anauthorised ."
    //     })
    // }

//    console.log(decoded);
   


//    imagerUrl ka kaam h yaha 
    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
          folder: "/Insta-Posts"
    })


 const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id
 })

res.status(201).json({
    message: "post created as succesfully ",
    post 
})

}


// get posts with specipic users request 
async function getPostController(req, res){
 

     ///////////
    ///  YAHA PAR HAME ISKO COMMENT KIYA H KYONKI YEH CODE REPAEA HO RHA THAA TO ISKO HAMNE MIDDLEEWARE KI TARAH USE KIYA HAI iDENTIFYuSER KE NAAM SE POST.ROUTES.JS KI FILE MAIN 
    ////////


//     const token = req.cookies.token
   
//     if(!token){
//         return res.status(401).json({
//             message : "Unauthorised Access"
//         })
//     }

//     let decoded;
//    try 
//     { decoded =  jwt.verify(token , process.env.JWT_SECRET)
//     }catch(err){
//         return res.status(401).json({
//             message: "Invlid token"
//         })
//     }

     const userId = decoded.id

     const posts = await postModel.find({
        user:userId
     })

     res.status(200).json({
        message: "Post fetched succesfully",
        posts
     })
}


// all post of details
async function getPostDetailsController(req ,res){
  

     ///////////
    ///  YAHA PAR HAME ISKO COMMENT KIYA H KYONKI YEH CODE REPAEA HO RHA THAA TO ISKO HAMNE MIDDLEEWARE KI TARAH USE KIYA HAI iDENTIFYuSER KE NAAM SE POST.ROUTES.JS KI FILE MAIN 
    ////////

//     const token = req.cookies.token
   
//     if(!token){
//         return res.status(401).json({
//             message : "Unauthorised Access"
//         })
//     }

//     let decoded;
//    try 
//     { decoded =  jwt.verify(token , process.env.JWT_SECRET)
//     }catch(err){
//         return res.status(401).json({
//             message: "Invlid token"
//         })
//     }

     const userId = decoded.id
     const postId = req.params.postId

     const post = await postModel.findById(postId)
  if(!post){
    return res.status(404).json({
        message: "Post not found"
    })
  }

//   yaha 2 obj lko compare kar rhe h isliye toString()
  const isValidUser = post.user.toString() === userId
  if(!isValidUser){
    return res.status(403).json({
        message :  "Forbidden Content"
    })
  }

     res.status(200).json({
        message: "Post fetched succesfully",
        post
     })
}


async function likePostController(req, res) {

    const username = req.user.username
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if (!post) {
        return res.status(404).json({
            message: "Post not found."
        })
    }

    const like = await likeModel.create({
        post: postId,
        user: username
    })

    res.status(200).json({
        message: "Post liked successfully.",
        like
    })

}



module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController,
    likePostController
}