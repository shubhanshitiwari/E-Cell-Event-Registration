import express from "express";
import cors from 'cors';
import { User } from "./models/register.model.js";
import connectDB from "./database/index.js";

const app = express();

connectDB()
  .then(() => {
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
}); // Missing closing parenthesis and semicolon added here

app.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, branch, college, enrollmentNo, whyEvent, expectations } = req.body;
    console.log(req.body);
    
    // Create a new user record in the database
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
      // wantsUpdates
    });

    // Send a success response
    res.status(201).json({
      message: 'User registered successfully',
      user
    });

  } catch (error) {
    // Handle errors and send an error response
    console.error('Registration failed:', error.message);
    res.status(500).json({
      message: 'Registration failed',
      error: error.message
    });
  }
});
