const express = require("express");
const app =express();
const path = require("path");

let port=8080;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));


app.listen(port,()=>{
    console.log(`server is listening at ${port}`);
})

app.get("/search",(req,res)=>{
    res.send("this is search page");
})

app.get("/",(req,res)=>{
res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceval= Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval});
});

app.get("/ig/:username",(req,res) =>{
    let {username}=req.params;
    res.render("instagram.ejs",{username});
});
