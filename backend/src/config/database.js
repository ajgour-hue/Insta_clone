const mongoose = require("mongoose")

 async function connecToDB(){
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("CONNECTED TO db");
        
    })
}

module.exports = connecToDB