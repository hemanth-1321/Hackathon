import { Application } from "../models/Application.js";

export const application = async (req, res) => {
  try {
    const { projectId, coverLetter } = req.body;

    // Create a new Application instance using data from req.body and req.user
    const application = new Application({
      projectId,
      freelancerId: req.user.id, // Assuming req.user contains the authenticated user's ID
      coverLetter,
    });

    // Save the new application to the database
    await application.save();

    // Respond with status 201 (Created) and send the saved application object as response
    res.status(201).send(application);
  } catch (error) {
    // If an error occurs during the process, handle it here
    console.error("Error in the application:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export const getApplications = async (req, res) => {
  try {
    // Fetch all applications from the database and populate related fields
    const applications = await Application.find()
      .populate("projectId") // Populate the 'projectId' field with details from the Project model
      .populate("freelancerId"); // Populate the 'freelancerId' field with details from the User model

    // Respond with status 200 (OK) and send the list of applications as response
    res.status(200).send(applications);
  } catch (error) {
    // If an error occurs during the process, handle it here
    console.error("Error fetching applications:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
