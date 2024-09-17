const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require('mongoose')
app.use(express.json());
// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const route = require('./route/bookRoute.js')
const Book = require('./model/bookModel.js')
app.use(cors({origin:'*', methods:["Get","POST","PUT","DELETE"] }))
mongoose.connect('mongodb+srv://Danish1:12345@cluster1.oefth.mongodb.net/').then(() => {
    console.log('MongoDB connected');
});

app.use('/book',route)
app.listen(5000)

