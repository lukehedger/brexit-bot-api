"use strict"

const co = require('co')
const uniqid = require('uniqid')

const Human = require('./service')
const Sentiment = require('../shared/service/sentiment')

module.exports = {

  create (req, res, next) {

    // create human

    let id = uniqid()
    let brexit = req.body.brexit || false

    co(function* () {

      return yield Human.create(id, brexit)

    }).then( human => {

      res.json({ human })

      res.sendStatus(200)

      return next()

    })

  },

  read (req, res, next) {

    // read human

    let id = req.params.id

    co(function* () {

      return yield Human.read(id)

    }).then( human => {

      res.json({ human })

      return next()

    })

  },

  update (req, res, next) {

    // update human

    let id = req.params.id
    let brexit = req.body.brexit

    co(function* () {

      // update human AND THEN get current poll results
      return yield {
        human: Human.update(id, brexit),
        poll: Human.poll()
      }

    }).then( ({ human, poll }) => {

      res.json({ human, poll })

      return next()

    })

  },

  sentiment (req, res, next) {

    let text = req.params.text

    let score = Sentiment.analysis(text)

    co(function* () {

      return yield Sentiment.message(score)

    }).then( sentiment => {

      res.json({ sentiment })

      return next()

    })

  }

}
