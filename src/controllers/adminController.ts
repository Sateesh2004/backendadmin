import { Request, Response } from "express"; // Importing necessary types from express
import bcrypt from "bcryptjs"; // Importing bcrypt for password hashing
import User from "../models/User"; // Importing the User model
import AuditLog from "../models/AuditLog"; // Importing the AuditLog model for logging actions
import generateToken from "../utils/token"; // Importing the utility to generate a JWT token

// Controller to handle admin login
export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body; // Extract email and password from the request body

    // Check if the admin user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "Admin not found." }); // Respond if user is not found
    }

    // Compare the entered password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Password Invalid." }); // Respond if password is invalid
    }

    // Generate and send a JWT token
    generateToken(res, existingUser);
    
  } catch (err: unknown) {
    // Error handling for any unknown errors
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
};

// Controller to fetch all users
export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find(); // Fetch all users from the database
  res.json(users); // Return the list of users in the response
};

// Controller to fetch a single user by their ID
export const getUser = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params; // Get the user ID from the request params
  const user = await User.findById(id); // Find the user by ID
  
  // Respond if user is not found
  if (!user) return res.status(404).json({ error: "User not found" });
  
  res.json(user); // Return the user data
};

// Controller to delete a user by their ID
export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params; // Get the user ID from the request params
  const user = await User.findById(id); // Find the user by ID
  
  // Respond if user is not found
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // Prevent deletion of users with the role of "admin"
  if (user.role === "admin") {
    return res.status(403).json({ error: "You cannot delete an admin user" });
  }

  // Delete the user from the database
  await User.findByIdAndDelete(id);
  
  // Log the deletion action in the AuditLog collection
  await AuditLog.create({ action: `Deleted user ${id}`, adminId: req.id });

  res.status(204).end(); // Respond with no content after successful deletion
};
