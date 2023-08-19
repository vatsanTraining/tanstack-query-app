import React ,{useRef} from 'react'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import axios from 'axios'


const createAgent = async({name,phone}) =>{

  const response = await axios.post("http://localhost:5000/agents",{
    name:name,
    phone:phone,
    id:Date.now()
  })
  return response.data
}

const AddAgent = () => {
  const nameRef = useRef();
  const phoneRef = useRef();

  const queryClient = useQueryClient();

  const agentMutation = useMutation({
    mutationFn:createAgent,
    onSuccess: data =>{
      queryClient.setQueryData(["agents",data.id],data)
      queryClient.invalidateQueries(['agents'],{exact:true})
    }
  })

  const handldeSubmit = (event) =>{
              event.preventDefault();

              agentMutation.mutate({
                name: nameRef.current.value,
                phone:phoneRef.current.value
              })
  }

  return (
    <div>
      <h2>Add Agent</h2>

      <form onSubmit={handldeSubmit}>

        <div><label>Name</label>
         <input type="text" name="name" ref={nameRef}/>
         </div>
        <div>
          <label>Phone Number</label>
          <input type="text" name="phone" ref={phoneRef}/></div>

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