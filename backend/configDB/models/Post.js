const mongoose = require('mongoose')

const postModel= new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Please add a tile']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  imageUrl: {
    type: String
  }
}, { timestamps: true })

const Post = mongoose.model('Post', postModel)
module.exports = Post