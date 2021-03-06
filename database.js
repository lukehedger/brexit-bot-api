const mongoose = require('mongoose')

const MONGO_HOST = process.env.MONGO_URL || 'mongodb://127.0.0.1/brexitbot'

mongoose.connect(MONGO_HOST)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('db connected')
})
