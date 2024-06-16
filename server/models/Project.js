import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  skillsRequired: [String],
  budget: { type: Number, required: true },
  deadline: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
});

export const Project = mongoose.model("Project", projectSchema);
