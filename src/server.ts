import express, { Request, Response } from 'express'; // Import express and types for request and response
import dotenv from 'dotenv'; // Import dotenv to manage environment variables

dotenv.config({ path: '.env.local' }); // Load environment variables from .env.local
import connectDB from './config/db'; // Import the database connection function
import adminRoutes from './routes/adminRoutes'; // Import admin routes
import crossBackendRoutes from './routes/crossBackendRoutes'; // Import routes for cross-backend communication
import cookieParser from "cookie-parser"; // Import cookie parser to handle cookies

const app = express(); // Initialize express app
const port = process.env.PORT || 6000; // Set the port from environment variables or default to 6000

app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(cookieParser()); // Middleware to parse cookies from incoming requests

// Define the root route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World! Admin'); // Send a simple message when accessing the root URL
});

// Define routes for authentication, user management, and audit
app.use("/auth", adminRoutes); // Handle authentication-related routes
app.use("/users", adminRoutes); // Handle user management-related routes
app.use("/audit", crossBackendRoutes); // Handle cross-backend communication routes

// Start the server and connect to the database
app.listen(port, () => {
  connectDB(); // Connect to the database
  console.log(`Server is running at http://localhost:${port}`); // Log the server running message
});
