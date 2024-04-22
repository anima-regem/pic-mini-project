import {VStack,Flex,Text,Box} from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
  return <VStack py={8} px={6} gap={4}>
    <SuggestedHeader/>
    <Flex alignItems={"center"} justifyContent={'space-between'} w={'full'}>
      <Text fontSize={12} fontWeight={"bold"} color={'#127B7E'}>
          Suggested for you
      </Text>
      <Text fontSize={12} fontWeight={"bold"} color={'#127B7E'} cursor={'pointer'}>
        See All
      </Text>
    </Flex>
    <SuggestedUser name='Anoop' followers={1221} avatar='/assets/avatar.png'/>
    <SuggestedUser name='Adithya' followers={3007} avatar='/assets/avatar.png'/>
    <SuggestedUser name='Sidharth' followers={764} avatar='/assets/avatar.png'/>
  </VStack>;
}
export default SuggestedUsers;
