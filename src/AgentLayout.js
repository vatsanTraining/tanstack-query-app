import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import {FetchAgent} from './FetchAgent'
const AgentLayout = () => {

    const queryClient = new QueryClient();

  return (
    <div>
        <QueryClientProvider queryClient={queryClient}>
            <FetchAgent></FetchAgent>
       </QueryClientProvider>
    </div>
  )
}

export default AgentLayout