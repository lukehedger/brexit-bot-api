const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Poll = new Schema({
  name: String,
  message: String,
  options: Array,
  type: String
})

module.exports = Poll
