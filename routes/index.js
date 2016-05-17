const express = require('express')
const router = express.Router()

const BotController = require('../controller/bot');
const HumanController = require('../controller/human');

router.get('/', (req, res, next) => {

  res.send('🤖')

  next()

})

// BOT
router.get( '/bot/greeting/:id?', BotController.greeting, (req, res, next) => next() )
router.get( '/bot/poll', BotController.poll, (req, res, next) => next() )
router.get( '/bot/topic/:topic/:id?', BotController.topic, (req, res, next) => next() )
router.get( '/bot/spurious/:id?', BotController.spurious, (req, res, next) => next() )

// HUMAN
router.post( '/human/create/', HumanController.create, (req, res, next) => next() )
router.get( '/human/read/:id', HumanController.read, (req, res, next) => next() )
router.put( '/human/update/:id', HumanController.update, (req, res, next) => next() )
router.post( '/human/greeting/:response', HumanController.greeting, (req, res, next) => next() )
router.post( '/human/poll/:response', HumanController.poll, (req, res, next) => next() )
router.post( '/human/spurious/:response', HumanController.spurious, (req, res, next) => next() )

module.exports = router
