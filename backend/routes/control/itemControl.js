const asyncHandler = require('express-async-handler')
const User = require('../../configDB/models/User')
const Item = require('../../configDB/models/Item')



//@desc     POST create item
//@route    /api/item/create
//@access   private
const createItem = asyncHandler( async (req, res) => {
  const {
    productName,
    category,
    price,
    spec1,
    spec2,
    spec3,
    description,
  } = req.body

  // validation
  if (!productName || !category || !price || !spec1 || !spec2 || !spec3) {
    return res.status(400).json({ message: 'Please include all fields' })
  }

  // check if user exist
  const user = await User.findById(req.user._id)
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // create item
  const item = await Item.create({
    user: req.user._id,
    productName,
    category,
    price,
    spec1,
    spec2,
    spec3,
    description: description ? description : ' ',
    imageUrl: req.file ? req.file.path : ' '
  })

  if (item) {
    res.status(200).json({
      id: item._id,
      productName: item.productName,
      category: item.category,
      price: item.price,
      spec1: item.spec1,
      spec2: item.spec2,
      spec3: item.spec3,
      description: item.description,
      imageUrl: item.imageUrl,
    })
  } else {
    res.status(400).json({ message: 'Failed to create item' })
  }
})



//@desc     GET get user items
//@route    /api/item/user/:userId
//@access   private
const getUserItems = asyncHandler( async (req, res) => {

  // check is user match
  const user = await User.findById(req.user._id)
  if (user._id != req.params.userId) {
    return res.status(400).json({ message: 'Not authorized' })
  }

  // find items
  const items = await Item.find({ user: req.user._id })
  if (items) {
    res.status(200).json(items)
  } else {
    res.status(400).json({ message: 'No items found' })
  }

})

//@desc     GET get item by id
//@route    /api/item/:itemId
//@access   public
const getItemById = asyncHandler( async(req, res) => {
  const item = await Item.findOne({ _id: req.params.itemId })
  if (!item) {
    res.status(400).json({ message: 'Item not found' })
  } else {
    res.status(200).json({
      productName: item.productName,
      category: item.category,
      price: item.price,
      spec1: item.spec1,
      spec2: item.spec2,
      spec3: item.spec3,
      description: item.description,
      imageUrl: item.imageUrl
    })
  }
})


//@desc     DELETE delete item by id
//@route    /api/item/delete/:itemId
//@access   private
const deleteItem = asyncHandler( async (req, res) => {

  try {
    const item = await Item.findOne({ _id: req.params.itemId })
    if (item.user.equals(req.user._id)) {
      await Item.deleteOne({_id: req.params.itemId })
      res.status(200).json({ message: 'Item deleted'})
    } else {
      res.status(400).json({ message: 'Not Authorized' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Could not delete item' })
  }
})


module.exports = {
  createItem,
  getUserItems,
  getItemById,
  deleteItem
}