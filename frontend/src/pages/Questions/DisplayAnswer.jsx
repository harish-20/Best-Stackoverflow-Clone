import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteAnswer } from '../../actions/question'

import Avatar from '../../components/Avatar/Avatar'

import './Questions.css'

const DisplayAnswer = ({ question, handleShare }) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const user = useSelector((state) => state.currentUserReducer)

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
  }
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div className="">
              <button type="" onClick={handleShare}>
                Share
              </button>
              {user.result._id === ans.userId && (
                <button
                  type=""
                  onClick={(e) => handleDelete(ans._id, question.noOfAnswers)}
                >
                  Delete
                </button>
              )}
            </div>
            <div className="">
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/Users/${ans.userId}`}
                className="user-link"
                style={{ color: '#0086d8' }}
              >
                <Avatar
                  backgroundColor={'#008698'}
                  color="white"
                  px="8px"
                  py="5px"
                >
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div className="" style={{ display: 'inline' }}>
                  {ans.userAnswered}
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayAnswer
