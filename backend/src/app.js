const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require('cors')




app.use(express.json())
app.use(cookieParser())
// this is use because to allow only these server request ......

app.use(cors({
  origin: [
    "http://localhost:5173", // local frontend
    "https://insta-clone-rngg-7nyps0r2s-ajgour-hues-projects.vercel.app"
  ],
  credentials: true
}))
// require routes
const authRouter = require("./routes/auth.routes")
const postRouter = require("./routes/post.routes")
const userRouter = require("./routes/user.routes")

// using routes
app.use("/api/auth" , authRouter)
app.use("/api/posts" ,postRouter)
app.use("/api/users" , userRouter)
module.exports = app;