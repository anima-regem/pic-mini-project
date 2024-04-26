import {Container, Flex} from '@chakra-ui/react';
import  Profileheader from '../../components/profile/Profileheader';
import ProfilePosts from '../../components/profile/ProfilePosts';
import Profiletabs from '../../components/profile/Profiletabs';
const ProfilePage = () => {
    return <Container mxW="container.lg" py={5}>
      <Flex
            py={10}
            px={4}
            pl={{ base: 4,md: 10 }}
            w={"full"}
            mx={"auto"}
            flexDirection={"column"}
        >
            <Profileheader /> 
        </Flex>
        <Flex
            px={{base:2,sm:4}}
            maxW={"full"}
            mx={"auto"}
            borderTop={"1px solid"}
            borderColor={"whiteAlpha.300"}
            direction={"column"}
        >
            <Profiletabs/>
            <ProfilePosts/>
        </Flex>
    </Container>;

};

export default ProfilePage;