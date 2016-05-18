"use strict"

const Bot = require('./service')

module.exports = {

  greeting (req, res, next) {

    let greeting = Bot.greeting()

    res.json({
      greeting: greeting
    })

    return next()

  },

  poll (req, res, next) {

    let poll = Bot.poll('main')

    res.json({
      poll: poll
    })

    return next()

  },

  spurious (req, res, next) {

    let spurious = Bot.spurious()

    res.json({
      spurious: spurious
    })

    return next()

  },

  topic (req, res, next) {

    let name = req.params.name

    let topic = Bot.topic(name)

    res.json({
      topic: topic
    })

    return next()

  }

}
