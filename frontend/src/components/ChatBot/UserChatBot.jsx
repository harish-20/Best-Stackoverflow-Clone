import ChatBot from 'react-simple-chatbot'
import { answerQueryOptions, answerQueryResponse } from './answerQuery'
import {
  authenticationQueryOptions,
  authenticationQueryResponse,
} from './authenticationQuery'

import './ChatBot.css'
import { otherQueryOptions, otherQueryResponse } from './otherQuery'
import { questionQueryOptions, questionQueryResponse } from './questionQuery'
import {
  anyOtherQuery,
  askQuery,
  greetUser,
  queryType,
  responseAskQuery,
} from './userQuery'

const UserChatBot = () => {
  const config = {
    width: '400px',
    height: '500px',
    floating: true,
  }

  const steps = [
    ...greetUser,
    ...askQuery,
    ...responseAskQuery,
    ...queryType,
    ...anyOtherQuery,
    ...authenticationQueryOptions,
    ...authenticationQueryResponse,
    ...questionQueryOptions,
    ...questionQueryResponse,
    ...answerQueryOptions,
    ...answerQueryResponse,
    ...otherQueryOptions,
    ...otherQueryResponse,
  ]

  return (
    <div className="chatbot">
      <ChatBot headerTitle="Helper Bot" steps={steps} {...config} />
    </div>
  )
}

export default UserChatBot
