const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController.js')

router.post('/', productController.createdProduct)
router.get('/getProducts', productController.getProducts)
router.delete('/delete/:id', productController.deleteProduct)
router.put('/edit/:id', productController.editProduct)

module.exports = router;