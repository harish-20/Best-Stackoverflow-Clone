import React from 'react'
import axios from 'axios'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const getAnswer = async (question) => {
    const options = {
      method: 'GET',
      url: 'https://g-search.p.rapidapi.com/search',
      params: {
        q: question,
        location_name: 'London,Ontario,Canada',
        location_parameters_auto: 'true',
      },
      headers: {
        'X-RapidAPI-Key': '6e166479c1msh6773e3eef756278p1c5b4bjsn1c599e62c29b',
        'X-RapidAPI-Host': 'g-search.p.rapidapi.com',
      },
    }
    const response = await axios
      .request(options)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.error(error)
      })
    console.log(response)

    const result = response.data.knowledge_graph.description || 'Not Found'
    const newMessage = createChatBotMessage(result)
    setState((prev) => ({
      prev,
      messages: [...prev.messages, newMessage],
    }))
  }

  const addNewMessage = (userRequest) => {
    getAnswer(userRequest)
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
