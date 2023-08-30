const jwt = require('jsonwebtoken')

const generateToken = (userId) => {
  const payload = {
    userId
  }
  const options = {
    expiresIn: '30d'
  }
  const token = jwt.sign(payload, process.env.SECRET_KEY, options)
  return token
}

module.exports = {
  generateToken
}