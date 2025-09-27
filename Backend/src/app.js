// created server 

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();


// middleware for parsing JSON request bodies
app.use(express.json());

// middleware for parsing cookies
app.use(cookieParser());


app.get("/", (req,res)=>{
  res.send("Hello world");
     
})


module.exports = app;
