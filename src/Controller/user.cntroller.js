const jwt = require("jsonwebtoken")
const followModel = require("../model/follow.model")    

async function followUserController(req,res) {
     const folowerUsername = req.user.username
     const foloweeUsername = req.params.username
}

module.exports = {
    followUserController,
}