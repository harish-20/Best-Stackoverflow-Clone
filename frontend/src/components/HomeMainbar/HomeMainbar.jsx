import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { fetchAllQuestions } from '../../actions/question'
import Questions from './Questions'

import './HomeMainbar.css'

const HomeMainbar = () => {
  //hooks variables
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  // hooks fuctions
  useEffect(() => {
    dispatch(fetchAllQuestions())
    setTimeout(() => {}, 6000)
  }, [dispatch])

  // state variables
  const user = useSelector((state) => state.currentUserReducer)
  const questionList = useSelector((state) => state.questionReducer)

  //state functions
  const auth = () => {
    if (user) {
      navigate('/AskQuestion')
    } else {
      alert('login or signup to ask question')
      navigate('/Auth')
    }
  }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === '/' ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={() => auth()} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {!questionList.data ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.data?.length} questions</p>
            {questionList.data.map((question) => (
              <Questions question={question} key={question._id} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default HomeMainbar
