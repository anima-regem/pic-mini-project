import { Box, Flex, Text } from '@chakra-ui/react';
import {BsGrid3X3} from 'react-icons/bs';

const Profiletabs = () => {
    return <Flex
        w={"full"}
        justifyContent={"center"}
        gap={{base:4,sm:10}}
        textTransform={"uppercase"}
        fontWeight={"bold"}
    >
        <Flex borderTop={"1px solid white"} alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
            <Box fontSize={20}>
                <BsGrid3X3 />
            </Box>
            <Text fontSize={12} display={{base:"none", sm: "block"}}>Posts</Text>
        </Flex> I

        <Flex borderTop={"1px solid white"} alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
            <Box fontSize={20}>
                <BsGrid3X3 />
            </Box>
            <Text fontSize={12} display={{base:"none", sm: "block"}}>Saved</Text>
        </Flex> I

        <Flex borderTop={"1px solid white"} alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
            <Box fontSize={20}>
                <BsGrid3X3 />
            </Box>
            <Text fontSize={12} display={{base:"none", sm: "block"}}>Likes</Text>
        </Flex> I
       

</Flex>;
};

export default Profiletabs;