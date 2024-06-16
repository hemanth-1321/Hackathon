import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import FreelancerDashboard from './components/FreelancerDashboard';
import FounderDashboard from './components/FounderDashboard';
import { ProjectProvider } from './context/ProjectContext';
import LandingPage from './components/LandingPage';
export const App = () => {
  return (
    <ProjectProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/create-project" element={<ProjectForm />} />
          <Route path="/dashboard/freelancer" element={<FreelancerDashboard />} />
          <Route path="/dashboard/founder" element={<FounderDashboard />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </ProjectProvider>
  );
};