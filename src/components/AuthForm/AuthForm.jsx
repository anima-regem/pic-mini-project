import { Box, VStack, Input, Flex, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import "./AuthForm.css"
import { useNavigate } from "react-router-dom";

const AuthForm = () => {

  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name : '',
    email : '',
    password : '',
    confirmPassword : ''
  });

  const handleAuth = () => {
    if(!inputs.email || !inputs.password ){
      alert("Please fill all the fields");
      return
    }
    navigate("/")
  };
  return (
    <Box className="box1" padding={4}>
      <VStack spacing={4}>
        <Text className='txt'>{isLogin ? "LOGIN" : "SIGN UP"}</Text>
        {!isLogin ? <Input placeholder='Name' type='text' w={60} fontSize={'sm'} 
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
        /> : null }
        <Input placeholder='Email' type='email' w={60} fontSize={'sm'}
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
        <Input placeholder='Password' type='password' w={60} fontSize={'sm'}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        {!isLogin ? <Input placeholder='Confirm Password' type='password' w={60} fontSize={'sm'} 
          value={inputs.confirmPassword}
          onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
        /> : null }
        <button className='btn' onClick={handleAuth}>
          {isLogin ? "Login" : "Signup"} 
        </button>
        <Flex alignItems={'center'} justifyContent={'center'} my={0}  w={60} >
          <Box flex={2} h={"1px"} bg={"gray.500"} />
						<Text mx={1} color={"gray.500"}>
							or
						</Text>
					<Box flex={2} h={"1px"} bg={"gray.500"} />
        </Flex>
        <Box  my={0} border={"1px solid #127B7E"} borderRadius={20} padding={1} w={60}>
          <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
            <Image src='/public/assets/Google logo.svg' w={5} alt='Google logo' />
            <Text mx='2' color={"#127B7E"}>Log in with Google</Text>
          </Flex>
        </Box>

        <Box padding={5}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={14}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Box>
            <Box onClick={() => setIsLogin(!isLogin)} color={"#127B7E"} cursor={"pointer"}>
              {isLogin ? "Sign up" : "Log in"}
            </Box>
          </Flex>
			</Box>
      </VStack>
    </Box> 
  )
}

export default AuthForm
