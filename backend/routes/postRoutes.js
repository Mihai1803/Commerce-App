const express = require('express')
const router = express.Router()

const { createPost, getPosts, getUserPosts, getPostById, deletePost } = require('./control/postControl')
const { protect } = require('./middleware/authMiddleware')

router.post('/create', protect, createPost)
router.get('/', getPosts)
router.get('/:postId', getPostById)
router.get('/user-posts', protect, getUserPosts)
router.delete('/delete/:postId', protect, deletePost)


module.exports = router