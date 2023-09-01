const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add a email']
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
  interests: {
    type: String,
    enum: ['Gaming', 'Movies', 'Technology', 'Television', ' '],
    default: ' '
  },
  productsForSale: {
    type: Number,
    default: 0
  }
}, { timestamps: true })

const User = mongoose.model('User', userModel)
module.exports = User