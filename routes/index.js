const express = require('express')
const router = express.Router()

const BotController = require('../controller/bot');
const HumanController = require('../controller/human');

router.get('/', (req, res, next) => {

  res.send('🤖')

  next()

})

// BOT
router.get( '/bot/greeting', BotController.greeting, (req, res, next) => next() )
router.get( '/bot/poll', BotController.poll, (req, res, next) => next() )
router.get( '/bot/topic/:topic/:id?', BotController.topic, (req, res, next) => next() )
router.get( '/bot/quiz/:id?', BotController.quiz, (req, res, next) => next() )

// HUMAN
router.post( '/human/greeting', HumanController.greeting, (req, res, next) => next() )
router.post( '/human/poll', HumanController.poll, (req, res, next) => next() )
router.post( '/human/quiz/:id?', HumanController.quiz, (req, res, next) => next() )

module.exports = router
