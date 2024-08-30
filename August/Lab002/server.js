const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shoaib19912:235iqoP@icma.p7xhe.mongodb.net/').then(()=>{
    console.log('MongoDB Connected')
})


app.get('/',(req,res) => {
    res.send('Working..')
}) 
app.listen(5000)