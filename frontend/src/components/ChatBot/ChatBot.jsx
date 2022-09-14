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
    <div className={isChatbotOn ? 'wrapper' : ''}>
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
          <img
            src="https://www.zeroshotbot.com/user/themes/bootstrap4/images/root/square-plus-pattern.png"
            alt="chatboticon"
            onClick={hideChatbot}
          />
        )}
      </div>
    </div>
  )
}

export default ChatBot
