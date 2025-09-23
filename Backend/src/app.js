// created server 

const express = require("express");

app.get = express();

app.get("/", (req,res)=>{
  res.send("Hello world");
  
})

const app = express();
module.exports = app;
