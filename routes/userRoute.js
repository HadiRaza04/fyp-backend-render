import express from "express";
import {
  activateUserProfile,
  changeUserPassword,
  deleteUserProfile,
  getNotificationsList,
  getTeamList,
  getUserTaskStatus,
  loginUser,
  logoutUser,
  markNotificationRead,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { isAdminRoute, protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser); // api/user/register
router.post("/login", loginUser); // api/user/login
router.post("/logout", logoutUser); // api/user/logout

router.get("/get-team", protectRoute, isAdminRoute, getTeamList); // api/user/get-team
router.get("/notifications", protectRoute, getNotificationsList); // api/user/notifications
router.get("/get-status", protectRoute, isAdminRoute, getUserTaskStatus); // api/user/get-status

router.put("/profile", protectRoute, updateUserProfile); // api/user/profile
router.put("/read-noti", protectRoute, markNotificationRead); // api/user/read-noti
router.put("/change-password", protectRoute, changeUserPassword); // api/user/change-password
//   FOR ADMIN ONLY - ADMIN ROUTES
router
  .route("/:id")
  .put(protectRoute, isAdminRoute, activateUserProfile) // api/user/:id
  .delete(protectRoute, isAdminRoute, deleteUserProfile); // api/user/:id

export default router;
