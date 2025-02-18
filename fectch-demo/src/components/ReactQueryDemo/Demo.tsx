import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Demo = () => {
  const query = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: []
  });

  return (
    <div>
      <b>React Query Tutorial</b>
    </div>
  )
}

export default Demo