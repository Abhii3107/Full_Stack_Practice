const express =require("express");
const app= express();

//console.dir(app);

let port = 8080;

app.listen(port,() =>{
console.log(`app is listening on ${port}`);
});

// app.use((request,response) =>{
//     // console.log(request);
//     // console.log(response);
    
//     // response.send("this is string resonse");
//     // response.send({fruit:"apple" ,quantity: 1 });
//     response.send("<h1>Fruits</h1> <ul> <li>appple</li> </ul>");
// });
app.get("/",(req,res)=>{
    res.send("hello this is root page");
});

// app.get("/type",(req,res)=>{
//     res.send("this is type page");
// });

// app.get("/extra",(req,res)=>{
//     res.send("this is extra page");
// });

// app.get("*",(req,res)=>{
//     res.send("this is not available");
// });

app.get("/",(req,res)=>{
    res.send("hello this is root page");
});

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params
    let code= `<h1>welcome to page of <P> <b>${username}</b> which id is </b>${id}</b></p> </h1>`
    res.send(code);
});

app.get("/search", (req,res)=>{
let {q}=req.query;
res.send(`these are results for :${q}`);
console.log(q);
})