import React from 'react'
import {useQuery,useQueryClient} from '@tanstack/react-query'
import axios from 'axios'
import AddAgent from './AddAgent'

const FetchAgents = () => {

    const getAgents =async()=> {

        const response = await axios.get("http://localhost:5000/agents")

        return response.data
    }


    const agentQuery = useQuery({
        queryFn: getAgents,
        queryKey:['agents']
        
    })
    const queryClient = useQueryClient();


    if(agentQuery.status === 'loading') return <p>Loading...</p>
    if(agentQuery.status==='error') return <p>stringify(agentQuery.error))</p>
  return (
    <div>

        <ul style={{"listStyle":'none'}}>
           { agentQuery.data.map((agent,idx)=><li key={idx}>{agent.name}{agent.phone}</li> )}
        </ul>
    </div>
  )
}

export default FetchAgents