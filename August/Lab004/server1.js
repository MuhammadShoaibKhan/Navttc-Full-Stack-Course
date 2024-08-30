const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
//const Product = require('./Models/userModel.js')
const User = require('./Models/userModel.js')
app.use(bodyParser.urlencoded({extended:true}))




mongoose.connect("mongodb+srv://shoaib:12345@cluster0.sr0rj.mongodb.net/").then(() => {
console.log("MongoDB Connected")
})

// Users Requests
    app.get('/crudusers/form',(req,res) => {
        res.send(`<form method="POST">
            <label>Name</label><input name="name"></input>
            <label>Email</label><input name="email">
            <label>Age</label><input name="age">
            <button type="submit">Submit</button>`)
    }) 


// app.post('/',(req,res)=>{
//     console.log(req.body)
// })

// app.get('/',(req,res) => {   
//     res.send(`<form method="POST"><label for="name">Tell me about Yourself: </label> <input name="Intro"><button type="submit">Submit</button></form>`)
// })

app.post('/crudusers/:id',async(req,res)=>{
  //  console.log(req.body.Intro)
  const {name,email,age} = req.body
  //console.log(name,email,age)
  const user = new User({
        name: name,
        email: email,
        age:age
  })
  console.log(user)
  try{
    const createdUser = await user.save()
    res.status(201).json({user: createdUser})
    console.log("User is created")
  } catch (err) {
    res.status(500).json('User is not Created')

  }
})


app.put('/crudusers/:id',async(req,res)=>{
   const id=req.params.id
   const user = await User.findById({_id:id})
    const {name,email,age} = req.body
    if(user){
        try {
            user.name = name || user.name
            user.email = email || user.email            
            user.age = age || user.age
            const updatedUser = await user.save()
            res.status(200).json({user:updatedUser})
        } catch (error) {
            res.status(500).json(err)
        }
    } else{
        res.status(404).json({message: 'User not found'})
    }
    
    })
    

app.get('/crudusers/:id', async(req,res) =>{
    try {
        const users = await User.find({})
    res.status(200).json(users)
    } catch (error) {
        res.status(500).json('Users not Found')
    }    
})

app.delete('/crudusers/:id',async(req,res) =>{
    const id = req.params.id
    const user = await User.findById({_id:id})
    if(user){
        try {
        await User.deleteOne({_id:id})
        res.status(200).json('User is Deleted')
        } catch (error) {
            res.status(500).json(err)
        }
        
    }else{
        res.status(404).json({message: 'User not found'})
    }
})



//Product Requests
app.listen(5000);
