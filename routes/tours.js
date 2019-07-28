import express from 'express'
let router = express.Router()

// import Controllers
let historicalCulturalController = require('../controllers/historicalCulturalController' )
let adventureController = require('../controllers/adventureController')
let medicalController = require('../controllers/medicalController')
let gastronomicController = require('../controllers/gastronomicController')



router.get('/historical-cultural', historicalCulturalController.historicalCulturalPage)
router.get('/gastronomic', gastronomicController.gastronomicPage)
router.get('/adventure', adventureController.adventurePage)
router.get('/medical', medicalController.medicalPage)

//Adventure Group Tours Page 
router.get('/adventure-group/:tourGroup', adventureController.adventureGroup)
//Adventure Single Tour Page 
router.get('/adventure-single/:tour', adventureController.adventureSingle)
//Medical Single Tour Page 
router.get('/medical-single/:tour', medicalController.singlePage)
//Gastronomic Single Tour Page
router.get('/gastronomic/:tour', gastronomicController.singlePage)
//Historical-Cultural Single Tour Page
router.get('/historical-cultural/:tour', historicalCulturalController.historicalCulturalSingle)

module.exports = router