const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const Product = require('./Models/productModel.js')
//const User = require('./Models/userModel.js')
app.use(bodyParser.urlencoded({extended:true}))


mongoose.connect("mongodb+srv://shoaib:12345@cluster0.sr0rj.mongodb.net/").then(() => {
console.log("MongoDB Connected")
})


app.get('/crudprod/form',(req,res) => {
    res.send(`<form method="POST">
        <label>Product Name</label><input name="prodname"></input>
        <label>Product Color</label><input name="color">
        <label>Product Category</label><input name="category">
        <button type="submit">Submit</button>`)
}) 

app.get('/crudprod/:id', async(req,res) =>{
    try {
        const product = await Product.find({})
    res.status(200).json(product)
    } catch (error) {
        res.status(500).json('Product not Found')
    }    
})

app.post('/crudprod/:id',async(req,res)=>{
    //  console.log(req.body.Intro)
    const {prodname,color,category} = req.body
    //console.log(name,email,age)
    const product = new Product({
          prodname: prodname,
          color: color,
          category:category
    })
    console.log(product)
    try{
      const createdProduct = await product.save()
      res.status(201).json({product: createdProduct})
      console.log("Product is created")
    } catch (err) {
      res.status(500).json('Product is not Created')
  
    }
  })


  app.listen(5000);