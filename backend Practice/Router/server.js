const express =  require("express");
const app = express();
const post = require("./routes/post.js");
const user = require("./routes/user.js")

app.listen(3000 , (req,res) =>{
    console.log("app is listening to 3000")
});

app.use("/posts" , post);

app.use("/user" ,user);