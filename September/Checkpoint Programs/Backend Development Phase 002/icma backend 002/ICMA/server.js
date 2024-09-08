const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoute.js')
const productRoutes = require('./routes/productRoute.js')
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('your uri').then(()=>{
    console.log('Mongodb connected')
})


app.use('/users', userRoutes)
app.use('/product', productRoutes)

app.listen(5000)