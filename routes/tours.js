import express from 'express'
let router = express.Router()

// import Controllers
let tourController = require('../controllers/tourController' )

router.get('/historical-cultural', tourController.historicalCulturalPage)

module.exports = router