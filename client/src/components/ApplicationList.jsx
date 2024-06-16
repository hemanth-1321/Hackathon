import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApplicationList = ({ role }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getapplication');
        console.log('API Response:', response); // Log the entire response object
        if (Array.isArray(response.data)) {
          setApplications(response.data);
        } else {
          throw new Error('Unexpected response format');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching applications:', error);
        if (error.response) {
          // Server responded with a status code outside of 2xx range
          setError('Error fetching applications. Server responded with ' + error.response.status);
        } else if (error.request) {
          // Request was made but no response received
          setError('Network error. Please check your internet connection.');
        } else {
          // Something else happened in setting up the request
          setError('Unexpected error fetching applications. Please try again later.');
        }
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Applications List</h3>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <ul>
          {applications.map(application => (
            <li key={application._id}>
              <strong>Project: </strong> {application.projectId.title}<br />
              <strong>Cover Letter: </strong> {application.coverLetter}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApplicationList;
