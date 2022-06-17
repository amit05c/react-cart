import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, GridItem } from '@chakra-ui/react'

const Manage = () => {
  const [data,setData]= useState([])
  useEffect(()=>{
    fetch(`https://62aa2300371180affbd03677.mockapi.io/clothes`)
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  return (
    // <div style={{display:"grid"}}>
    // {data.map((elem)=>(
    //   <div key={elem.id}>
    //     <img src={elem.image} alt="clothes" style={{width:"200px"}} />
    //   <h2>{elem.price}</h2>
    //   <NavLink to={`/manage/${elem.id}`}>show more</NavLink>

    //   </div>
    // ))}
    // </div>




    <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>    {data.map(elem=>(

  <GridItem key={elem.id} rowSpan={2} colSpan={1} bg='tomato' >
     
     <img src={elem.image} alt="clothes" style={{width:"200px"}} />
     <h2>{elem.price}</h2>
     <NavLink to={`/manage/${elem.id}`}>show more</NavLink>


  </GridItem>
))}
  
</Grid>
  )
}

export default Manage