import jwt from 'jsonwebtoken'
import 'dotenv/config'

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    let decodeData = jwt.verify(token, process.env.JWTPASSSWORD)
    req.userId = decodeData?.id
    next()
  } catch (error) {
    console.log(error)
  }
}

export default auth
