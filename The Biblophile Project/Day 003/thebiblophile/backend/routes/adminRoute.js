import { createAdmin, loginAdmin } from "../controllers/adminController";
import express from "express";
const adminRoute = express.adminRoute

router.post('/createAdmin', createAdmin)
router.post('/loginAdmin', loginAdmin)

export default adminRoute;