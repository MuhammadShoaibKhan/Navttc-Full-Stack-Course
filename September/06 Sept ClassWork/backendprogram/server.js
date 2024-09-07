const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoute.js')
const productRoutes = require('./routes/productRoute.js')
const friendRoutes = require('./routes/friendRoute.js')
app.use(bodyParser.urlencoded({extended: true}))

const User = require('./models/userModel.js')
const cors = require('cors')

const corsOptions = {
  origin: '*',
methods:["GET","POST","PUT","PATCH","DELETE"],
credentials: true,
};

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors(corsOptions))
// app.use(cors({origin: '*', methods:["GET","POST","PUT","PATCH","DELETE"]}));
// app.use(cors({origin: 'http://localhost:4000/', methods:["GET","POST","PUT","PATCH","DELETE"]}));


mongoose.connect('mongodb+srv://shoaib:12345@cluster0.dwn91.mongodb.net/', {
 
  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


app.use('/users', userRoutes)
app.use('/friend',friendRoutes)
app.use('/product', productRoutes)

app.listen(4000)