const express = require('express')
const router = express.Router()
const sitedbcontroller = require("../controllers/sitedbcontroller")


router.get('/getProducts/', sitedbcontroller.getProducts)
//router.get('/getProducts/:id', sitedbcontroller.getProducts)
router.post('/createProducts', sitedbcontroller.createProducts)
router.delete('/deleteProducts/:id',sitedbcontroller.deleteProducts)
router.put('/editProducts/:id',sitedbcontroller.editProducts)

module.exports = router