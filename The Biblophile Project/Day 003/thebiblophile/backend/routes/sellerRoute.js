import { createSeller, loginSeller } from "../controllers/sellerController";
import express from "express";
const sellerRoute = express.sellerRoute

router.post('/createSeller', createSeller)
router.post('/loginSeller', loginSeller)

export default sellerRoute;