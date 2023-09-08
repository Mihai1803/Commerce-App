import axios from 'axios'

const API_URL = 'http://localhost:5000/api/item/'

const getWatches = async () => {

  const config = {
    params: {
      limit: 4
    }
  }

  const res = await axios.get(API_URL + 'watch', config)

  if (res.data) {
    localStorage.setItem('watches', JSON.stringify(res.data))
  }
  return res.data
}

const getWatchById = async (watchId) => {
  const res = await axios.get(API_URL + `watch/${watchId}`)

  if (res.data) {
    localStorage.setItem('singleWatch', JSON.stringify(res.data))
  }

  return res.data
}

const watchService = {
  getWatches,
  getWatchById
}
export default watchService