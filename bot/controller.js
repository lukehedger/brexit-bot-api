"use strict"

const co = require('co')
const Bot = require('./service')

module.exports = {

  greeting (req, res, next) {

    co(function* () {

      return yield Bot.greeting()

    }).then( greeting => {

      res.json({ greeting })

      return next()

    })

  },

  poll (req, res, next) {

    co(function* () {

      return yield Bot.poll('main')

    }).then( poll => {

      res.json({ poll })

      return next()

    })

  },

  spurious (req, res, next) {

    co(function* () {

      return yield Bot.spurious()

    }).then( spurious => {

      res.json({ spurious })

      return next()

    })

  },

  topic (req, res, next) {

    let name = req.params.name

    co(function* () {

      return yield Bot.topic(name)

    }).then( topic => {

      res.json({ topic })

      return next()

    })

  }

}
