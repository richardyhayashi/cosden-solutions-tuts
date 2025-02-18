import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { DashboardContext } from './context';

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface ContextDemoProps {}

export default function ContextDemo({}: ContextDemoProps) {
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'You',
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
