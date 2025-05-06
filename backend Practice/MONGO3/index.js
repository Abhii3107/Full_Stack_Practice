const express = require("express");
const app =express();

const path = require("path");
app.set("views",path.join(__dirname,"views"));
app.set("view engine" ,"ejs");
app.use(express.static(path.join(__dirname,"public"))); // for connecting styling (css)
app.use(express.urlencoded({ extended : true})); //for parsing form data

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const mongoose = require("mongoose");

const Chat = require("./models/chat.js"); // requiring chat model data

main()
.then(() => {
    console.log("connection Succesful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1= new Chat({
    from: "Sanskriti",
    to :"Abhay",
    message :"Hii Abhay Whats'up",
    created_at: new Date() // by this random date and time generated
});

// chat1.save()
// .then((res) => {console.log(res)})
// .catch((err) => {console.log(err)});


app.listen(8080,()=>{
    console.log("app is listening");
});

app.get("/",(req,res) =>{
    res.send("root is working");
});

//Index route - to get all chats
app.get("/chats", async (req,res) =>{
    let chats = await Chat.find(); // to get all data we use chat.find() we know, because this is a asynchronous function so we have to await (but await keyword is used in asymc function)
    // console.log(chats);
    res.render("index.ejs",{chats});
});

// New Route - to create new chat
app.get("/chats/new", (req,res) =>{
     res.render("new.ejs");
}); 

//create Route

app.post("/chats",(req,res) =>{
    let {from,to,message} = req.body;

    let newchat = new Chat({
        from : from,
        to :to,
        message : message,
        created_at: new Date()
    });
    // console.log(newchat);
    newchat.save().then((res) =>{console.log("chat is saved in DB")}).catch((err) =>{console.log(err)});
    res.redirect("/chats");
});

// Edit route- editing individual message
app.get("/chats/:id/edit", async (req,res) => {
    let{id}=req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

//Update Route

app.put("/chats/:id",async (req,res) =>{
    let{id} =req.params;
    let {message :newMsg} =req.body;
    let updatedchat = await Chat.findByIdAndUpdate(id, {message : newMsg} , {runValidators : true , new: true});
    // console.log(updatedchat);
    res.redirect("/chats");
});

//Destroy route - delete chat

app.delete("/chats/:id" , async (req,res) =>{
    let{id} =req.params;
    let deletedchat= await Chat.findByIdAndDelete(id);
    console.log(deletedchat);
    res.redirect("/chats");
});