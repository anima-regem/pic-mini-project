import {Image} from "@chakra-ui/react";

const Message = () => {
  return (
    <div className='msg owner'>
      <div className='messageInfo'>
        <Image className="icon" src="../../../public/assets/avatar.png"/>
        <span className='text2'>Just now</span>
      </div>
      <div className='messageContent'>
        <p className='dialog'>Hello</p>
      </div>
    </div>
  )
}

export default Message
