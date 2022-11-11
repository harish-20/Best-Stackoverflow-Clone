import Chatbot from 'react-chatbot-kit'

import ActionProvider from './actionProvider'
import config from './config'
import MessageParser from './messageParser'

import chatboticon from '../../assets/chatbot-icon.png'

import 'react-chatbot-kit/build/main.css'
import './chatbot.css'
import { useState } from 'react'

const ChatBot = () => {
  const [isChatbotOn, setIsChatbotOn] = useState(false)

  const hideChatbot = () => {
    setIsChatbotOn((prev) => !prev)
  }
  return (
    <div>
      {isChatbotOn && <div className="wrapper" onClick={hideChatbot}></div>}
      <div className="chatbot-container">
        {isChatbotOn ? (
          <>
            <span onClick={hideChatbot} className="closebtn">
              Close X
            </span>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </>
        ) : (
          <img src={chatboticon} alt="chatboticon" onClick={hideChatbot} />
        )}
      </div>
    </div>
  )
}

export default ChatBot
