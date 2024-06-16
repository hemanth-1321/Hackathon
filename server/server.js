import express from "express";

import cors from "cors";
import { connectDb } from "./config/Db.js";

import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import projects from "./routes/projectRoutes.js";
import application from "./routes/applicationRoute.js";
dotenv.config();
const app = express();

const port = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", projects);
app.use("/api", application);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDb();
});
