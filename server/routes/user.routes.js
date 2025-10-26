import express from "express";
import {
  getUserData,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";
import protect from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/data", protect, getUserData);

export default userRouter;
