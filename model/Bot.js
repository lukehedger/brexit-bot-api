const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bot = new Schema({
  test: { type: Boolean, required: true }
})

module.exports = Bot
