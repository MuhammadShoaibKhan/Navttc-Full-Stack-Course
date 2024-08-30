//Date:  24 August 2024

const express = require('express');
const mongoose = require('mongoose');

const Product = require('../Models/productModel.js')
const User = require('../Models/userModel.js')

const createdProduct = async(req,res) =>{
    const {name,price,type,creator} = req.body
    const userExist = await User.findById(creator)
    if(userExist){
        const product = new Product({
            name: name,
            price: price,
            type: type,
            creator: creator
        })

        try {
            const createdProduct = await product.save()
            res.status(201).json({product: createdProduct})
        } catch (error) {
            res.status(500).json('Product is not Created')
        }
    }else{
        res.status(404).json('User does not exist')
    }
}


const getProducts = async(req,res) =>{
    try {
        const product = await Product.find({})
    res.status(200).json(product)
    } catch (error) {
        res.status(500).json('Prodluct not Found')
        console.error('Error Getting User:', err.message);
    }    
  }

  const deleteProduct = async(req,res) =>{
    const id = req.params.id
    const product = await Product.findById({_id:id})
    if(Product){
        try {
        await Product.deleteOne({_id:id})
        res.status(200).json('Product is Deleted')
        } catch (error) {
            res.status(500).json(err)
          //  console.error('Error deleting User:', err.message);
        }
        
    }else{
        res.status(404).json({message: 'Product not found'})
      //  console.error('Error deleting User:', err.message);
    }
  }



  const editProduct = async(req,res) =>{
    const id=req.params.id
    const product = await Product.findById({_id:id})
     const {name,price,type} = req.body
     if(product){
         try {
             product.name = name || product.name
             product.price = price || product.price            
             product.type = type || product.type
             const updatedProduct = await product.save()
             res.status(200).json({product:updatedProduct})
         } catch (error) {
             res.status(500).json(err)
         }
     } else{
         res.status(404).json({message: 'Product not found'})
         console.error('Error editing Product:', err.message);
     }
     
  }

exports.createdProduct = createdProduct 
exports.getProducts = getProducts
exports.deleteProduct = deleteProduct
exports.editProduct = editProduct

