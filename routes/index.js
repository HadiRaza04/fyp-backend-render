import express from "express";
import userRoutes from "./userRoute.js";
import taskRoutes from "./taskRoute.js";
import geminiPredictRoute from "./geminipredictRoute.js";

const router = express.Router();

router.use("/user", userRoutes); // api/user
router.use("/task", taskRoutes); // api/task
router.use("/gemini", geminiPredictRoute); // api/gemini

export default router;
