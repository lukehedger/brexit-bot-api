const mongoose = require('mongoose')

const MONGO_APP = process.env.OPENSHIFT_APP_NAME || 'brexitbot'
const MONGO_USER = process.env.OPENSHIFT_MONGODB_DB_USERNAME || 'admin'
const MONGO_PWD = process.env.OPENSHIFT_MONGODB_DB_PASSWORD || 'admin'
const MONGO_HOST = process.env.OPENSHIFT_MONGODB_DB_HOST || '127.0.0.1'
const MONGO_PORT = process.env.OPENSHIFT_MONGODB_DB_PORT || 27017

mongoose.connect(`mongodb://${MONGO_HOST}/${MONGO_APP}`)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('db connected')
})
