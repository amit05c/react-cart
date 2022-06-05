import React from 'react'
import { Button, Input } from '@chakra-ui/react'

const Login = () => {
  return (
    <div style={{width:"80%"}}>Login
        <form>
            <Input type="email" placeholder='email' />
            <Input type="password" placeholder='pass' />
            <Button colorScheme='blue'>Button</Button>
        </form>
    </div>
  )
}

export default Login