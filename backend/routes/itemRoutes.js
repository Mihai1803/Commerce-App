const multer = require('multer')
const express = require('express')
const router = express.Router()


const { 
  createItem, getUserItems, getItemById, 
  deleteItem, getPhones, getLaptops, 
  getComputers, getWatches, getPhoneById,
  getComputerById, getLaptopById, getWatchById
} = require('./control/itemControl')
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

router.post('/create', protect, upload.single('photo'), createItem)
router.get('/phone', getPhones)
router.get('/laptop', getLaptops)
router.get('/computer', getComputers)
router.get('/watch', getWatches)
router.get('/phone/:phoneId', getPhoneById)
router.get('/computer/:computerId', getComputerById)
router.get('/laptop/:laptopId', getLaptopById)
router.get('/watch/:watchId', getWatchById)
router.get('/user/:userId', protect, getUserItems)
router.get('/:itemId', getItemById)
router.delete('/delete/:itemId', protect, deleteItem)


module.exports = router