import { User } from "../models/register.model";

export const registerUser = async((req, res)=>{
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


    
    const user = User.create({
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


