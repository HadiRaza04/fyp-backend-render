import express from "express";
import { predictDeadline } from "../controllers/geminiController.js";
import { protectRoute } from "../middleware/authMiddleware.js"; 

const router = express.Router();

// ✅ Ensure it uses POST and :taskId
router.post("/analyze/:taskId", protectRoute, predictDeadline); // api/gemini/analyze/:taskId

export default router;