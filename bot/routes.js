const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get( '/greeting/:visited?', controller.greeting, (req, res, next) => next() )
router.get( '/poll', controller.poll, (req, res, next) => next() )
router.get( '/choice', controller.choice, (req, res, next) => next() )
router.get( '/topic/:name', controller.topic, (req, res, next) => next() )
router.get( '/spurious', controller.spurious, (req, res, next) => next() )
router.get( '/farewell', controller.farewell, (req, res, next) => next() )

module.exports = router
