import {Stack,InputGroup,InputRightAddon, Input, Image} from "@chakra-ui/react";

const InputComp = () => {
  return (
    <div className='input'>
    <Stack spacing={4}>
        <InputGroup>
          <Input type='text' placeholder='Start Messaging....' />
          <InputRightAddon><button>
          <Image w={8} h={8} src="../../../public/assets/SEND.png"/>
          </button></InputRightAddon>
        </InputGroup>
      </Stack>
    </div>
  )
}

export default InputComp;