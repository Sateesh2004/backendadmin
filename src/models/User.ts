import mongoose, { Document, Model } from "mongoose"; // Importing mongoose and types for Document and Model

// Define the IUser interface extending Mongoose's Document
export interface IUser extends Document {
  name: string; // User's name
  email: string; // User's email address
  password: string; // User's password
  role: string; // User's role (e.g., admin, user)
}

// Define the user schema
const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true }, // Name field, required
    email: { type: String, required: true, unique: true }, // Email field, required and unique
    password: { type: String, required: true }, // Password field, required
    role: { type: String, default: 'admin' }, // Role field, defaults to 'admin'
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create and export the User model based on the user schema
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User; // Export the User model for use in other parts of the application
