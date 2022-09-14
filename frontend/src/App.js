import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'

import Navbar from './components/Navbar/Navbar'
import ChatBot from './components/Chatbot/ChatBot'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <Router>
      <ChatBot />
      <Navbar />
      <AllRoutes />
    </Router>
  )
}

export default App
