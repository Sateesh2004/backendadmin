import express from "express";
import { login,getUsers,getUser,deleteUser} from "../controllers/adminController";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.post("/login", login);
router.get("/",authMiddleware, getUsers);
router.get("/:id",authMiddleware, getUser);
router.delete("/:id",authMiddleware, deleteUser);

export default router;






