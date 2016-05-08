const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Human = new Schema({
  test: { type: Boolean, required: true }
})

module.exports = Human
