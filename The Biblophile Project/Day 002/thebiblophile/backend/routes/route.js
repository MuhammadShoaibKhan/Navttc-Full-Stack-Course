import { createBuyer } from "../controllers/buyerController";
import express from "express";
const router = express.Router()

router.post('/createBuyer', createBuyer)

export default router