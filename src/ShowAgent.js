import React from 'react'
import {useQuery,useQueryClient} from '@tanstack/react-query'
import axios from 'axios'
import AddAgent from './AddAgent'

const ShowAgents = () => {

    const getAgents =async()=> {

        const response = await axios.get("http://localhost:5000/agents")

        return response.data
    }


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

        <ol style={{"listStyle":'none'}}>
           { agentQuery.data.map((agent,idx)=><li key={idx}>{agent.name}{agent.phone}</li> )}
        </ol>
    </div>
  )
}

export default ShowAgents