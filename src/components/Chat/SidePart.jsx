import Navbar from '../../components/Chat/Navbar'
import ChatDisplay from './ChatDisplay';
import ChatsComp from './ChatsComp';


const SidePart = () => {
  return (
    <div>
      <Navbar/>
      <ChatDisplay/>
      <ChatsComp/>
    </div>
  )
}

export default SidePart;
