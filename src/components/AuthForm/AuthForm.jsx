import { Box, VStack, Input,Button } from "@chakra-ui/react";
import { useState } from "react";
import "./AuthForm.css"

const AuthForm = () => {

  const [isLogin, setIsLogin] = useState(true);
  return (
    <Box className="box1" padding={5}>
        <VStack spacing={4}>
        <Box>Email Id
          <Input type='email'/>
        </Box>
        <Box>Password
          <Input type='password'/>
        </Box>
        {!isLogin ? <Box>Confirm Password<Input type='password'/></Box> : null }
        <Button  w={"full"} size={'sm'} fontSize={14}>
          {isLogin ? "Login" : "Signup"} 
        </Button>
        </VStack>
    </Box> 
  )
}

export default AuthForm
