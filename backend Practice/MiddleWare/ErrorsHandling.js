//Express Default Error Handler

//Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack.

/*
//When an error is written, the following information is added to the response:

// The res.statusCode is set from err.status (or err.statusCode). If this value is outside the 4xx or 5xx range, it will be set to 500.

// The res.statusMessage is set according to the status code.

// The body will be the HTML of the status code message when in production environment, otherwise will be err.stack.
// Any headers specified in an err.headers object.
*/

// const express = require("express");
// const app = express();

// app.get("/wrong",(req,res) =>{
//     abcd=abcd; // error code
// });

// //op- status:500 Internal Server Error 
// // Reference Error :abcd is not defined

// app.listen(3000,() =>{
//     console.log("app is listening");
// });

//--------------------------------------------
// Developer throw an error like this, by customization

 const express = require("express");
const app = express();

const checkToken = (req, res, next) => {
    const { token } = req.query;
    if (token === "giveaccess") {
        next();
    } else {
        // You can use res.send OR throw an error
        // res.status(403).send("Access Denied");
        throw new Error("Access Denied");
    }
};

// Apply middleware on route
app.get("/api", checkToken, (req, res) => {
    res.send("data");
});
app.listen(3000,() =>{
    console.log("app is listening");
});

// Error-handling middleware
app.use((err, req, res, next) => {
    res.status(403).send(err.message);
});