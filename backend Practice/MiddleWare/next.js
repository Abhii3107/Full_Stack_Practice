//Middleware - it is function that run between request and response cycle
// request ke baad , Response se phele
'use strict'

const express = require("express");
const app = express();

app.use((req,res,next) => {
    console.log("1st Middleware");
    next();                         // jump to 2nd middleware
    // console.log("after next"); // executed after 2nd middleware , but better developer dont write instructions after next thats why they use return next(); 
});

app.use((req,res,next) => {
    console.log("2nd Middleware");
    next();
});

app.get("/random",(req,res) =>{
    res.send("This is random page");
});

app.listen(3000,()=>{
    console.log("app is listening");
});

