require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000



// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


// routes
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/post', require('./routes/postRoutes'))
app.use('/api/item', require('./routes/itemRoutes'))


// connect to the data base
const connectDB = require('./configDB/config')
connectDB()


// connect to the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})