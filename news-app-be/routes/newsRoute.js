const express = require('express')
const router = express.Router()
const {getAllNews,addNewNews, updateNews, deleteNews} = require('../controllers/newsController')

router.route('/').get(getAllNews).post(addNewNews).patch(updateNews)
router.delete('/:newsID', deleteNews);

module.exports = router