const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const User = require('../../configDB/models/User')
const { generateToken } = require('../middleware/generateToken')

//@desc     POST register user
//@route    /api/user/register
//@access   public
const registerUser = asyncHandler( async (req, res) => {
  const { name, email, password } = req.body

  // validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please include all fields' })
  }

  // check if user exist
  const userExist = await User.findOne({ email })
  if (userExist) {
    return res.status(400).json({ message: 'User already exist' })
  }

  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })
  if (user) {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400).json({ message: 'Registration Failed' })
  }
})


//@desc     POST login user
//@route    /api/user/login
//@access   public
const loginUser = asyncHandler( async (req, res) => {
  const { email, password } = req.body

  // validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Please include all fields' })
  }

  // check if user exist
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).json({ message: 'User does not exist' })
  }

  if (await bcrypt.compare(password, user.password)) {
    res.status(200).json({
      token: generateToken(user._id)
    })
  } else {
    res.status(401).json( {message: 'Wrong email or password' })
  }
})


//@desc     GET logged user info
//@route    /api/user/logged
//@access   private
const loggedUser = asyncHandler( async (req, res) => {
  const user = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    productsForSale: req.user.productsForSale,
    created: req.user.createdAt,
    updated: req.user.updatedAt,
  }
  res.status(200).json(user)
})


module.exports = {
  registerUser,
  loginUser,
  loggedUser
}