import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuestion } from '../../actions/question'

import './AskQuestion.css'

const AskQuestion = () => {
  const user = useSelector((state) => state.currentUserReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [questionTitle, setQuestionTitle] = useState('')
  const [questionBody, setQuestionBody] = useState('')
  const [questionTags, setQuestionTags] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const split = questionTags.split(' ')
    dispatch(
      askQuestion(
        {
          questionTitle,
          questionBody,
          questionTags: split,
          userPosted: user.result.name,
          userId: user.result._id,
        },
        navigate,
      ),
    )
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setQuestionBody(questionBody + '\n')
    }
  }

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public question</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input
                type="text"
                name="questionTitle"
                id="ask-ques-title"
                placeholder="e.g. Is there an JS function to find all prime number in a list?"
                value={questionTitle}
                onChange={(e) => setQuestionTitle(e.target.value)}
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone who needs to answer your
                question
              </p>
              <textarea
                type="text"
                name="question"
                id="ask-ques-body"
                value={questionBody}
                onChange={(e) => setQuestionBody(e.target.value)}
                onKeyDown={(e) => handleEnter(e)}
              />
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add upto 5 tags to describe what is your question about</p>
              <input
                type="text"
                name="questionTags"
                id="ask-ques-tags"
                placeholder="e.g. (xml typescript wordpress)"
                value={questionTags}
                onChange={(e) => setQuestionTags(e.target.value)}
              />
            </label>
          </div>
          <input
            className="review-btn"
            type="submit"
            value="Review your question"
          />
        </form>
      </div>
    </div>
  )
}

export default AskQuestion
