import React, { useState } from 'react';
import apiClient from '../apiClient';
import { useProjects } from '../context/ProjectContext';

const ApplicationForm = () => {
  const [projectId, setProjectId] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const { projects } = useProjects();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.post('/application', { projectId, coverLetter });
      alert('Application submitted successfully!');
      setProjectId('');
      setCoverLetter('');
    } catch (error) {
      alert('Error submitting application');
    }
  };


  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Project:
        <select
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          className="block w-full mt-2 p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select a project</option>
          {projects.map((project) => (
            <option key={project._id} value={project._id}>
              {project.title}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
        Cover Letter:
        <textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          className="block w-full mt-2 p-2 border border-gray-300 rounded-md"
        ></textarea>
      </label>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Apply
      </button>
    </form>
  );
};

export default ApplicationForm;
