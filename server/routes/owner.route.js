import express from "express";
import protect from "../middleware/auth.middleware.js";
import { addCar, changeRoleOwner } from "../controllers/owner.controller.js";
import upload from "../middleware/multer.middleware.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleOwner);
ownerRouter.post("/add-car", upload.single("image"), protect, addCar);

export default ownerRouter;
