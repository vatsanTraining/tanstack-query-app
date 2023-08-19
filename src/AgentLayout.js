import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import FetchAgents from './FetchAgents'
import AddAgent from './AddAgent';
import ShowAgents from './ShowAgent';
const AgentLayout = () => {

    const queryClient = new QueryClient();

  return (
    <div>
        <QueryClientProvider client={queryClient}>
          <AddAgent></AddAgent>
            <FetchAgents/>
            <ShowAgents></ShowAgents>
            <ReactQueryDevtools initialIsOpen={true} />

       </QueryClientProvider>
    </div>
  )
}

export default AgentLayout