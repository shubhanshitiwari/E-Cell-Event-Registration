import mongoose from "mongoose";


const uri = "mongodb+srv://sudhanshu:tiwari12345@cluster0.pamxtwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async ()=>{
    try {
        await mongoose.connect(uri)
        console.log("MongoDB connected !! DB Host")
    } catch (error) {
        console.error("Error",error);
        process.exit();
    }
}

export default connectDB;