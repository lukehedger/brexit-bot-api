const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Poll = new Schema({
  name: String,
  message: {
    text: String,
    options: Array,
    image: String,
    video: String,
    audio: String,
    chart: Object,
    source: String
  }
})

module.exports = Poll
