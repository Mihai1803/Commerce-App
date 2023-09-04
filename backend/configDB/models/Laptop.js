const mongoose = require('mongoose')

const laptopModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  productName: {
    type: String,
    required: [true, 'Please add a name']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Laptop']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  spec1: {
    type: String,
    required: true
  },
  spec2: {
    type: String,
    required: true
  },
  spec3: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String
  }
}, { timestamps: true })

const Laptop = mongoose.model('Laptop', laptopModel)
module.exports = Laptop