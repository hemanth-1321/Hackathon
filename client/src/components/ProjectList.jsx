import React from 'react';
import { useProjects } from '../context/ProjectContext';
import apiClient from '../apiClient';

const ProjectList = () => {
  const { projects, deleteProject } = useProjects();

  const handleDelete = async (projectId) => {
    try {
      await apiClient.delete(`/projects/${projectId}`);
      deleteProject(projectId);
      alert('Project deleted successfully!');
    } catch (error) {
      console.error("Error deleting project:", error);
      alert('Error deleting project');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <li
            key={project._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <p className="text-gray-600 mb-2">
                <strong>Skills Required:</strong> {project.skillsRequired.join(', ')}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Budget:</strong> {project.budget}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Deadline:</strong> {new Date(project.deadline).toLocaleDateString()}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Posted by:</strong> {project.createdBy ? project.createdBy.username : 'Unknown'}
              </p>
              <button
                onClick={() => handleDelete(project._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;