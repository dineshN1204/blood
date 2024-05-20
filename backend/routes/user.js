const express = require('express')
const bodyParser = require('body-parser')
const UserModel = require('../models/user-model');
const { signup,activate,signin } = require('../controllers/auth-controllers')

const router = express.Router()
router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.send('Users Page')
})
router.get('/get',(req,res)=>{
    console.log(req.body);
    UserModel.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})
router.post('/signup',signup)
router.get('/activate/:activationCode',activate)
router.post('/signin',signin)


module.exports = router