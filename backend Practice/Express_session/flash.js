const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const flash = require('connect-flash');


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

app.get("/register" , (req,res) =>{
    let{name = "anomymous"} = req.query;
    req.session.name= name;

    req.flash("success" , "user registered successfully"); // (key,message)  ,///Flash message is stored in session temporarily (for one request)

    res.redirect("/hello");
});

app.get("/hello" , (req,res) =>{
    // res.send(`hello , ${req.session.name}`);
    // console.log(req.flash("success"));
    res.render("page.ejs" , {name: req.session.name , msg: req.flash("success") });
});

/*
Flash Working Concept:
- Flash messages are stored in session but removed after being accessed (one-time messages)
- Used commonly for success/error messages after redirects (e.g., form submissions)
- You MUST access the flash message in the immediate next request, or it will be gone
*/

app.listen(3000,(req,res) =>{
    console.log("server is listening");
});
