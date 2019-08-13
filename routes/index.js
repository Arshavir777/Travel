import express from 'express'
let router = express.Router()

// import Controllers
let indexController = require('../controllers/indexController' )

router.get('/', indexController.index)

router.post('/sendMessage', indexController.sendMessage)

module.exports = router