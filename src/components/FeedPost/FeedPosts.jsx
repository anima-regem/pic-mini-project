import { Container, VStack ,Skeleton,SkeletonCircle,Flex,Box} from '@chakra-ui/react'
import FeedPost from './FeedPost';
import { useEffect,useState } from 'react';

const FeedPosts = () => {
  const[isLoading, setIsLoding]=useState(true);

  useEffect(() => {
    setTimeout(() =>{
      setIsLoding(false)
    },2000 )
  },[])

  return (
    <Container maxW={"container.lg"} py={10} px={2} paddingLeft={'50px'}>
      {isLoading && [0.1,2,3].map((_,idx) => (
        <VStack key={idx} gap={4} alignItems={'flex-start'} mp={10}>
          <Flex gap={2}>
            <SkeletonCircle size='10' />
            <VStack gap={"2"} alignItems={"flex-start"}>
              <Skeleton height='10px' w={'200px'}/>
              <Skeleton height='10px' w={'200px'}/>
            </VStack>
          </Flex>
          <Skeleton w="full">
            <Box h={'500px'}>Contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}
    {!isLoading && (
      <>
        <FeedPost img='/assets/post.png' username='aswani' avatar='/avatar.png'/>
        <FeedPost img='/assets/post.png' username='greeshma' avatar='/avatar.png'/>
        <FeedPost img='/assets/post.png' username='sandra' avatar='/avatar.png'/>
        <FeedPost img='assets/post.png' username='anurag' avatar='/avatar.png'/>
      </>
    )}    
    </Container>
  )
}
export default FeedPosts;