const mongoose = require("mongoose")

const followSchema  = new mongoose.Schema({
    followers:{
       type:String,
    },
       following:{
         type:String,
    }
} , 
{
    timestamps:true
})

 followSchema.index({followers:1 , following:1} , {unique : true}) 

const followModel = mongoose.model("follows" , followSchema)


module.exports =followModel