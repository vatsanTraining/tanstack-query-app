import React from 'react'
import {useQuery,useQueryClient} from '@tanstack/react-query'
import AddAgent from './AddAgent'
import {getAgents} from './api'
const FetchAgents = () => {

   
    const agentQuery = useQuery({
        queryFn: getAgents,
        queryKey:['agents'],
        refetchInterval: 65000,
        staleTime:1000 * 60 
       
    })


    if(agentQuery.status === 'loading') return <p>Loading...</p>
    if(agentQuery.status==='error') return <p>{JSON.stringify(agentQuery.error)}</p>
  return (
    <div>

        <ul style={{"listStyle":'none'}}>
           { agentQuery.data.map((agent,idx)=><li key={idx}>{agent.name}{agent.phone}</li> )}
        </ul>
    </div>
  )
}

export default FetchAgents