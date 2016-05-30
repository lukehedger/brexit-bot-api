const mongoose = require('mongoose')
const random = require('mongoose-simple-random')
const Schema = mongoose.Schema

const Sentiment = new Schema({
  message: {
    text: String,
    options: Array,
    image: String,
    video: String,
    audio: String,
    chart: Object,
    source: String
  },
  maxScore: Number,
  minScore: Number
})

Sentiment.plugin(random)

module.exports = Sentiment
