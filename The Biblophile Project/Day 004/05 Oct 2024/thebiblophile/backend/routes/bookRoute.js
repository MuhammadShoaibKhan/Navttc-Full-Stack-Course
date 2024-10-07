import {createBook} from "../controllers/bookController";
import express from "express";
const router = express.Router()


router.post('/createBook', createBook)
router.put('/updatebook/:id',updateBook)

export default router;