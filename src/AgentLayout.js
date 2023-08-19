import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import FetchAgents from './FetchAgents'
const AgentLayout = () => {

    const queryClient = new QueryClient();

  return (
    <div>
        <QueryClientProvider client={queryClient}>
            <FetchAgents/>
       </QueryClientProvider>
    </div>
  )
}

export default AgentLayout