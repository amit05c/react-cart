import React from 'react'
import { Box, Button, Flex, Grid, Image,} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, ChatIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Cupon from './Cupon'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'



const Home = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    let getData= async ()=>{
      const res= await axios("https://fakestoreapi.com/products?limit=10")
      // console.log(res.data)
      setData(res.data)
    }
    getData()
  },[])
  console.log(data)
  return (
    <div>
      <Cupon/>
      <Flex flexDirection={"column"}>
     <Box backgroundColor={"gray"} width={"100%"} height={"100vh"}>
      
       <Grid  templateColumns='repeat(5, 1fr)'
        templateRows='repeat(2, 1fr)'  
       >
      {data.map(elem=>(
        <div key={elem.id}>
       <NavLink to={"/manage"}>  <Image   src={elem.image} width={"100%"} />  </NavLink>
         </div>
      ))}
         </Grid>
       
     </Box>

     <Box bg={"tomato"} height={"50vh"}>
      <Flex justifyContent={"space-evenly"}>
        <div>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        </div>


        <div>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        </div>


        <div>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        </div>


        <div>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        </div>

      </Flex >
      <Box style={{margin:"50px"}}>
        <h2>contact us</h2>
        <Flex justifyContent={"center"} gap={"10px"}>
        <PhoneIcon />
        <ChatIcon />
        <ExternalLinkIcon />
        <Button colorScheme='twitter' > Twitter</Button>
        </Flex>
        
        
      </Box>
     </Box>
     </Flex>
        
    </div>
  )
}

export default Home