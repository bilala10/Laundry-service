import React from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <h2>Welcome to your Dashboard</h2>
        {/* Add more personalized dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;
