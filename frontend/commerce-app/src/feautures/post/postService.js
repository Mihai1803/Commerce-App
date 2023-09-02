import axios from "axios"

const API_URL = 'http://localhost:5000/api/post/'

const user = JSON.parse(localStorage.getItem('user'))

const createPost = async (postData) => {

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  }
  
  const res = await axios.post(API_URL + 'create', postData, config)

  if (res.data) {
    localStorage.setItem('post', JSON.stringify(res.data))
  }
  return res.data
}


const getPosts = async () => {

  const config = {
    params: {
      limit: 4
    }
  }

  const res = await axios.get(API_URL, config)

  if (res.data) {
    localStorage.setItem('landingPosts', JSON.stringify(res.data))
  }
  return res.data
}

const getPostById = async (postId) => {
  const res = await axios.get(API_URL + postId)

  if (res.data) {
    localStorage.setItem('singlePost', JSON.stringify(res.data))
  }

  return res.data
}


const postService = {
  createPost,
  getPosts,
  getPostById,
}


export default postService