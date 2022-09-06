import axios from 'axios'

const API = axios.create({
  baseURL: 'https://stackoverflow-harish.herokuapp.com/', //http://localhost:8080/
})

API.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('Profile')) {
      const Bearer = JSON.parse(localStorage.getItem('Profile')).token
      config.headers.authorization = `Bearer ${Bearer}`
      return config
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const login = (authData) => API.post('/user/login', authData)
export const signup = (authData) => API.post('/user/signup', authData)

export const postQuestion = (questionData) =>
  API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get')
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id, value, userId) =>
  API.patch(`/questions/vote/${id}`, { value, userId })

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answers/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  })
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answers/delete/${id}`, { answerId, noOfAnswers })

export const fetchAllUsers = () => API.get('/user/getAllUsers')
export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData)

export const sendOtp = (phoneNumber) =>
  API.post('/otp/sendOtp', { phoneNumber })

export const verifyOtp = (phoneNumber, otp) =>
  API.post('/otp/verifyOtp', { phoneNumber, otp })
