const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const flash = require('connect-flash');  // npm i connect-flash


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));


const sessionOptions = {
  secret: "mySuperSecret" ,
   resave: false,
  saveUninitialized: true,
};


app.use(session(sessionOptions));

// Flash middleware must come after session middleware
app.use(flash());

app.use((req,res,next) =>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
 })

app.get("/register" , (req,res) =>{
    let{name = "anomymous"} = req.query;
    req.session.name= name;

   if(name === "anomymous"){
     req.flash("error" , "user not registered");
   }
   else{
     req.flash("success" , "user registered succesfully");
   }

    res.redirect("/hello");
});

app.get("/hello" , (req,res) =>{
    res.render("page2.ejs" , {name: req.session.name });
});

app.listen(3000,(req,res) =>{
    console.log("Server is listening");
})