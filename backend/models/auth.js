import mongoose from 'mongoose'

const requiredString = { type: String, required: true }

const userSchema = mongoose.Schema({
  name: requiredString,
  email: requiredString,
  password: requiredString,
  about: String,
  location: String,
  phoneNumber: String,
  tags: { type: [String], required: true },
  joinedOn: { type: Date, default: Date.now() },
})

export const User = mongoose.model('Users', userSchema)
