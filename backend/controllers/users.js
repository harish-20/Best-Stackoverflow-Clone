import { User } from '../models/auth.js'
import mongoose from 'mongoose'

export const getAllUsers = async (req, res) => {
  try {
    const usersFullDetails = await User.find({})

    const usersDetails = usersFullDetails.map((user) => {
      const { _id, name, email, tags, joinedOn, about, location } = user
      return { _id, name, email, tags, joinedOn, about, location }
    })

    res.status(200).json(usersDetails)
    res.end()
  } catch (error) {
    console.log(error)

    res.status(409).json({ message: 'cannot get users' })
    res.end()
  }
}

export const updateProfile = async (req, res) => {
  const { id: _id } = req.params
  const { name, about, tags, location } = req.body

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json('user unavailable...')
      res.end()
    }

    const updatedProfile = await User.findByIdAndUpdate(
      _id,
      {
        $set: { name, about, tags, location },
      },
      { new: true },
    )

    res.status(200).json(updatedProfile)
    res.end()
  } catch (error) {
    console.log(error)
    res.status(409).json({ message: 'no user found' })
    res.end()
  }
}
