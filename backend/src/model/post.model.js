const mongoose = require("mongoose")
// const { type } = require("mquery/lib/env")

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    imgUrl: {
        type: String,
        required: [true, "image url required for creating post"]
    },
    user:{
         type:mongoose.Schema.Types.ObjectId,
        ref:"users",
       required: [true, "user id is required for creating a post"]
    }
})

const postModel = mongoose.model("posts", postSchema)

module.exports = postModel