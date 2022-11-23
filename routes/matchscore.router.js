const express = require('express')
const router = express.Router()
const matchscore = require('../controllers/matchscore.controller')

router.route('/')
.post(
    matchscore
)

module.exports = router