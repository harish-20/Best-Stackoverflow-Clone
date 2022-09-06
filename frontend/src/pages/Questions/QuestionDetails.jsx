import copy from 'copy-to-clipboard'
import moment from 'moment'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import {
  deleteQuestion,
  postAnswer,
  voteQuestion,
} from '../../actions/question'

import upArrow from '../../assets/uparrow.svg'
import downArrow from '../../assets/downarrow.svg'

import './Questions.css'

const QuestionDetails = () => {
  const [answer, setAnswer] = useState('')
  const questionList = useSelector((state) => state.questionReducer)
  const user = useSelector((state) => state.currentUserReducer)

  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const handleAnswerSubmit = (e, answerLength) => {
    e.preventDefault()
    if (!user) {
      alert('sign up OR login to submit answer')
      navigate('/')
    } else {
      if (!answer) {
        alert('your answer is empty')
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: answer,
            userAnswered: user.result.name,
            userId: user.result._id,
          }),
        )
        setAnswer('')
      }
    }
  }

  const handleShare = () => {
    const url = 'https://stackoverflow-clone-harish.netlify.app/'
    const fullurl = url + location.pathname
    copy(fullurl)
    alert('url copied')
  }

  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate))
  }

  const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote', user.result._id))
  }
  const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downVote', user.result._id))
  }

  return (
    <div className="question-details-page">
      {questionList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upArrow}
                        alt="up arrow"
                        width="18"
                        className="votes-icon"
                        onClick={(e) => handleUpVote()}
                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img
                        src={downArrow}
                        alt="down arrow"
                        width="18"
                        className="votes-icon"
                        onClick={(e) => handleDownVote()}
                      />
                    </div>
                    <div className="user-cont" style={{ width: '100%' }}>
                      <div>
                        <p className="question-body">{question.questionBody}</p>
                        <div className="question-details-tags">
                          {question.questionTags.map((tag) => (
                            <p key={tag}>{tag}</p>
                          ))}
                        </div>
                        <div className="question-action-user">
                          <button
                            type="button"
                            className="edit-question-btn"
                            onClick={handleShare}
                          >
                            Share
                          </button>
                          {user.result._id === question.userId && (
                            <button
                              type="button"
                              className="edit-question-btn"
                              onClick={(e) => handleDelete(question._id)}
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      </div>
                      <div>
                        <div>
                          <span>
                            asked on {moment(question.askedOn).fromNow()}
                          </span>
                        </div>
                        <div style={{ display: 'flex' }}>
                          <Link
                            to={`/Users/${question.userId}`}
                            className="user-link"
                            style={{ color: '#0086d8', textDecoration: 'none' }}
                          >
                            <Avatar
                              backgroundColor={'orange'}
                              color="white"
                              px="8px"
                              py="5px"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div style={{ display: 'inline' }}>
                              {question.userPosted}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <h3>{question.answer.length} Answers</h3>
                  <DisplayAnswer
                    question={question}
                    handleShare={handleShare}
                  />
                </section>
                <section className="post-ans-container">
                  <h3>Your Answers</h3>
                  <form
                    onSubmit={(e) =>
                      handleAnswerSubmit(e, question.answer.length)
                    }
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <span>
                    Browse other question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {' '}
                        {tag}
                      </Link>
                    ))}{' '}
                    or{' '}
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: 'none', color: '#009dff' }}
                    >
                      ask your own question.
                    </Link>
                  </span>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  )
}

export default QuestionDetails
