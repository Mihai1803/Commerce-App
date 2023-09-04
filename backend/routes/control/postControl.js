const asyncHandler = require('express-async-handler')
const User = require('../../configDB/models/User')
const Post = require('../../configDB/models/Post')

//@desc     GET gets all posts
//@route    /api/post/
//@access   public
const getPosts = asyncHandler( async(req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 4
    const posts = await Post.find().limit(limit)
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
})

//@desc     POST create post
//@route    /api/post/create
//@access   private
const createPost = asyncHandler( async (req, res) => {
  const { title, description } = req.body

  // validation
  if (!title || !description) {
    return res.status(400).json({ message: 'Please include all fields' })
  }

  // check if user exist
  const user = await User.findById(req.user._id)
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }
  
  // create post
  const post = await Post.create({
    user: req.user._id,
    title,
    description,
    imageUrl: req.file ? req.file.path : ' '
  })

  if (post) {
    res.status(200).json({
      id: post._id,
      user: post.user,
      title: post.title,
      description: post.description,
      imageUrl: post.imageUrl
    })
  } else {
    res.status(400).json({ message: 'Failed to create a post' })
  }

})


//@desc     GET get user posts
//@route    /api/post/user/userId
//@access   private
const getUserPosts = asyncHandler( async (req, res) => {

  // check if user exist
  const user = await User.findById(req.user._id)
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  if (user._id != req.params.userId) {
    return res.status(400).json({ message: 'Not authorized' })
  }


  // get posts
  const posts = await Post.find({ user: req.user._id })
  if (!posts) {
    return res.status(400).json({ message: 'No posts found' })
  } else {
    res.status(200).json(posts)
  }
})


//@desc     GET get post by id
//@route    /api/post/:postId
//@access   public
const getPostById = asyncHandler( async (req, res) => {

  const post = await Post.findOne({ _id: req.params.postId })
  const user = await User.findOne({ _id: post.user })

  if (!post) {
    res.status(400).json({ message: 'Post not found' })
  } else {
    res.status(200).json({
      author: user.name,
      title: post.title,
      description: post.description,
      imageUrl: post.imageUrl,
      created: post.createdAt
    })
  }
})

//@desc     DELETE delete post
//@route    /api/post/delete/:postId
//@access   private
const deletePost = asyncHandler( async (req, res) => {

  try {
    const post = await Post.findOne({ _id: req.params.postId })
    if (post.user.equals(req.user._id)) {
      await Post.deleteOne({_id: req.params.postId })
      res.status(200).json({ message: 'Post deleted'})
    } else {
      res.status(400).json({ message: 'Not Authorized' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Could not delete post'})
  }
})

const test = asyncHandler( async (req, res) => {
  res.send(ok)

})


module.exports = {
  getPosts,
  createPost,
  getUserPosts,
  getPostById,
  deletePost,
  test
}