import express from "express";
import {
  createSubTask,
  createTask,
  dashboardStatistics,
  deleteRestoreTask,
  duplicateTask,
  getTask,
  getTasks,
  postTaskActivity,
  trashTask,
  updateSubTaskStage,
  updateTask,
  updateTaskStage,
  upload_screenshot,
  getTaskScreenshots,
} from "../controllers/taskController.js";

import { isAdminRoute, protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Create & Duplicate
router.post("/create", protectRoute, isAdminRoute, createTask); // api/task/create
router.post("/duplicate/:id", protectRoute, isAdminRoute, duplicateTask); // api/task/duplicate/:id

// ✅ Task Activity
router.post("/activity/:id", protectRoute, postTaskActivity); // api/task/activity/:id

// ✅ Dashboard Statistics
router.get("/dashboard", protectRoute, dashboardStatistics); // api/task/dashboard

// ✅ Fetch All or Single Task
router.get("/", protectRoute, getTasks); // api/task
router.get("/:id", protectRoute, getTask); // api/task/:id

// ✅ Fetch Task Screenshots (REST format)
router.get("/screenshots/:taskId", protectRoute, getTaskScreenshots); // api/task/screenshots/:taskId


// ✅ Subtask & Update Operations
router.put("/create-subtask/:id", protectRoute, isAdminRoute, createSubTask); // api/task/create-subtask/:id
router.put("/update/:id", protectRoute, isAdminRoute, updateTask); // api/task/update/:id
router.put("/change-stage/:id", protectRoute, updateTaskStage); // api/task/change-stage/:id

// ✅ Upload Screenshot (Binary)
router.put(
  "/upload_screenshot/:taskId",
  protectRoute,
  express.raw({ type: "application/octet-stream", limit: "10mb" }), // Parse raw binary data
  upload_screenshot
);

// ✅ Trash / Delete / Restore
router.put("/:id", protectRoute, isAdminRoute, trashTask);
router.delete(
  "/delete-restore/:id?",
  protectRoute,
  isAdminRoute,
  deleteRestoreTask
);

export default router;
