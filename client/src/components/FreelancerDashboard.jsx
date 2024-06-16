import React from 'react';
import ProjectList from './ProjectList';
import ApplicationForm from './ApplicationForm';
import ApplicationList from './ApplicationList';

const FreelancerDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Freelancer Dashboard</h2>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Available Projects</h3>
        <ProjectList />
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Apply for a Project</h3>
        <ApplicationForm />
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-4">Your Applications</h3>
        <ApplicationList role="freelancer" />
      </section>
    </div>
  );
};

export default FreelancerDashboard;
