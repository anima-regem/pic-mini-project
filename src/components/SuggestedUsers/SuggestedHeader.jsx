import { Avatar,Flex,Text,Link} from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom';
const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar name='As a programmer' size={"lg"} src='assets/avatar.png'/>
            <Text fontSize={12} fontWeight={'bold'}>
                asaprogrammer_
            </Text>
        </Flex>   
        <Link
            as={RouterLink} 
            to={"/auth"}
            fontSize={14}
            fontWeight={'medium'}
            color={'#127B7E'}
            cursor={'pointer'}
        >Log out
        </Link>
    </Flex>
  );
};
export default SuggestedHeader;