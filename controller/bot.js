const mongoose = require('mongoose')
// const schema = require('../model/Bot')
//
// const Bot = mongoose.model('Bot', schema)

// TODO - create models for bot collections

module.exports = {

  greeting (req, res, next) {

    // TODO - use bot/service

    res.json({
      greeting: 'hello'
    })

    return next()

  },

  poll (req, res, next) {

    // TODO - use bot/service

    res.json({
      poll: true
    })

    return next()

  },

  topic (req, res, next) {

    // TODO - use bot/service

    res.json({
      topic: true
    })

    return next()

  },

  spurious (req, res, next) {

    // TODO - use bot/service

    res.json({
      spurious: true
    })

    return next()

  }

}
