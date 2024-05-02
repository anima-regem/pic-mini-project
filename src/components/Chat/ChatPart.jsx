import {HStack, Image, VStack, Text, Divider} from "@chakra-ui/react";
import MessagesComp from './MessagesComp';
import InputComp from './InputComp';

const ChatPart = () => {
  return (
    <div className="chatNav">
      <HStack spacing={4}>
        <Image className="icon" src="../../../public/assets/avatar.png"/>
        <VStack spacing={0} alignItems={'start'} >
          <Text className='text'>username</Text>
          <Text className='text2' size={8}>Active 5 mins ago</Text>
        </VStack>
      </HStack>
      <Divider className='divider'/>
      <MessagesComp/>
      <InputComp/>
    </div>
  )
}

export default ChatPart;