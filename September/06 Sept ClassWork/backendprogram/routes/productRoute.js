const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController.js')

router.post('/createProducts', productController.createdProduct)
router.get('/', productController.getProducts)
router.delete('/delete/:id', productController.deleteProduct)
router.put('/edit/:id', productController.editProduct)

module.exports = router;