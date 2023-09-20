import axios from 'axios'

const API_URL = 'http://localhost:5000/api/user/'
const API_URL_ITEM = 'http://localhost:5000/api/item/user/' 
const API_URL_ITEM_DELETE = 'http://localhost:5000/api/item/delete/' 

const user = JSON.parse(localStorage.getItem('user'))

const register = async (userData) => {

  const res = await axios.post(API_URL + 'register', userData)

  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data))
  }
  return res.data
}


const login = async (userData) => {

  const res = await axios.post(API_URL + 'login', userData)

  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data))
  }
  return res.data
}

const getUserItems = async(userId) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  }

  const res = await axios.get(API_URL_ITEM + userId, config)

  if (res.data) {
    localStorage.setItem('userItems', JSON.stringify(res.data))
  }
  return res.data
}

const deleteItem = async(itemId) => {
  
  const config = {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  }

  const res = await axios.delete(API_URL_ITEM_DELETE + itemId, config)

  return res.data
}

const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  login,
  getUserItems,
  deleteItem,
  logout
}

export default authService