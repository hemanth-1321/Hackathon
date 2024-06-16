import { Project } from "../models/Project.js";

export const createProject = async (req, res) => {
  try {
    const { title, description, skillsRequired, budget, deadline } = req.body;
    const project = new Project({
      title,
      description,
      skillsRequired,
      budget,
      deadline,
      createdBy: req.user.id, // Assuming req.user.id is set by your authentication middleware
    });
    await project.save();
    res.status(201).send(project);
  } catch (error) {
    console.error("Error creating project:", error);
    res
      .status(500)
      .send({ error: "An error occurred while creating the project." });
  }
};

export const listProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("createdBy", "username");
    res.status(200).send(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res
      .status(500)
      .send({ error: "An error occurred while fetching projects." });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.status(200).send({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res
      .status(500)
      .send({ error: "An error occurred while deleting the project." });
  }
};
