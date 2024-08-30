const Product = require('../Models/siteModel')


const getProducts = async(req, res)=>{
//   const id = req.params.id
//   const product = await Product.findById({_id:id})
//   if(product)
    {

  
    try {
        const products = await Product.find({})
        res.status(200).json(products) 
    } catch (err) {
        res.status(500).json('Products not found')
    }
}
}

const createProducts = async(req, res)=>{
    const {sitename, sitecreator, year} = req.body 
    const product = new Product({
        sitename: sitename,
        sitecreator: sitecreator,
        year:year
    })
    console.log(product)
    try {
        const createdProduct = await product.save() 
        res.status(201).json({product: createdProduct})
    } catch (err) {
        res.status(500).json('Product is not Created')
    }  
}

const editProducts = async(req, res)=>{
    const id = req.params.id
    const product = await Product.findById({_id:id})
    const {sitename, sitecreator , year} = req.body 
    if(product){
        try { 
         product.sitename = sitename || product.sitename
         product.sitecreator = sitecreator || product.sitecreator
        product.year = year || product.year
        const updatedProduct = await product.save()
        res.status(200).json({product: updatedProduct}) 
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(404).json({message: 'Product not found'})
    }
}

const deleteProducts = async(req, res)=>{
    const id = req.params.id
    const product = await Product.findById({_id:id})
    if(product){
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


exports.getProducts = getProducts
exports.createProducts = createProducts
exports.editProducts = editProducts
exports.deleteProducts = deleteProducts