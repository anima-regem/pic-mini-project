import {Text, Stack,InputGroup,InputRightAddon, Input, Image} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <div>
        <Text className="txt">Messages</Text>
      </div>
      <Stack spacing={4} paddingRight={4} paddingTop={2}>
        <InputGroup>
          <Input type='text' placeholder='Search user' />
          <InputRightAddon><button>
          <Image w={8} h={8} src="../../../public/assets/search.png"/>
          </button></InputRightAddon>
        </InputGroup>
      </Stack>
    </>
  )
}

export default Navbar;