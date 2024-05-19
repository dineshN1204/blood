const express = require('express')
const connectDb = require('./configs/db')
require('dotenv').config()
const app = express()

connectDb()
app.get('/',(req,res)=>{
    res.send('Home page')
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})