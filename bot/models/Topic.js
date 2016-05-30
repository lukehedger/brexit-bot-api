const mongoose = require('mongoose')
const random = require('mongoose-simple-random')
const Schema = mongoose.Schema

const Topic = new Schema({
  name: String,
  text: String,
  next: String,
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

Topic.plugin(random)

module.exports = Topic
