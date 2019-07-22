import express from 'express'
let router = express.Router()

// import Controllers
let tourController = require('../controllers/tourController' )
let adventureController = require('../controllers/adventureController')
let medicalController = require('../controllers/medicalController')


router.get('/historical-cultural', tourController.historicalCulturalPage)
router.get('/gastronomic', tourController.gastronomicPage)
router.get('/adventure', adventureController.adventurePage)
router.get('/medical', medicalController.medicalPage)

router.get('/adventure-group/:tourGroup', adventureController.adventureGroup)
//Adventure Single Tour 
router.get('/adventure-single/:tour', adventureController.adventureSingle)
//Medical Single Tour 
router.get('/medical-single/:tour', medicalController.singlePage)
//
router.get('/historical-cultural/:tour', tourController.historicalCulturalSingle)

module.exports = router