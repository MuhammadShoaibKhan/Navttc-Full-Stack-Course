import express from "express";
import mongoose from "mongoose";
import buyerRoute from './routes/buyerRoute.js'
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose.connect("mongodb+srv://shoaib:12345@cluster0.i17dz.mongodb.net/").then(()=>{
    console.log("Mongodb is connected");
})

app.use('/buyer',buyerRoute)
app.listen(5000, () => console.log(`Server running on port $(5000)`));
