
const express = require('express')
const { processRegister } = require('../controllers/userController')

const router = express.Router()
router.post('/', processRegister)



const nodemailer = require("nodemailer")



module.exports = router