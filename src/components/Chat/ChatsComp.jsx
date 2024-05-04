import { HStack, Image, VStack, Text } from "@chakra-ui/react";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { firestore } from "../../firebase/firebase";

const ChatsComp = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(firestore, "chats", currentUser.uid),
        (doc) => {
          if (doc.exists()) {
            setChats(doc.data());
          } else {
            console.log("No such document!");
            setChats({});
          }
        }
      );

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <>
      <div className="comp1">
        {Object.entries(chats)
          .sort(([, chatA], [, chatB]) => chatB.date - chatA.date)
          .map(([chatId, chat]) => (
            <div key={chatId} onClick={() => handleSelect(chat.userInfo)}>
              <div className="comp1">
                <HStack spacing={4}>
                  <Image
                    className="icon"
                    src="../../../public/assets/avatar.png"
                  />
                  <VStack spacing={0} alignItems={"start"}>
                    <Text className="text">{chat.userInfo.username}</Text>
                    <Text className="text2">{chat.lastMessage?.text}</Text>
                  </VStack>
                </HStack>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ChatsComp;
