import {Flex,Box,Text, InputGroup, InputRightElement,Button,Input} from '@chakra-ui/react';
import { useState } from 'react';
import { NotificationsLogo,UnlikeLogo,CommentLogo} from '../../../public/assets/constants';

const PostFooter = ({username}) => {
  const [liked,setliked]=useState(false);
  const[likes,setlikes]=useState(1000);
  const handleLike =() =>{
    if (liked){
      setliked(false);
      setlikes(likes-1);
    }else{
      setliked(true);
      setlikes(likes+1);
    }
  }
  return (
    <>
    <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
     <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
        {!liked? (<NotificationsLogo/>): (<UnlikeLogo/>)}
      </Box>
      <Box cursor={"pointer"} fontSize={18}>
        <CommentLogo/>
      </Box>
    </Flex>
    <Text fontWeight={600} fontSize={'sm'} >
      {likes}Likes
    </Text>
    <Text fontSize={'sm'} fontWeight={700}>
    {username}{""}
      <Text as='span' fontWeight={400}>
        feeling good
      </Text>
    </Text>
    <Text fontSize={'sm'} color={'#127B7E'}>
      view all 1,000 comments
    </Text> 
    <Flex
      alignItems={'center'}
      gap={2}
      justifyContent={'space-between'}
      w={'full'}
    >
      <InputGroup>
        <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14}/>
        <InputRightElement>
          <Button
            size={"xs"}
            fontSize={12}
            color={"#127B7E"}
            fontWeight={'semibold'}
            padding={4}
            _hover={{
              color: "#127B7E",
            }}
            transition={"0.2 ease in out"}
          >
            Post</Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
    </>
  );
};
export default PostFooter;
