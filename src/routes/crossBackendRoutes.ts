import express from "express"; // Importing express to create routes
import { fetchNotesFromUserBackend } from "../controllers/crossBackendController"; // Importing the controller function to fetch notes from user backend
import authMiddleware from "../middleware/authMiddleware"; // Importing authentication middleware to protect the route

const router = express.Router(); // Creating a new express router

// Route to fetch notes from the user backend (protected by authentication middleware)
router.get("/notes", authMiddleware, fetchNotesFromUserBackend);

// Export the router to use in other parts of the application
export default router;
