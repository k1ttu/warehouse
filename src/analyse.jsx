import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const SalesTrendsGraph = () => {
  // Dummy data for the past 6 months
  const data = [
    { month: 'Mar', sales: 400 },
    { month: 'Apr', sales: 700 },
    { month: 'May', sales: 600 },
    { month: 'Jun', sales: 900 },
    { month: 'Jul', sales: 1200 },
    { month: 'Aug', sales: 1100 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sales Trends (Past 6 Months)</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesTrendsGraph;
