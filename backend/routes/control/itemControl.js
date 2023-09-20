const asyncHandler = require('express-async-handler')
const User = require('../../configDB/models/User')
const Item = require('../../configDB/models/Item')
const Phone = require('../../configDB/models/Phone')
const Laptop = require('../../configDB/models/Laptop')
const Watch = require('../../configDB/models/Watch')
const Computer = require('../../configDB/models/Computer')



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
  const item = {
    user: req.user._id,
    productName,
    category,
    price,
    spec1,
    spec2,
    spec3,
    description: description ? description : ' ',
    imageUrl: req.file ? req.file.path : ' '
  }
  if (category === 'Phone') {
    await Phone.create(item)
  }
  if (category === 'Laptop') {
    await Laptop.create(item)
  }
  if (category === 'Computer') {
    await Computer.create(item)
  }
  if (category === 'Watch') {
    await Watch.create(item)
  }

  
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
  const phones = await Phone.find({ user: req.user._id })
  const computers = await Computer.find({ user: req.user._id })
  const laptops = await Laptop.find({ user: req.user._id })
  const watches = await Watch.find({ user: req.user._id })
  if (phones || computers || laptops || watches) {
    res.status(200).json({
      phones: phones,
      computers: computers,
      laptops: laptops,
      watches: watches
    })
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
    const phone = await Phone.findOne({ _id: req.params.itemId })
    const computer = await Computer.findOne({ _id: req.params.itemId })
    const laptop = await Laptop.findOne({ _id: req.params.itemId })
    const watch = await Watch.findOne({ _id: req.params.itemId })
    // if (phone.user.equals(req.user._id)) {
    //   await Item.deleteOne({_id: req.params.itemId })
    //   res.status(200).json({ message: 'Item deleted'})
    // } else {
    //   res.status(400).json({ message: 'Not Authorized' });
    // }
    if (phone && phone.user.equals(req.user._id)) {
      await Phone.deleteOne({ _id: req.params.itemId })
      res.status(200).json({ message: 'Item deleted'})
    } else if (computer && computer.user.equals(req.user._id) ) {
      await Computer.deleteOne({ _id: req.params.itemId })
      res.status(200).json({ message: 'Item deleted'})
    } else if (laptop && laptop.user.equals(req.user._id)) {
      await Laptop.deleteOne({ _id: req.params.itemId })
      res.status(200).json({ message: 'Item deleted'})
    } else if (watch && watch.user.equals(req.user._id)) {
      await Watch.deleteOne({ _id: req.params.itemId })
      res.status(200).json({ message: 'Item deleted'})
    } else {
      res.status(200).json({message: 'Could not delete item'})
    }
  } catch (error) {
    res.status(400).json({ message: 'Could not delete item' })
  }
})

//@desc     GET get phones
//@route    /api/item/phone
//@access   public
const getPhones = asyncHandler( async(req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 4
    const phones = await Phone.find().limit(limit).select('-user')
    res.status(200).json(phones)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error'})
  }
})

//@desc     GET get laptops
//@route    /api/item/laptop
//@access   public
const getLaptops = asyncHandler( async(req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 4
    const laptops = await Laptop.find().limit(limit).select('-user')
    res.status(200).json(laptops)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error'})
  }
})

//@desc     GET get computers
//@route    /api/item/computer
//@access   public
const getComputers = asyncHandler( async(req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 4
    const computers = await Computer.find().limit(limit).select('-user')
    res.status(200).json(computers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error'})
  }
})

//@desc     GET get watches
//@route    /api/item/watch
//@access   public
const getWatches = asyncHandler( async(req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 4
    const watches = await Watch.find().limit(limit).select('-user')
    res.status(200).json(watches)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error'})
  }
})

//@desc     GET get phone by id
//@route    /api/item/phone/phoneId
//@access   public
const getPhoneById = asyncHandler ( async(req, res) => {
  const phone = await Phone.findOne({ _id: req.params.phoneId })
  if (!phone) {
    res.status(400).json({ message: 'Item not found' })
  } else {
    res.status(200).json({
      productName: phone.productName,
      category: phone.category,
      price: phone.price,
      spec1: phone.spec1,
      spec2: phone.spec2,
      spec3: phone.spec3,
      description: phone.description,
      imageUrl: phone.imageUrl
    })
  }
})

//@desc     GET get computer by id
//@route    /api/item/computer/computerId
//@access   public
const getComputerById = asyncHandler( async(req, res) => {
  const computer = await Computer.findOne({ _id: req.params.computerId })
  if (!computer) {
    res.status(400).json({ message: 'Item not found' })
  } else {
    res.status(200).json({
      productName: computer.productName,
      category: computer.category,
      price: computer.price,
      spec1: computer.spec1,
      spec2: computer.spec2,
      spec3: computer.spec3,
      description: computer.description,
      imageUrl: computer.imageUrl
    })
  }
})

//@desc     GET get laptop by id
//@route    /api/item/laptop/laptopId
//@access   public
const getLaptopById = asyncHandler( async(req, res) => {
  const laptop = await Laptop.findOne({ _id: req.params.laptopId })
  if (!laptop) {
    res.status(400).json({ message: 'Item not found' })
  } else {
    res.status(200).json({
      productName: laptop.productName,
      category: laptop.category,
      price: laptop.price,
      spec1: laptop.spec1,
      spec2: laptop.spec2,
      spec3: laptop.spec3,
      description: laptop.description,
      imageUrl: laptop.imageUrl
    })
  }
})

//@desc     GET get watch by id
//@route    /api/item/watch/watchId
//@access   public
const getWatchById = asyncHandler( async(req, res) => {
  const watch = await Watch.findOne({ _id: req.params.watchId })
  if (!watch) {
    res.status(400).json({ message: 'Item not found' })
  } else {
    res.status(200).json({
      productName: watch.productName,
      category: watch.category,
      price: watch.price,
      spec1: watch.spec1,
      spec2: watch.spec2,
      spec3: watch.spec3,
      description: watch.description,
      imageUrl: watch.imageUrl
    })
  }
})



module.exports = {
  createItem,
  getUserItems,
  getItemById,
  deleteItem,
  getPhones,
  getLaptops,
  getComputers,
  getWatches,
  getPhoneById,
  getComputerById,
  getLaptopById,
  getWatchById
}