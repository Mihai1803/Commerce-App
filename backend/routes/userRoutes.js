const express = require('express')
const router = express.Router()

const { registerUser, loginUser, loggedUser } = require('./control/userControl')
const { protect } = require('./middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logged', protect, loggedUser)



module.exports = router