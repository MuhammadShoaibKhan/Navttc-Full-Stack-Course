//importing express
const express = require('express')
//initializing express
const app = express()
//import mongoose
const mongoose = require('mongoose')
//import body parser
const bodyParser = require('body-parser')
//import routes
const userRoutes = require('./routes/userRoute.js')
const friendRoutes = require('./routes/friendRoute.js')
const productRoutes = require('./routes/productRoute.js')
//import cors
const cors = require('cors')
//using body parser to get urlencode and json data from frontend
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//using cors to allow every origin to use apis
app.use(cors({ origin: 'http://localhost:3000',credentials: true, methods:["GET", "POST", "PUT", "PATCH", "DELETE"] }));

//connecting database
mongoose.connect('').then(()=>{
    console.log('Mongodb connected')
})

//using all routes
app.use('/users', userRoutes)
app.use('/friend', friendRoutes)
app.use('/product', productRoutes)

//listening to port
app.listen(5000)