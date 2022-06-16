import React, { useState } from 'react'
import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const MensData = () => {
    const params = useParams()
    const [data,setData]= useState({})
    // console.log(params)
    useEffect(()=>{
        fetch(`https://62aa2300371180affbd03677.mockapi.io/clothes/${params.id}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    console.log(data)
  return (
    <div >MensData
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
       <img src={data.name} alt="clothes" width={"200px"} />
       <p>{data.price}</p>
       <p>{data.id}</p>
      <NavLink to={`/manage/${params.id}/${data.id}`}>Add to cart</NavLink>
      </div>
    </div>
  )
}

export default MensData