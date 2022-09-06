import ChatBot from 'react-simple-chatbot'

import chatBotIcon from '../../assets/chatbot-icon.png'

import './ChatBot.css'
import { useState } from 'react'

const UserChatBot = () => {
  const [isChatBotOn, setIsChatBotOn] = useState(false)

  const showChatbot = () => {
    setIsChatBotOn((state) => !state)
  }

  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ]

  return (
    <div className={isChatBotOn ? 'wrapper' : 'hidden'} onClick={showChatbot}>
      <div className="chatbot">
        {isChatBotOn && <ChatBot steps={steps} />}
        <img src={chatBotIcon} alt="chatbot icon" />
      </div>
    </div>
  )
}

export default UserChatBot
