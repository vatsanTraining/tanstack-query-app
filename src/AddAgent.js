import React ,{useRef} from 'react'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const createAgent = async({name,phone}) =>{

  response = await axios.post("http://localhost:5050/agents",{
    name:name,
    phone:phone,
    id:Date.now()
  })
  return response.data
}

const AddAgent = () => {
  const name = useRef();
  const phone = useRef();

  const queryClient = useQueryClient();

  const agentMutation = useMutation({
    mutationFn:createAgent,
    onSuccess: data =>{
      queryClient.setQueryData(["agents",data.id],data)
    }
  })

  return (
    <div>AddAgent</div>
  )
}

export default AddAgent