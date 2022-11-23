const express = require('express')
const {
    loginPage,
    signup,
    login
} = require('../controllers/account.controller')

const {
    getData,
    deleteData
} = require('../controllers/data.controller')

const {
    getOption,
    createOption,
    deleteOption
} = require('../controllers/matchOption.controller')

const router = express.Router()

router.route('/signup')
.post(
    signup
)

router.route('/login')
.get(
    loginPage
)
.post(
    login
)

router.route('/admin/data')
.get(
    getData
)
.delete(
    deleteData
)

router.route('/admin/matchoption')
.get(
    getOption
)
.post(
    createOption
)
.delete(
    deleteOption
)


module.exports = router