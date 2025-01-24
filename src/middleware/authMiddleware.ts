import { Request, Response, NextFunction } from "express"; // Import necessary types for Express middleware
import jwt from "jsonwebtoken"; // Importing JWT for token verification

// Extending the Express Request interface to include 'id' property
declare global {
  namespace Express {
    interface Request {
      id: string; // Adding the 'id' property to the request object to store the user ID
    }
  }
}

// Auth middleware to validate JWT token
const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Retrieve the token from cookies
    const token = req.cookies.token;
    
    // If no token is found, respond with 401 Unauthorized error
    if (!token) {
      res.status(401).json({ error: "Unauthorized: Token is missing" });
      return; // Exit the function if no token is found
    }

    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload;
    console.log(decoded); // Log the decoded payload for debugging purposes

    // Attach the user ID to the request object (for use in downstream logic)
    req.id = decoded.id;

    // Call next middleware or route handler
    next();
  } catch (error) {
    console.error("Authentication Error:", error); // Log error if token is invalid or expired
    // Respond with 401 Unauthorized if the token is invalid or expired
    res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
    return; // Exit the function if an error occurs
  }
};

export default authMiddleware; // Export the middleware for use in routes
