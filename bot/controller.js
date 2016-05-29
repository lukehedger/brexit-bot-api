"use strict"

const co = require('co')
const Bot = require('./service')

module.exports = {

  greeting (req, res, next) {

    let visited = req.params.visited == 'true'

    co(function* () {

      return yield Bot.greeting(visited)

    }).then( greeting => {

      res.json({ greeting })

      return next()

    })

  },

  choice (req, res, next) {

    co(function* () {

      return yield Bot.choice()

    }).then( topics => {

      res.json({ topics })

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

  },

  farewell (req, res, next) {

    co(function* () {

      return yield Bot.farewell()

    }).then( farewell => {

      res.json({ farewell })

      return next()

    })

  }

}
