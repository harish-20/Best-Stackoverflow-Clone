import mongoose from 'mongoose'
import Question from '../models/questions.js'

export const askQuestion = async (req, res) => {
  const postQuestionData = req.body
  const postQuestion = new Question({ ...postQuestionData })
  try {
    await postQuestion.save()

    res.status(200).json('posted question successfully')
    res.end()
  } catch (error) {
    console.log(error)
    res.status(409).json("Could'nt post the question")
    res.end()
  }
}

export const getAllQuestions = async (req, res) => {
  try {
    const questionList = await Question.find({})
    res.status(200).json(questionList)
    res.end()
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: 'some error on getting question' })
    res.end()
  }
}

export const deleteQuestion = async (req, res) => {
  const { id: _id } = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json({ message: 'invalid id' })
      res.end()
    } else {
      await Question.findByIdAndRemove({ _id })

      res.status(200).json({ message: 'deleted succesfully' })
      res.end()
    }
  } catch (error) {
    console.log(error)
  }
}

export const voteQuestion = async (req, res) => {
  const { id: _id } = req.params
  const { value, userId } = req.body

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json({ message: 'invalid id' })
      res.end()
    } else {
      const question = await Question.findById(_id)
      const upIndex = question.upVote.findIndex((id) => id === String(userId))
      const downIndex = question.downVote.findIndex(
        (id) => id === String(userId),
      )

      if (value === 'upVote') {
        if (downIndex !== -1) {
          question.downVote = question.downVote.filter(
            (id) => id !== String(userId),
          )
        }
        if (upIndex === -1) {
          question.upVote.push(userId)
        } else {
          question.upVote = question.upVote.filter(
            (id) => id !== String(userId),
          )
        }
      }
      if (value === 'downVote') {
        if (upIndex !== -1) {
          question.upVote = question.downVote.filter(
            (id) => id !== String(userId),
          )
        }
        if (downIndex === -1) {
          question.downVote.push(userId)
        } else {
          question.downVote = question.downVote.filter(
            (id) => id !== String(userId),
          )
        }
      }

      await Question.findByIdAndUpdate(_id, question)

      res.status(200).json({ message: 'voted succesfully' })
      res.end()
    }
  } catch (error) {
    res.status(404).json({ message: 'invalid id' })
    res.end()
    console.log(error)
  }
}
