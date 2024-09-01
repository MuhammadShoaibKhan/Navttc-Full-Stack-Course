const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require('mongoose')
const route = require('./route/bookRoute.js')
const Book = require('./model/bookModel.js')
mongoose.connect('mongodb+srv://Danish1:12345@cluster1.oefth.mongodb.net/').then(() => {
    console.log('MongoDB connected');
});

app.use('/book',route)
app.listen(5000)

