import { User } from "../models/register.model.js";

export const registerUser = (async (req, res)=>{
    const {
        firstName,
        lastName,
        email,
        mobileNumber,
        branch,
        college,
        enrollmentNo,
        whyEvent,
        expectations,
        wantsUpdates
     } = req.body;

     

    
    const user = await User.create({
        firstName,
        lastName,
        email,
        mobileNumber,
        branch,
        college,
        enrollmentNo,
        whyEvent,
        expectations,
        wantsUpdates
    })
})


