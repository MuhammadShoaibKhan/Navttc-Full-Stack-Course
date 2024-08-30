const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))



mongoose.connect("mongodb+srv://shoaib:12345@cluster0.sr0rj.mongodb.net/'").then(() => {
console.log("MongoDB Connected")
})

app.get('/',(req,res) => {
    res.send(`<form method="POST"><label for="name">Name</label> <input name="name"><button type="submit">Submit</button></form>`)
})
app.post('/',(req,res)=>{
    console.log(req.body)
})

app.get('/about',(req,res) => {   
    res.send(`<form method="POST"><label for="name">Tell me about Yourself: </label> <input name="Intro"><button type="submit">Submit</button></form>`)
})

app.post('/about',(req,res)=>{
    console.log(req.body.Intro)
})

app.listen(5000);
