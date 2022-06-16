import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Manage = () => {
  const [data,setData]= useState([])
  useEffect(()=>{
    fetch(`https://62aa2300371180affbd03677.mockapi.io/clothes`)
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  return (
    <div>
    {data.map((elem)=>(
      <div key={elem.id}>
        <img src={elem.name} alt="clothes" style={{width:"200px"}} />
      <h2>{elem.price}</h2>
      <NavLink to={`/manage/${elem.id}`}>show more</NavLink>

      </div>
    ))}
    </div>
  )
}

export default Manage