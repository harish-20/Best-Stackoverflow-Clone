import 'dotenv/config'
import twilio from 'twilio'
import config from '../twilio/config.js'

const client = twilio(config.accountSID, config.authToken)

export const sendOtp = async (req, res) => {
  try {
    await client.verify
      .services(config.serviceId)
      .verifications.create({
        to: '+91' + req.body.phoneNumber,
        channel: 'sms',
      })
      .then((data) => {
        res.json(data)
      })
      .catch(() => {
        res.json({ message: 'otp not sent' })
      })
    res.end()
  } catch (error) {
    console.log(error)
  }
  res.end()
}

export const verifyOtp = async (req, res) => {
  try {
    const data = await client.verify
      .services(config.serviceId)
      .verificationChecks.create({
        to: '+91' + req.body.phoneNumber,
        code: req.body.otp,
      })
      .then((data) => {
        data
        res.json(data.valid)
      })
    res.end()
  } catch (error) {
    res.json({ isVerified: false })
    res.end()
  }

  res.end()
}
