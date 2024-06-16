import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Connect with Top Talents
          </h1>
          <p className="text-gray-600 mb-8">
            Hire skilled freelancers or find exciting projects to work on.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={handleLogin}
            >
              Log In
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
  {/* Features Section */}
  <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Post Projects
            </h3>
            <p className="text-gray-600">
              Founders can post projects and hire skilled freelancers.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Find Work
            </h3>
            <p className="text-gray-600">
              Freelancers can browse and apply for exciting projects.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Secure Payments
            </h3>
            <p className="text-gray-600">
              Safe and secure payment system for both founders and freelancers.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                "I was able to find a talented developer for my startup quickly
                and easily. Highly recommend!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="rounded-full mr-2"
                />
                <span className="text-gray-800 font-bold">John Doe</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                "I've landed several high-paying projects through this platform.
                Highly recommended for freelancers!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="rounded-full mr-2"
                />
                <span className="text-gray-800 font-bold">Jane Smith</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                "The platform is user-friendly and the support team is
                incredibly helpful. A great experience overall!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="rounded-full mr-2"
                />
                <span className="text-gray-800 font-bold">Bob Johnson</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get Started Today
          </h2>
          <p className="text-gray-600 mb-8">
            Join our community of founders and freelancers.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={handleLogin}
            >
              Log In
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;