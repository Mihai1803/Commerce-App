const mongoose = require('mongoose')

const itemModel = new mongoose.Schema({
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
    enum: ['Phones', 'Watches', 'Computers', 'Laptops']
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
  imageUrl: {
    type: String
  }
}, { timestamps: true })

const Item = mongoose.model('Item', itemModel)
module.exports = Item