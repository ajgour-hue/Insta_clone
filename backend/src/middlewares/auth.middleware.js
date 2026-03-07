
const jwt = require("jsonwebtoken")

async function IdentiyUser(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Unauthorised Access"
        })
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }
    catch (err) {
        return res.status(401).json({
            message: "Invlid token"
        })
    }

    // middleware tak req pahunchnae k liye 
    req.user = decoded
    //or haa yaha user ki jagah kuch bhi use kar sakte hain par hum user ki identify kar rhe h to hame user liya hain 
    

    // aab middleware se aage req pahuchane k liye hum next() ka use karte hain 
    next()
}

module.exports = IdentiyUser