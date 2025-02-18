import React from 'react';
//import { User } from '.';
import Sidebar from './Sidebar';
import Profile from './Profile';

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
};

export default Dashboard;
