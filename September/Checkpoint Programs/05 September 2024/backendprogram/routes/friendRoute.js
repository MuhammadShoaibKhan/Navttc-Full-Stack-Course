const express = require('express')
const router = express.Router()
const friendController = require('../controllers/friendController.js')


router.get('/',friendController.getFriends)
router.post('/createfriend',friendController.createFriend)
router.put('/editfriend/:id',friendController.editFriend)
router.delete('/deletefriend/:id',friendController.deleteFriend)

module.exports = router 