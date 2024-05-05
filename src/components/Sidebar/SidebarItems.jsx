import CreatePost from "./CreatePost";
import Home from "./Home";
import ProfileLink from "./ProfileLink.jsx";
import Search from "./Search";
import Chatbox from "./Chatbox";

const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<CreatePost />
            <Chatbox/>
			<ProfileLink />
		</>
	);
};

export default SidebarItems;