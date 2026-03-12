const mongoose = require("mongoose")
const { type } = require("mquery/lib/env")
const { post } = require("../routes/post.routes")

const likeSchema = new mongoose.Schema({
    post: {
         type: mongoose.Schema.Types.ObjectId,
         ref:"posts",
         required: [true , "post is required FOR CREATING LIKE"]
    },
    user:{
type:String,
         required: [true , "username is required FOR CREATING LIKE"]

    }
},
{
    timestamps:true
})

 likeSchema.index({post:1 , user:1} , {unique : true}) 
 const  likeModel = mongoose.model("likes" , likeSchema)

 module.exports = likeModel