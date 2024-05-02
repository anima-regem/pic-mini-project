import {HStack, Image, VStack, Text} from "@chakra-ui/react";

const ChatsComp = () => {
  return (
    <>
    <div className="comp1">
      <HStack spacing={4}>
        <Image className="icon" src="../../../public/assets/avatar.png"/>
        <VStack spacing={0} alignItems={'start'}>
          <Text className='text'>username</Text>
          <Text className='text2'>Attached a new message</Text>
        </VStack>
      </HStack>
    </div>
    <div className="comp1">
      <HStack spacing={4}>
        <Image className="icon" src="../../../public/assets/avatar.png"/>
        <VStack spacing={0} alignItems={'start'}>
          <Text className='text'>username</Text>
          <Text className='text2'>Attached a new message</Text>
        </VStack>
      </HStack>
    </div>
    <div className="comp1">
      <HStack spacing={4}>
        <Image className="icon" src="../../../public/assets/avatar.png"/>
        <VStack spacing={0} alignItems={'start'}>
          <Text className='text'>username</Text>
          <Text className='text2'>Attached a new message</Text>
        </VStack>
      </HStack>
    </div>
    <div className="comp1">
      <HStack spacing={4}>
        <Image className="icon" src="../../../public/assets/avatar.png"/>
        <VStack spacing={0} alignItems={'start'}>
          <Text className='text'>username</Text>
          <Text className='text2'>Attached a new message</Text>
        </VStack>
      </HStack>
    </div>
    </>
  )
}

export default ChatsComp;