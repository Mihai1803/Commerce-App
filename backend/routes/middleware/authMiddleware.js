const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../../configDB/models/User')

const protect = asyncHandler ( async (req, res, next) => {
  let token
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

    try {

      // get token from header
      token = req.headers.authorization.split(' ')[1]

      // verify token
      const decoded = jwt.verify(token, process.env.SECRET_KEY)

      // get user from database using token
      req.user = await User.findById(decoded.userId).select('-password')
      next()

    } catch (error) {
      console.error(error.message);
      res.status(401).json({ message: 'Not Authorized' })
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not Authorized' })
  }
  
})

module.exports = {
  protect
}