import { createChatBotMessage } from 'react-chatbot-kit'

const config = {
  botName: 'Helper Bot',
  initialMessages: [
    createChatBotMessage(
      `Hi there user. I am here to clear all your doubt.
  what is your query('question', 'answer', 'login', 'signup' or 'password)`,
    ),
  ],
}

export default config
