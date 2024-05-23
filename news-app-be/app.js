require('dotenv').config()
const express = require('express')
const app = express()
const newsRouter = require('./routes/newsRoute')
const validateNewsRouter = require('./routes/validateNewsRoute')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 3500

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected successfully to the database..'))

app.use('/api/v1/news', newsRouter)
app.use('/api/v1/news/validate', validateNewsRouter)

app.listen(PORT, console.log(`Server started running at http://localhost:${PORT}/api/v1/news`))