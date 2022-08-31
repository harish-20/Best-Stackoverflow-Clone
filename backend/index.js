import 'dotenv/config'

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRouter from './routes/user.js'
import questionRouter from './routes/questions.js'
import answerRouter from './routes/answer.js'

const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err)

    console.log('mongoDb is ready to go...')
  },
)

const app = express()

app.use(express.json({ limit: '30mb', extented: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(
  cors({
    origin: '*',
  }),
)

app.use('/user', userRouter)
app.use('/questions', questionRouter)
app.use('/answers', answerRouter)

app.listen(PORT, () => {
  console.log(`server start at ${PORT}`)
})
