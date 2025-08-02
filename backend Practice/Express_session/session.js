const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({secret: "mySuperSecret" ,   resave: false,
  saveUninitialized: true,}));

app.get("/test" , (req,res) =>{
    res.send("testSuccesful");
});

app.get("/reqCount",(req,res) =>{
    if(req.session.count){   // a count variable created 
        req.session.count++
    }
    else{
        req.session.count = 1;
    }
    res.send(`you sent a request ${req.session.count} times`);
});

app.listen(3000,(req,res) =>{
    console.log("server is listening");
});

// --------------------------------



// const express = require("express");
// const app = express();
// const session = require("express-session");

// // Initialize express-session middleware
// // secret: used to sign the session ID cookie
// // resave: false -> don't save session if it wasn't modified
// // saveUninitialized: true -> save new sessions even if they are not modified
// app.use(session({secret: "mySuperSecret", resave: false, saveUninitialized: true}));

// // Route to test if the server is working
// app.get("/test", (req,res) => {
//     res.send("testSuccesful");
// });

// // Route to count the number of times a user sends a request in the same session
// app.get("/reqCount", (req,res) => {
//     // Check if 'count' exists in the session object
//     if(req.session.count){
//         req.session.count++; // If it exists, increment the count
//     }
//     else{
//         req.session.count = 1; // If not, initialize it to 1
//     }
//     // Send back how many times this session has hit the /reqCount route
//     res.send(`you sent a request ${req.session.count} times`);
// });

// // Start the server on port 3000
// app.listen(3000, (req, res) => {
//     console.log("server is listening");
// });

/*
Understanding how session works:

- Sessions are stored server-side, and a unique session ID is stored in the browser as a cookie.
- For the same browser (and same tab or different tabs), if cookies are enabled, the session ID remains the same, so the count increases on each request.
- If you open the same route in another browser or use incognito mode (which does not share cookies), a new session ID is created, and count starts from 1.
- This makes sessions useful for tracking individual user activity during a browsing session.
*/

