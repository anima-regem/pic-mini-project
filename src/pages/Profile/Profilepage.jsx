import {Container, Flex} from '@chakra-ui/react';
<<<<<<< HEAD
import  ProfileHeader from './ProfileHeader';
import ProfilePosts from './ProfilePosts';
import Profiletabs from './Profiletabs';
=======
import Profileheader from "../../components/ProfilePage/Profileheader";
import Profiletabs from "../../components/ProfilePage/Profiletabs";
import ProfilePosts from "../../components/ProfilePage/ProfilePosts";
>>>>>>> 6c504f76e7e2578596c233c501c1783ac54fb92f

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