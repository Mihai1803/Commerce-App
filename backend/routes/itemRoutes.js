const express = require('express')
const router = express.Router()

const multer = require('multer')
const upload = multer({ dest: 'uploads/item' })


const { createItem, getUserItems, getItemById, deleteItem } = require('./control/itemControl')
const { protect } = require('./middleware/authMiddleware')

router.post('/create', protect, upload.single('photo'), createItem)
router.get('/user/:userId', protect, getUserItems)
router.get('/:itemId', getItemById)
router.delete('/delete/:itemId', protect, deleteItem)


module.exports = router