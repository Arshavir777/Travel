import express from 'express'
let router = express.Router()

// import Controllers
let tourController = require('../controllers/tourController' )
let adventureController = require('../controllers/adventureController')

router.get('/historical-cultural', tourController.historicalCulturalPage)
router.get('/gastronomic', tourController.gastronomicPage)
router.get('/adventure', adventureController.adventurePage)
router.get('/adventure-group/:tourGroup', adventureController.adventureGroup)
router.get('/adventure-single/:tour', adventureController.adventureSingle)
//
router.get('/historical-cultural/:tour', tourController.historicalCulturalSingle)

module.exports = router