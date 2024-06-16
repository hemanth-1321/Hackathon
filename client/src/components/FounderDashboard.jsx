import React from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import ApplicationList from './ApplicationList';

const FounderDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Founder Dashboard</h2>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Create New Project</h3>
        <ProjectForm />
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Your Projects</h3>
        <ProjectList />
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-4">Applications</h3>
        <ApplicationList role="founder" />
      </section>
    </div>
  );
};

export default FounderDashboard;
