const express= require("express");
const app=express();
const port=8080;

app.use(express.urlencoded({extended:true})); //by this express parse url encoded data which come from client side 

const path =require("path"); // kyuki hm khi se bhi server chlaye , to ejs template(home.ejs) ko view folder maihi search kre

app.set("view engine","ejs"); 
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public"))); // to connect public folder-- in which css file

const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed' // requiring uuid package for unique ids

const methodOverride = require("method-override");
app.use(methodOverride('_method'));

app.listen(port,()=>{
console.log("listening to port : 8080");
});

 let posts=[{      // right now there is no any database , to hm khud se hi sever side pe ek database ki trh kuch bna lege (for understanding)
    id:uuidv4(), // before "1a"
    username :"Abhay Singh",
    content : "I love Coding"      //"let" is used insted of "const" because fir const mai hm changes nhi lga pate(CRUD operation) 
 },
 {
   id:uuidv4(), //"2a"
    username :"Akash Singh",
    content : "I love Cars"
 },{
    id:uuidv4(),//"3a"
    username :"Aprajita Singh",
    content : "I love dance"
 }
];
/* (Index Route), View - To get all data*/

app.get("/posts",(req,res)=>{   //  Quora page
    res.render("index.ejs",{posts});
});

/* Create Route - To add new data*/

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs"); //form will render
});

app.post("/posts",(req,res)=>{ // when form will submit we come to this
   //console.log(req.body); // In post request, parameters is stored in req.body

   let{username,content}=req.body; // req.bady data will now store in new username , content variable
   let id=uuidv4();
   posts.push({id,username,content});
   //res.send("post request working");
   res.redirect("/posts");         // comes to Quora page
});

/*View ,Show route - to get one post */

app.get("/posts/:id", (req, res) => {
   let {id}=req.params;
   let post = posts.find( (p) => id === p.id);
   res.render("Show.ejs",{post});
   //console.log(post);
   //res.send("request is woking");

});

//PATCH (Update route)- To update specefic post

app.patch("/posts/:id",(req,res) =>{   // sending request on https://localhost:8080/copy any postid
   let {id}=req.params;
   
   let newContent =req.body.content; // editing content from hoppscoth
   
   let post = posts.find( (p) => id === p.id); // to find that specific post by requesting id
   post.content=newContent; //replacing content
   console.log(post); // post new data now shown to command

   res.redirect("/posts");   
});

// to edit in webpage directly

app.get("/posts/:id/edit",(req,res)=>{
   let {id}=req.params;
   let post = posts.find( (p) => id === p.id);
   
   res.render("edit.ejs",{post});

});

//DELETE (Delete Route )- to delte specific post

app.delete("/posts/:id",(req,res)=>{
   let {id}=req.params;
   posts = posts.filter( (p) => id !== p.id); // filter hoke wh posts aajayege jisme mai id na ho , fir wh purane wale array mai store ho jayege
   res.redirect("/posts");
});