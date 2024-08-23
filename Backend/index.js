import connectDB from "./database/index.js"
import { app } from "./app.js"

connectDB()
.then(()=>{
    app.listen( 8000, ()=>{
        console.log("Server is running on port 8000")
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed ", err)
})
