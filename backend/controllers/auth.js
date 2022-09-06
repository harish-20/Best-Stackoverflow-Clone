import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import 'dotenv/config'

import { User } from '../models/auth.js'

export const signup = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body
  try {
    const existingUser = await User.findOne({ email })
    if (existingUser !== null) {
      res.status(404).json({ message: 'Email already exists...' })
    } else {
      const hashedPassword = await bcrypt.hash(password, 12)
      const user = { name, email, password: hashedPassword, phoneNumber }

      const newUser = await User.create(user)
      const token = jwt.sign(
        { email: newUser.name, id: newUser._id },
        'thisshouldnotshared',
        { expiresIn: '1hr' },
      )
      res.status(200).json({ result: newUser, token })
    }
    res.end()
  } catch (error) {
    console.log(error)
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const existingUser = await User.findOne({ email })
    if (existingUser === null) {
      res.status(404).json('User not exists')
      res.end()
    } else {
      const isValidPassword = bcrypt.compare(password, existingUser.password)

      if (!isValidPassword) {
        res.status(404).json('Invalid credentials')
        res.end()
      } else {
        const token = jwt.sign(
          { email: existingUser.name, id: existingUser._id },
          process.env.JWTPASSSWORD,
          { expiresIn: '1hr' },
        )
        res.status(200).json({ result: existingUser, token })
      }
    }
    res.end()
  } catch (error) {
    console.log(error)
  }
}
