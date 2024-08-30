const express = require('express')
const router = express.Router()
const userController = require('../controller/userController.js')

router.get('/getUser',userController.getUser)
router.post('/createUser',userController.createUser)
router.put('/editUser/:id',userController.editUser)
router.delete('/deleteUser/:id',userController.deleteUser)

module.exports = router

