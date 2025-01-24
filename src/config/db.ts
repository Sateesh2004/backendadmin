import mongoose from "mongoose";

// Function to establish a connection to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to the database using the connection string from environment variables
    await mongoose.connect(process.env.MONGO_URL!);

    // Log a success message if the connection is successful
    console.log("Database connected successfully");
  } catch (error) {
    // Log an error message if there is an issue connecting to the database
    console.error("Error connecting to the database:", error);
  }
};

export default connectDB; // Export the function for use in other parts of the application
