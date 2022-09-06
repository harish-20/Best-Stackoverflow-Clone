import moment from 'moment'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Questions = ({ question }) => {
  const currentUser = useSelector((state) => state.currentUserReducer)
  const alertToLogin = () => {
    if (!currentUser) alert('login to see answers')
  }
  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        <p>{question.upVote.length - question.downVote.length}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.answer.length}</p>
        <p>answers</p>
      </div>
      <div className="display-question-details">
        <Link
          className="display-question-links"
          to={currentUser === null ? `/Auth` : `/Questions/${question._id}`}
          onClick={alertToLogin}
        >
          {question.questionTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p className="display-time">
            asked {moment(question.askedOn).fromNow()} by {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Questions
