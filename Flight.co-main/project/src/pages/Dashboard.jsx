import React from 'react';
import TicketPriceForm from '../components/TicketPriceForm';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <TicketPriceForm />
    </div>
  );
};

export default Dashboard;