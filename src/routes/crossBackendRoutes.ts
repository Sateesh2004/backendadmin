import express from "express";
import { fetchNotesFromUserBackend } from "../controllers/crossBackendController";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();


router.get("/notes",authMiddleware, fetchNotesFromUserBackend);

export default router;
