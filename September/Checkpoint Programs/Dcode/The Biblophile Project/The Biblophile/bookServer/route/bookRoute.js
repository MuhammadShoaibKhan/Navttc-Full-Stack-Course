const express = require('express');
const router = express.Router();
 const multer = require('multer')
const path = require('path');


const controller = require('../controller/bookController.js');
router.use('/uploads', express.static(path.join(__dirname, './uploads')));

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, './uploads'); // Define the folder to save uploaded files
   },
   filename: function (req, file, cb) {
      cb(null,  file.originalname); // Generate unique file names
   }
});

const upload = multer({ storage: storage });

// Routes
router.get('/get', controller.getBook);
router.get('/:id', controller.getBookById)
router.post('/submit', upload.single('image'), controller.createBook); // Use 'image' as the field name
router.put('/update/:id', upload.single('image'), controller.updateBook);
router.delete('/delete/:id', controller.deleteBook);

module.exports = router;
