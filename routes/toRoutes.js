const express = require('express')
const { getAll } = require('../controllers/todo')


const router = express.Router()


router.get('/',getAll)

module.exports = router