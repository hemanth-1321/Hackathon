import express from "express";
import { authMiddleware } from "../controllers/userController.js";
import {
  createProject,
  listProjects,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.post("/projects", authMiddleware, createProject);
router.get("/projects", listProjects);
router.delete("/projects/:id", authMiddleware, deleteProject);

export default router;
