import React from 'react'
import { responses } from './responses'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const addNewMessage = (userRequest) => {
    const generateResponse =
      responses[userRequest] ||
      "Sorry i can' understand your request. What is your query('question', 'answer', 'login', 'signup' or 'password)"

    const newMessage = createChatBotMessage(generateResponse)
    setState((prev) => ({
      prev,
      messages: [...prev.messages, newMessage],
    }))
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { addNewMessage },
        })
      })}
    </div>
  )
}

export default ActionProvider
