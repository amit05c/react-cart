import React, { useContext, useState } from 'react'
import { Button, Input } from '@chakra-ui/react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const [data,setData]= useState({})
  const {token,setToken}= useContext(AuthContext)


  const handleChange = (e)=>{
    const {name,value} = e.target
    setData({...data,
       [name]:value})
      //  console.log(data)
   }

   const handleSubmit = (e)=>{
    e.preventDefault()

  //  console.log(data)
  //  console.log(data.password)
   
  //  let res= axios({
  // method:"POST",
  // url: "https://reqres.in/api/login",
  // data:{
  //   email:data.email,
  //   password:data.password
  // }
  //   })

  fetch("https://reqres.in/api/login",{
    method:"POST",
    headers:{
        "content-type": "application/json"
    },
    body: JSON.stringify({
     "email": data.email,
     "password": data.password
    })
    
})
.then(r=>r.json())
.then((data)=>setToken(data.token))

}

if(!token==""){
  return <Navigate to={'/manage'}/>
}
  return (
    <div style={{width:"80%"}}>Login
    <h1>{token}</h1>
        <form onSubmit={handleSubmit}>
            <Input  onChange={handleChange} name="email" type="email" placeholder='email' />
            <Input onChange={handleChange} name="password" type="password" placeholder='pass' />
            <Button type='submit' colorScheme='blue'>Login</Button>
        </form>
    </div>
  )
}

export default Login