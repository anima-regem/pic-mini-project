import SidePart from "../../components/Chat/SidePart";
import ChatPart from "../../components/Chat/ChatPart";
import { Box, Container, Flex } from "@chakra-ui/react";
import './Chat.css';

const Chat = () => {
  return (
  <Container maxW={'container-lg'} paddingLeft={"0px"} fontFamily="Sora , sans-serif">
        <Flex gap={10}>
         <Box flex={2} borderRight={'1.4px solid #127B7E'} py={10} top={0} display={{ base: "none", lg: "block" }}>
            <SidePart /> 
          </Box>
				<Box flex={3} mr={50} maxW={"1200px"} height={'580px'} >
					<ChatPart />
				</Box>
			</Flex>
		</Container>
	);
  }
export default Chat;