const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const siteRouter = require('./routers/routes.js')
const url = "mongodb+srv://shoaib:12345@cluster0.dwn91.mongodb.net/"
const Product = require('./Models/siteModel.js')
app.use(bodyParser.urlencoded({extended:true}))



mongoose.connect(url)
const con = mongoose.connection

con.on('open',function(){
    console.log("Connected....")
})


app.use('/sitedb',siteRouter)

app.listen(3000, function(){
    console.log("Server Started...")
})