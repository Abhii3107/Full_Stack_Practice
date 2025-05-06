const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');

const express =require("express");
const app = express(); 

const path =require("path");

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

const methodOverride= require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',    // a?c to your database
  password:"lolobobo"
});

let getRandomUser = () =>
  {

return [ // removing {} from object to making array and removing key:value(object things)
  faker.string.uuid(),
  faker.internet.username(), // before version 9.1.0, use userName()
  faker.internet.email(),
  faker.internet.password(),    
];
};

app.listen("8080",()=>{
  console.log("server is listening to port 8080");
});

// home route
app.get("/",(req,res) => {
  let q= "SELECT count(*) FROM user";
  try{                                           
    connection.query(q, (err, result) => {         
        if(err) throw err;
        console.log(result);  // (result[0]["count(*)"]) - output - 102 only
       // res.send (result); // res.- response , result - database query result
       let count=result[0]["count(*)"];
        res.render("home.ejs",{count});
      });
    }
    catch(err){
        console.log(err);
        res.send("some error in DB");
    }; 
    
    // connection.end();
  
});

 //show route

 app.get("/user",(req,res) =>{
     let q= "SELECT * FROM user";
     try{
      connection.query(q,(err,users) => {
        if(err) throw err;
        res.render("showusers.ejs" ,{users});
      });
    }
      catch(err){
           res.send("error in database");
      }
 });

 //Edit route

 app.get("/user/:id/edit" ,(req,res) =>{
  let {id} = req.params;

   let q = `SELECT * FROM user WHERE id ='${id}'`; 
       
   try{
    connection.query(q,(err,result) => {
      if(err) throw err;
      console.log(result);
      let user = result[0];
      res.render("edit.ejs",{user});
    });
  }
    catch(err){
         res.send("error in database");
    }
 });

//Update route in db

app.patch("/user/:id",(req,res) =>{
  let {id} = req.params;
  let{password:formPass , username:newUsername} =req.body;
let q = `SELECT * FROM user WHERE id ='${id}'`; 
      
  try{
   connection.query(q,(err,result) => {
     if(err) throw err;
     let user = result[0];
     if(formPass !=user.password){
      res.send("wrong password");
     }
     else{
      let q2 =`UPDATE user SET username ='${newUsername}' WHERE id='${id}'`;
      connection.query(q2,(err,result) => {
        if(err) throw err;
        res.redirect("/user");
      });
     }
   });
 }
   catch(err){
        res.send("error in database");
   }
  
});

//--------------------------------------------------------

// // Inserting bulk data
// let getRandomUser = () =>
//   {

// return [ // removing {} from object to making array and removing key:value(object things)
//   faker.string.uuid(),
//   faker.internet.username(), // before version 9.1.0, use userName()
//   faker.internet.email(),
//   faker.internet.password(),    
// ];
// };

// let q="INSERT INTO user (id,username,email,password) VALUES ?";

// let data =[];

// for(let i=1 ; i <= 100 ;i++){
//   data.push(getRandomUser());
// }

// try{                                           
// connection.query(q, [data],(err, res) => {          //many parameters can be passed , connection jo object form hui yha pr uske andr query ek function hai uska kaam hota hai database ke upr koi bhi query run krna
//     if(err) throw err;
//     console.log(res); //res is array
// });
// }
// catch(err){
//     console.log(err);
// }; 

// connection.end();






/*(1) for single data
let q="INSERT INTO user (id,username,email,password) VALUES ????"; //4 question mark

let user = ["123bd","123_newuserbe","abefc@gmail.com","abfecd"];
connection.query(q , user ,(err,res) =>{  // query jb q ko check krta hai aur usme ? aata hai to uske baad wala vale(user) usko usme asssign kr deta hai
  -------})
*/
///---------------------------------------------

//2) Inserting new data (multile)

// let q="INSERT INTO user (id,username,email,password) VALUES ?";

// let users = [
//    ["123b","123_newuserb","abc@gmail.com","abcd"],
//    ["123bd","123_newuserbe","abefc@gmail.com","abfecd"]
// ];

// try{                                           
// connection.query(q, [users],(err, res) => {          //many parameters can be passed , connection jo object form hui yha pr uske andr query ek function hai uska kaam hota hai database ke upr koi bhi query run krna
//     if(err) throw err;
//     console.log(res); //res is array
// });
// }
// catch(err){
//     console.log(err);
// }; 

// connection.end();

//------------------------------------------------------

// let getRandomUser = () =>
//     {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     password: faker.internet.password(),    
//   };
// }

// console.log(getRandomUser());