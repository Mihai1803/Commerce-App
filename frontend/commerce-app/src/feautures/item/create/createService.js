import axios from "axios";

const API_URL = 'http://localhost:5000/api/item/'
const user = JSON.parse(localStorage.getItem('user'))

const createItem = async (itemData) => {
  try {
    const config = { 
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    }
    const res = await axios.post(API_URL + 'create', itemData, config)
    if (res.data) {
      return res.data
    }
  } catch (error) {
    console.error(error);
  }
}

const createService = {
  createItem
}
export default createService