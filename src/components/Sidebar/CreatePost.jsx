import { CgAddR } from "react-icons/cg";
import { Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
	return (
        <Tooltip
                    hasArrow
                    label={"Post"}
                    placement="right"
                    ml={1}
                    openDelay={500}
                    display={{ base: "block", md: "none" }}
                >
                <Link
                    display={"flex"}
                    to={"#"}
                    as={RouterLink}
                    alignitems={"center"}
                    gap={4}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    mt={"auto"}
                    w={{ base: 10, md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    >
                    <CgAddR  size={25} color={"#127B7E"}/>
                    <Box display={{ base: "none", md: "block" }} color={"#127B7E"}>
                        Post
                    </Box>
                </Link>
            </Tooltip>
        );
    };
        
export default Home;