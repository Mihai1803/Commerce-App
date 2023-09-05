import axios from 'axios'

const API_URL = 'http://localhost:5000/api/item/'

const getLaptops = async () => {

  const config = {
    params: {
      limit: 4
    }
  }

  const res = await axios.get(API_URL + 'laptop', config)

  if (res.data) {
    localStorage.setItem('laptops', JSON.stringify(res.data))
  }
  return res.data
}

const laptopService = {
  getLaptops
}
export default laptopService