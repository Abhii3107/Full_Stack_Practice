//API Token as Query String -creating a middleware for an api that checks if the access token was passed in the query String or not

// const express = require("express");
// const app = express();

// app.use("/api",(req,res,next) =>{
//     console.log(req.query);
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     else{
//         res.send("Access DENIED !");
//     }
//     });

// app.get("/api", (req,res) =>{
//     res.send("data");
// })

// app.listen(3000,() =>{
//     console.log("app is listening");
// })

//http://localhost:3000/api/?token=giveaccess

//then you get acccess to get data

//--------------------------------
//Multiple middleware

//In get and post method we can pass multiple middleware together


// const express = require("express");
// const app = express();

// // ✅ Define middleware as a function
// const checkToken = ("/api",(req,res,next) =>{
//     console.log(req.query);
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     else{
//         res.send("Access DENIED !");
//     }
//     });

// app.get("/api",checkToken, (req,res) =>{
//     res.send("data");
// })

// app.listen(3000,() =>{
//     console.log("app is listening");
// })