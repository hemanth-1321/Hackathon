import express from "express";
import {
  application,
  getApplications,
} from "../controllers/applicationController.js";
import { authMiddleware } from "../controllers/userController.js";

const router = express.Router();

router.post("/application", authMiddleware, application);
router.get("/getapplication", authMiddleware, getApplications);

export default router;
