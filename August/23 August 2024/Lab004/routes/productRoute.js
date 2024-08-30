const express = require('express')
const router = express.Router()
const productController = require('../controller/productController.js')

router.post('/createdProduct', productController.createdProduct)
//router.get('/getProduct/:id', productController.getProduct)
router.get('/getProducts', productController.getProducts)
router.delete('/delete/:id', productController.deleteProduct)
router.put('/edit/:id',productController.editProduct)

module.exports = router;