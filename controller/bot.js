const mongoose = require('mongoose')
const schema = require('../model/Bot')

const Bot = mongoose.model('Bot', schema)

module.exports = {

  // TODO - write mongoose queries - http://mongoosejs.com/docs/queries.html

  greeting (req, res, next) {

    res.json({
      greeting: 'hello'
    })

    return next()

  },

  poll (req, res, next) {

    res.json({
      poll: true
    })

    return next()

  },

  topic (req, res, next) {

    res.json({
      topic: true
    })

    return next()

  },

  quiz (req, res, next) {

    res.json({
      quiz: true
    })

    return next()

  }

}
