const express = require('express')
const connectDb = require('./configs/db')
const users = require('./routes/user')
require('dotenv').config()
const app = express()

connectDb()
app.get('/',(req,res)=>{
    res.send('Home page')
})
app.use('/users',users)
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})