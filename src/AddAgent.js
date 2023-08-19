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

  const handldeSubmit = (event) =>{
              event.preventDefault();

              agentMutation.mutate({
                name: nameref.current.value,
                phone:phoneref.current.value
              })
  }

  return (
    <div>
      <h2>Add Agent</h2>

      <form onSubmit={handldeSubmit}>

        <div><label>Name</label>
         <input type="text" name="name" ref={nameref}/>
         </div>
        <div>
          <label>Phone Number</label>
          <input type="text" name="phone" ref={phoneref}/></div>

        <div>
          <button disabled={agentMutation.isLoading}>
            {agentMutation.isLoading?"Loading":"Create"}
          </button>
        </div>

      </form>

    </div>
  )
}

export default AddAgent