const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Spurious = new Schema({
  message: String
})

module.exports = Spurious
