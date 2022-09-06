import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'

import Navbar from './components/Navbar/Navbar'
import UserChatBot from './components/ChatBot/UserChatBot'

import './App.css'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <Router>
      <Navbar />
      <UserChatBot />
      <AllRoutes />
    </Router>
  )
}

export default App
