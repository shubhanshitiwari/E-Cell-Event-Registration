import express from "express"
import userRoutes from './routes/user.routes.js';
import cors from 'cors';
import { User } from "./models/register.model.js";

const app = express()
app.use(cors());
  
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// app.use('/', userRoutes);

app.post('/register', async (req, res) => {
    const { firstName, lastName, email, mobileNumber, branch, college, enrollmentNo, whyEvent, expectations, wantsUpdates } = req.body;
    // your registration logic here
 
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
  });
  


export {app}