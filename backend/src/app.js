const express = require("express")
const app = express()
const authRouter = require("./routes/authRouter")
app.use(express.json())
module.exports = app;