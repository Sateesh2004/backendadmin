import express from "express";
import { login,getUsers,getUser,deleteUser} from "../controllers/adminController";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.post("/login", login);
router.get("/users",authMiddleware, getUsers);
router.get("/users/:id",authMiddleware, getUser);
router.delete("/users/:id",authMiddleware, deleteUser);

export default router;






