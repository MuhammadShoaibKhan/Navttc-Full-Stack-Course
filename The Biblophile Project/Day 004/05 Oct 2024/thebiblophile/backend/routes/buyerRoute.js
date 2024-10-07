import { createBuyer, loginBuyer } from "../controllers/buyerController";

import express from "express";
const BuyerRoute = express.buyerRoute

router.post('/createBuyer', createBuyer)
router.post('/loginBuyer', loginBuyer)

export default BuyerRoute;