import React from "react";
import { Box, Center, Flex, Spacer, Square, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Routes, Route, } from "react-router-dom";
import { Image } from '@chakra-ui/react'


const Navbar = () => {
  return (
  <Flex textAlign={"center"} justifyContent={"space-beween"} gap={"10px"}>
      {/* <Center w='100%' bg='green.500'>
    <Text>Box 1</Text>
  </Center> */}
    
<Routes>
  <Route path=""></Route>
</Routes>

  <Box bg='tomato' w='100%' p={4} color='white'  >
  <Flex gridGap={"10px"}>
  <Box boxSize='80px' gap={"10px"}>
  <Image src='https://www.schemaapp.com/wp-content/uploads/2017/01/Shopify_logo_icon-980x1024.png' alt='Dan Abramov' />
</Box>
  <Link to={'/'}>Home</Link>
  {/* <Link to={'/start'}>Men</Link> */}
  <Link to={'/sell'}>Women</Link>
  <Link to={'/market'}>Kid</Link>
  <Link to={'/manage'}>Men</Link>
  <Link to={'/cart'}>Cart</Link>
  <Link to={'/login'}>Login</Link>
  </Flex>
  </Box>



  </Flex>);
};

export default Navbar;
