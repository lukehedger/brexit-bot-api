"use strict"

const mongoose = require('mongoose')
const uniqid = require('uniqid')
const schema = require('../model/Human')

const Human = mongoose.model('Humans', schema)

module.exports = {

  create (req, res, next) {

    // create human

    let id = uniqid()
    let brexit = req.body.brexit || false

    Human.create({
      id: id,
      brexit: brexit
    }, (err, human) => {

      if (err) return next(err)

      res.sendStatus(200)

      return next()

    })

  },

  read (req, res, next) {

    // read human

    let id = req.params.id

    Human.findOne({ id: id}, 'brexit', (err, human) => {

      if (err) return next(err)

      res.json({
        human: human
      })

      return next()

    })

  },

  update (req, res, next) {

    // update human

    let id = req.params.id
    let brexit = req.body.brexit

    Human.findOneAndUpdate({ id: id }, { brexit: brexit }, (err, human) => {

      if (err) return next(err)

      res.json({
        human: human
      })

      return next()

    })

  },

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

  spurious (req, res, next) {

    // TODO - use bot/service

    res.json({
      spurious: true
    })

    return next()

  }

}
