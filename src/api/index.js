import axios from 'axios'

export const getAgents =async()=> {

    const response = await axios.get("http://localhost:5000/agents")

    return response.data
}

export const createAgent = async({name,phone}) =>{

    const response = await axios.post("http://localhost:5000/agents",{
      name:name,
      phone:phone,
      id:Date.now()
    })
    return response.data
  }
  