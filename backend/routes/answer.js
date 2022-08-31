import express from 'express'

import { postAnswer, deleteAnswer } from '../controllers/answer.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.patch('/post/:id', auth, postAnswer)

router.patch('/delete/:id', auth, deleteAnswer)
export default router
