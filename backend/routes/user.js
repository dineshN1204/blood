const express = require('express')
const bodyParser = require('body-parser')
const { signup } = require('../controllers/auth-controllers')

const router = express.Router()
router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.send('Users Page')
})
router.post('/signup',signup)


module.exports = router