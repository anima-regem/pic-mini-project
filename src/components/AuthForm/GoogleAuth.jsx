import { Box, Image, Flex, Text } from "@chakra-ui/react";

const GoogleAuth = () => {
  return (
    <>
      <Box
        my={0}
        border={"1px solid #127B7E"}
        borderRadius={20}
        padding={1}
        w={60}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
        >
          <Image src="/public/assets/Google logo.svg" w={5} alt="Google logo" />
          <Text mx="2" color={"#127B7E"}>
            Log in with Google
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default GoogleAuth;
