const jwt = require("jsonwebtoken")
const followModel = require("../model/follow.model")    
const userModel = require("../model/user.model")

async function followUserController(req,res) {
     const folowerUsername = req.user.username
     const foloweeUsername = req.params.username

    //  you cannot follo yourself again
     if(foloweeUsername === folowerUsername){
        return res.status(400).json({
            message : "you cannot follow yourself"
        })
     
    
    }

    // is username exist therre 
    const isfolloweExists = await userModel.findOne({
        username:foloweeUsername
    })

    if(isfolloweExists){
        return res.status(404).json({
            message :"user you are trying to follo dosen't exists"
        })
    }


//  agar app ne phele se hi kisi ko follo kiya hai kya use
    const  isAlreadyFollowing =await followModel.findOne({
          follower: folowerUsername ,
       followee: foloweeUsername
    })
    if(isAlreadyFollowing){
        return res.status(200).json({
          message : `you are already  following   ${folowerUsername}`,
     follow: followRecord
        })
    }

     const followRecord = await followModel.create({
        follower: folowerUsername ,
       followee: foloweeUsername
     })

     res.status(201).json({
     message : `you are following   ${folowerUsername}`,
     follow: followRecord
     })
}

async function unfollowUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })

    if (!isUserFollowing) {
        return res.status(200).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message: `You have unfollowed ${followeeUsername}`
    })
}


module.exports = {
    
    followUserController,
    unfollowUserController,
}