import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import FetchAgents from './FetchAgents'
import AddAgent from './AddAgent';
const AgentLayout = () => {

    const queryClient = new QueryClient();

  return (
    <div>
        <QueryClientProvider client={queryClient}>
            <FetchAgents/>
            <AddAgent/>
       </QueryClientProvider>
    </div>
  )
}

export default AgentLayout