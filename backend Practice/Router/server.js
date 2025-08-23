const express =  require("express");
const app = express();
const post = require("./routes/post.js");
const user = require("./routes/user.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretCode")); // send any string to stamp a signed cookie-  officially

app.get("/getCookies" , (req,res) =>{
    res.cookie("greet" , "Namaste");   //(Name , Value) // like - key , value
    res.cookie("MadeIn" , "India");
    res.send("sent you some cookies");
});

app.get("/greet" ,(req,res) => {
    let{name = "anonymous"} = req.cookies;
    res.send(`Hi,${name}`);
});
//--------------------------------------------------
//(1)send signed cookie
app.use("/getsignedCookie" , (req,res) =>{
    res.cookie("made-In" , "India" ,{signed: true }); //now it is signed - means its offically coming from server
    res.send("Sent some Signed Cookie");
});

//(2)Verify Signed Cookie
 app.get("/verify" , (req,res) =>{
    // console.log(req.cookies);
    console.log(req.signedCookies); 
    res.send("verified");
 });
//--------------------------------------------------
app.get("/",(req,res) =>{
    console.dir(req.cookies);
    res.send("Hii I am root");
})

app.use("/posts" , post); // jo bhi /posts krke request aayega wh post router se match kiya jayega

app.use("/user" ,user);

app.listen(3000 , (req,res) =>{
    console.log("app is listening to 3000")
});