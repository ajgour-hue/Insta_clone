const mongoose = require("mongoose")
const { type } = require("mquery/lib/env")

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: [true, "User name is already exists"],
            required: [true, "User name is required"]
        }
        ,
        email: {
            type: String,
             required: [true, "password is required"]
        },
        bio:String,
        profileImage:{
            type: String,
            default:"https://ik.imagekit.io/m1uub3j7n/360_F_586915596_gPqgxPdgdJ4OXjv6GCcDWNxTjKDWZ3JD.webp"
        },
         password:{
            type: String,
            required:[true,"password is required"],
            select:false
         }
    }
)

const userModel = mongoose.model("users" , userSchema)

module.exports = userModel