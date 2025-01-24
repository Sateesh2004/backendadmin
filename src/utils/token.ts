import { Request, Response } from "express"; // Importing Request and Response types for Express
import jwt from "jsonwebtoken"; // Importing jsonwebtoken for creating JWT tokens

import { IUser } from "../models/User"; // Importing the IUser interface from the User model

// Function to generate and send a JWT token in response
const generateToken = (res: Response, user: IUser) => {
  try {
    // Create a JWT token with the user's ID and email, and set it to expire in 10 days
    const token = jwt.sign(
      { id: user._id, username: user.email },
      process.env.SECRET_KEY!, // Secret key from environment variable
      { expiresIn: '10d' } // Token expiration time set to 10 days
    );

    // Send the token as an HttpOnly cookie with secure attributes for security
    res.cookie("token", token, {
      httpOnly: true,  // Ensures the cookie cannot be accessed by JavaScript
      secure: true,    // Ensures the cookie is sent only over HTTPS
      sameSite: 'strict' // Restricts the cookie to be sent only with requests from the same site
    });

    // Respond with a success message, including the user's name and email
    return res.status(200).json({ message: "Admin signed in successfully", username: user.name, email: user.email });
  } catch (err: unknown) {
    // Handle errors and respond with an appropriate message
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
};

export default generateToken; // Export the generateToken function for use in other parts of the application
