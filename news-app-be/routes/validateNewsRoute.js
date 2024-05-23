const express = require('express')
const router = express.Router()
const {getNewsID} = require('../controllers/validateNewsController')

router.route('/').post(getNewsID)

module.exports = router