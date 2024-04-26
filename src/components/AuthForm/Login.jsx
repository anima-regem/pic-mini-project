import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input,Alert, AlertIcon ,InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import "./AuthForm.css";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const {error, login } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <>
      <Input
        placeholder="Email"
        type="email"
        w={"full"}
        fontSize={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          w={"full"}
          fontSize={"sm"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h="full">
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {error && (
				<Alert status='error' fontSize={13} p={2} borderRadius={4}>
					<AlertIcon fontSize={12} />
					{error.message}
				</Alert>
			)}
      <button className="btn" 
				onClick={() => login(inputs)}>Login</button>
    </>
  );
};

export default Login;
