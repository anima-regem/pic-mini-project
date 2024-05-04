import { Box, Flex, Image,  Tooltip, Link } from '@chakra-ui/react';
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { FiMessageCircle } from "react-icons/fi";
import { IoSearchSharp,IoNotifications } from "react-icons/io5";



const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} color={"#127B7E "}/>,
      text : "Home",
      link : "/",
    },
    {
      icon: <IoSearchSharp size={25} color={"#127B7E "}/>,
      text: "Search",
    },
    {
      icon: <CgAddR size={25} color={"#127B7E "}/>,
      text: "Post",
    },
    {
      icon: < FiMessageCircle size={25} color={"#127B7E"}/>,
      text: "Chats",
    },
    {
      icon: <IoNotifications size={25} color={"#127B7E "}/>,
      text : "Notifications",
      link : "/",
    },
    // {
    //   icon : <Avatar size={25} name="achu"src="/avatar.png"/>,
    //   text : "Profile",
    //   link : "/:username",
    // }

    // Replace other icons similarly with Image components or regular img tags
  ];
  

  return (
    <Box 
      height={"100vh"}
      borderRight={"1px solid #127B7E"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4}}
    >
      <Flex direction={"column"} gap={10} w='full'>
        <Image src='/public/assets/PIC LOGO.png' w={100} h={58} alt='PIC' />
      </Flex>
      <Flex direction={"column"} gap={5} cursor={"pointer"} paddingTop={10}>
        {sidebarItems.map((item,index)=> (
          <Tooltip
            key={index}
            hasArrow
            label={item.text}
            placement="right"
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
          >
            <Link 
              display={"flex"}
              to={item.link || null}
              as={RouterLink}
              alignitems={"center"}
              gap={4}
              _hover={{bg: "whiteAlpha.400"}}
              borderRadius={6}
              p={2}
              mt={"auto"}
              w={{base:10,md:"full"}}
              justifyContent={{ base: "center", md: "flex-start" }}
             >
                {item.icon}
                <Box display={{base:"none",md:"block" }} color={"#127B7E"}>{item.text}</Box>
            </Link> 
          </Tooltip>
        ))};
      </Flex>
      <Tooltip
        hasArrow
        label={"Logout"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Link
          display={'flex'}
          to={'/auth'}
          as={RouterLink}
          alignitems={'center'}
          gap={4}
          _hover={{bg: "whiteAlpha.400"}}
          borderradius={6}
          p={2}
          w={{base:10,md:"full"}}
          justifycontent={{ base: "center", md: "flex-start" }}
         >
          <BiLogOut size={25} color={"#127B7E"} />
          <Box display={{base :"none",md:"block"} }  color={"#127B7E"}>Logout</Box>
        </Link> 
      </Tooltip>
    </Box> 
  );
};

export default Sidebar;
