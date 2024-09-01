const controller = require('../controller/bookController.js')
const express = require('express')
const router = express.Router()
router.get('/get',controller.getBook)
router.get('/getById/:id',controller.getBookById)
router.post('/submit',controller.createBook)
router.put('/update/:id',controller.updateBook)
router.delete('/delete/:id',controller.deleteBook)

module.exports = router