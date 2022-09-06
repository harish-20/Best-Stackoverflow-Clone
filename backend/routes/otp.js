import express from 'express'
import { sendOtp, verifyOtp } from '../controllers/otp.js'

const router = express.Router()

router.post('/sendOtp', sendOtp)

router.post('/verifyOtp', verifyOtp)

export default router
