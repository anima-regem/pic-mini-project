import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
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
			<Notifications />
			<ProfileLink />
		</>
	);
};

export default SidebarItems;