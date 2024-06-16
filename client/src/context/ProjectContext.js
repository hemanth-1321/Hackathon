import React, { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../apiClient";

const ProjectContext = createContext();

export const useProjects = () => {
  return useContext(ProjectContext);
};

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await apiClient.get("/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const deleteProject = (projectId) => {
    setProjects(projects.filter((project) => project._id !== projectId));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
