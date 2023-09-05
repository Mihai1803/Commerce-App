import axios from 'axios'

const API_URL = 'http://localhost:5000/api/item/'

const getComputers = async () => {

  const config = {
    params: {
      limit: 4
    }
  }

  const res = await axios.get(API_URL + 'computer', config)

  if (res.data) {
    localStorage.setItem('computers', JSON.stringify(res.data))
  }
  return res.data
}

const computerService = {
  getComputers
}
export default computerService