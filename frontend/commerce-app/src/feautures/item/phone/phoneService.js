import axios from 'axios'

const API_URL = 'http://localhost:5000/api/item/'

const getPhones = async () => {

  const config = {
    params: {
      limit: 4
    }
  }

  const res = await axios.get(API_URL + 'phone', config)

  if (res.data) {
    localStorage.setItem('phones', JSON.stringify(res.data))
  }
  return res.data
}

const getPhoneById = async (phoneId) => {
  const res = await axios.get(API_URL + `phone/${phoneId}`)

  if (res.data) {
    localStorage.setItem('singlePhone', JSON.stringify(res.data))
  }
  return res.data
}

const phoneService = {
  getPhones,
  getPhoneById
}
export default phoneService