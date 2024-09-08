 const Product = require('../models/productModel.js')
 const User = require('../models/userModel.js')

 const createdProduct = async(req, res)=>{
    const {name, price, type, creator} = req.body
    const userExist = await User.findById(creator)
    if(userExist){
        const product = new Product({
            name: name,
            price: price,
            type:type,
            creator: creator
        })
        try {
            const createdProduct = await product.save() 
            res.status(201).json({product: createdProduct}) 
        } catch (err) {
            res.status(500).json('Product is not Created') 
        }
    }else{
        res.status(404).json('User does not exist')
    }
 }

 const getProducts = async(req, res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json(products) 
    } catch (err) {
        res.status(500).json('Products not found')
    }
}
const deleteProduct = async(req, res)=>{
    const id = req.params.id
    const product = await Product.findById({_id:id})
    if(Product ){
        try {  
        await Product.deleteOne({_id:id})
        res.status(200).json('Product is Deleted') 
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(404).json({message: 'Product not found'})
    }
}

const editProduct = async(req, res)=>{
    const id = req.params.id
    const product = await Product.findById(id)
    const {name, price, type, creator} = req.body 
    if(product){
        if( product.creator.toString() === creator){
        try { 
         product.name = name || product.name
         product.price = price || product.price
        product.type = type || product.type
        const updatedProduct = await product.save()
        res.status(200).json({product: updatedProduct}) 
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(401).json({message: 'User is not authorized'})
    }
    }else{
        res.status(404).json({message: 'Product not found'})
    }
}

 exports.createdProduct = createdProduct
 exports.getProducts = getProducts
 exports.deleteProduct = deleteProduct
 exports.editProduct = editProduct