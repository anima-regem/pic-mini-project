import Message from './Message';
import { doc, onSnapshot } from "firebase/firestore";
import  { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { firestore } from "../../firebase/firebase";


const MessagesComp = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(firestore, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages)
  return (
    <div className='messages'>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  )
}

export default MessagesComp;