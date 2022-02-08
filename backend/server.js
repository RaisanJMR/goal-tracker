const dotenv = require('dotenv').config()
const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorHandler')

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(PORT, () =>
  console.log(
    `Server Running on Port: http://localhost:${PORT} at ${new Date().toLocaleString(
      'en-US'
    )}`.bgCyan.bold.underline
  )
)
