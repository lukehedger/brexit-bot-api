"use strict"

const Bot = require('../shared/service')

module.exports = {

  greeting (req, res, next) {

    let greeting = Bot.greeting()

    console.log(greeting);

    res.json({
      greeting: greeting
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

  spurious (req, res, next) {

    // TODO - use bot/service

    res.json({
      spurious: true
    })

    return next()

  },

  topic (req, res, next) {

    // TODO - use bot/service

    res.json({
      topic: true
    })

    return next()

  }

}
