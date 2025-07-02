
const express = require("express");
const app = express();

//app.use(path,callback);

app.use("/random" ,(req,res,next) => {
    console.log("This is only random middleware");
    next();
});

app.get("/",(req,res) =>{
    console.log("this is root path");
})

app.get("/random",(req,res) =>{
    res.send("This is random page");
});

app.listen(3000,()=>{
    console.log("app is listening");
});

//Error 404- if not any routes match

app.use((req,res)=>{
    // res.send("Error this page is Not found");
    res.status(404).send("Page is Not found");
})