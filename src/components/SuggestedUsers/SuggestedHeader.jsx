import { Avatar,Flex,Text, Button} from '@chakra-ui/react';
import useLogout from "../../hooks/useLogout"

const SuggestedHeader = () => {

  const {handleLogout , isLoggingOut} = useLogout();
  return (
    <Flex justifyContent={"space-between"} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar name='As a programmer' size={"lg"} src='assets/avatar.png'/>
            <Text fontSize={12} fontWeight={'bold'}>
                asaprogrammer_
            </Text>
        </Flex>   
        <Button
            onClick= {handleLogout}
            isLoading = {isLoggingOut}
            variant = {'ghost'}
            _hover = {{bg: "transparent"}}
            fontSize={14}
            fontWeight={'medium'}
            color={'#127B7E'}
            cursor={'pointer'}
        >Log out
        </Button>
    </Flex>
  );
};
export default SuggestedHeader;