import express from 'express'
let router = express.Router()

// import Controllers
let tourController = require('../controllers/indexController' )

router.get('/', tourController.index)

module.exports = router