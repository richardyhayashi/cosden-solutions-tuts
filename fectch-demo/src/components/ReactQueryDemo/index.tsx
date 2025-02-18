import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Demo from './Demo';

const queryClient = new QueryClient();

const ReactQueryDemo = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Demo />
    </QueryClientProvider>
  );
};

export default ReactQueryDemo;