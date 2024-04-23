
import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPost/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
	return (
		<Container maxW={'1200px'} paddingLeft={"100px"}>
			<Flex gap={10}>
				<Box flex={2} py={10} top={0} borderLeft={'1px solid #127B7E'}>
					<FeedPosts />
				</Box>
				<Box flex={3} mr={50} display={{ base: "none", lg: "block" }} maxW={"400px"} borderLeft={'1px solid #127B7E'}>
					<SuggestedUsers />
				</Box>
			</Flex>
		</Container>
	);
};

export default HomePage;