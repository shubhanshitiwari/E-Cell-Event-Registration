import mongoose from "mongoose";

const registerSchema = new mongoose.Schema ({
    firstName:{
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    mobileNumber:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    branch:{
        type: String,
        required: true
    },
    college:{
        type: String,
        required: true
    },
    enrollmentNo:{
        type: String,
        required: true,
        trim: true
    },
    whyEvent:{
        type: String,
        required: true,
        trim: true
    },
    expectations:{
        type: String,
        required: true,
        trim: true
    },
    wantsUpdates:{
        type: Boolean,
        required: true,
        default: false
    }
})

export const User = mongoose.model("User", registerSchema)