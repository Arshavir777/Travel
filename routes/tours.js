import express from 'express'
let router = express.Router()

// import Controllers
let tourController = require('../controllers/tourController' )

router.get('/historical-cultural', tourController.historicalCulturalPage)
router.get('/gastronomic', tourController.gastronomicPage)
//
router.get('/historical-cultural/:tour', tourController.historicalCulturalSingle)

module.exports = router