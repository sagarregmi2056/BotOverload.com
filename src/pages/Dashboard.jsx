import React from 'react';
import Layout from '../components/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Manage your messaging and features</p>
        </header>

        <div className="grid grid-cols-3 gap-6">
          {/* Feature Cards */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold text-gray-700">Bulk Messaging</h3>
            <p className="text-gray-500">Send messages to multiple contacts at once.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold text-gray-700">Email Campaigns</h3>
            <p className="text-gray-500">Manage your email marketing campaigns.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold text-gray-700">Premium Features</h3>
            <p className="text-gray-500">Unlock all features with a premium subscription.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;