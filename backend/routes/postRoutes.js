const multer = require('multer')
const express = require('express')
const router = express.Router()


const {createPost, getPosts, getUserPosts, getPostById, deletePost} = require('./control/postControl')
const { protect } = require('./middleware/authMiddleware')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/post')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage })


router.post('/create', protect, upload.single('photo'), createPost)
router.get('/', getPosts)
router.get('/:postId', getPostById)
router.get('/user/:userId', protect, getUserPosts)
router.delete('/delete/:postId', protect, deletePost)




module.exports = router