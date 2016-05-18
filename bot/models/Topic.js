const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Topic = new Schema({
  name: String,
  message: String
})

module.exports = Topic
