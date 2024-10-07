import express from "express";
import mongoose from "mongoose";
import BuyerRoute from "./routes/buyerroute.js";
import BookRoute from "../routes/bookRoute.js";
import sellerRoute from "./routes/sellerRoute.js";
import adminRoute from "./routes/adminRoute.js";

import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose.connect("mongodb+srv://shoaib:12345@cluster0.i17dz.mongodb.net/").then(()=>{
    console.log("Mongodb is connected");
})

app.use('/buyer',BuyerRoute)
app.use('/seller',sellerRoute)
app.use('/admin',adminRoute)
app.use('/book',BookRoute)
app.listen(5000, () => console.log(`Server running on port $(5000)`));
