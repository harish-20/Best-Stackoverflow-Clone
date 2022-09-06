import mongoose from 'mongoose'
import Questions from '../models/questions.js'

export const postAnswer = async (req, res) => {
  const { id: _id } = req.params
  const { noOfAnswers, answerBody, userAnswered, userId } = req.body

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json('question unavailable...')
      res.end()
    }
    const updatedQuestion = await Questions.findByIdAndUpdate(_id, {
      $addToSet: { answer: [{ answerBody, userAnswered, userId }] },
    })
    updateNoOfAnswers(_id, noOfAnswers)

    res.status(200).json(updatedQuestion)
    res.end()
  } catch (error) {
    res.status(400).json(error)
    res.end()
  }
}

const updateNoOfAnswers = async (_id, noOfAnswers) => {
  try {
    await Questions.findByIdAndUpdate(_id, {
      $set: { noOfAnswers: noOfAnswers },
    })
  } catch (err) {
    console.log(error)
  }
}

export const deleteAnswer = async (req, res) => {
  const { id: _id } = req.params
  const { answerId, noOfAnswer } = req.body
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      if (!mongoose.Types.ObjectId.isValid(answerId)) {
        res.status(404).json('invalid answerId')
      }
      res.status(404).json('invalid question id')
      res.end()
    }
    await Questions.updateOne({ _id }, { $pull: { answer: { _id: answerId } } })
    res.status(200).json('answer delete updated succesfully')
  } catch (error) {
    console.log(error)
  }
}
