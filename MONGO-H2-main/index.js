const express = require('express')
const Router = require('./route/route')

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("hello")
})

app.listen(3000, ()=>{
    console.log("server running")
})