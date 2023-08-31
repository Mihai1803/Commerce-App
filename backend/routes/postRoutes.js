const express = require('express')
const router = express.Router()

const multer = require('multer')
const upload = multer({ dest: 'uploads/post' })


const {createPost, getPosts, getUserPosts, getPostById, deletePost} = require('./control/postControl')
const { protect } = require('./middleware/authMiddleware')


router.post('/create', protect, upload.single('photo'), createPost)
router.get('/', getPosts)
router.get('/:postId', getPostById)
router.get('/user/:userId', protect, getUserPosts)
router.delete('/delete/:postId', protect, deletePost)




module.exports = router