const express = require('express')
const router = express.Router()
const download = require('../controllers/data.controller')

router.route('/')
.get(
    download
)

module.exports = router