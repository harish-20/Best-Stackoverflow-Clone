import React from 'react'
import axios from 'axios'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const getAnswer = async (question) => {
    const formattedQuestion = question.split(' ').join('+')
    const options = {
      method: 'GET',
      url:
        'https://google-search3.p.rapidapi.com/api/v1/search/q=' +
        formattedQuestion,
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EN',
        'X-RapidAPI-Key': 'your key',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
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

    const getValidResult = (results) => {
      const filteredList = results.filter((result) => result.description !== '')

      return filteredList[0].description || "Sorry can't get your question"
    }

    const result = getValidResult(response.results)

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
