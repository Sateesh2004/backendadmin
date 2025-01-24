import express from "express"; // Importing express to create routes
import { login, getUsers, getUser, deleteUser } from "../controllers/adminController"; // Importing controller functions
import authMiddleware from "../middleware/authMiddleware"; // Importing authentication middleware to protect routes

const router = express.Router(); // Creating a new express router

// Route to handle login requests (no middleware required)
router.post("/login", login);

// Route to get all users (protected by authentication middleware)
router.get("/", authMiddleware, getUsers);

// Route to get a specific user by ID (protected by authentication middleware)
router.get("/:id", authMiddleware, getUser);

// Route to delete a user by ID (protected by authentication middleware)
router.delete("/:id", authMiddleware, deleteUser);

// Export the router to use in other parts of the application
export default router;
