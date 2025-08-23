const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

// app.use(cookieParser());

app.get("/cookie", (req, res) => {
  //   res.cookie("name", "Abhay");
  //   res.send(req.cookies);
});

const saltRounds = 10;
const myPassword = "AbhaySingh";

/*encrpted data */
app.get("/hashing", (req, res) => {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(myPassword, salt, function (err, hash) {
      // Store hash in your password DB.
      console.log("Hash:", hash);
      console.log("Salt:", salt);

      res.send({ hash, salt });
    });
  });
});

/*decryption and compare */
app.get("/check", (req, res) => {
  // Load hash from your password DB.
  bcrypt.compare(
    "AbhaySingh",
    "$2b$10$E.T/zytzJX0eMTUrFWvxwuKT4MhC9z6G4iH.9DELzoRbEL0YwCGMS",
    function (err, result) {
      // result == true
      console.log(result);
      res.send(result);
    }
  );
});

//-----------------------------------
//  Jwt-

const jwt = require("jsonwebtoken");
app.use(cookieParser());

app.get("/generate", (req, res) => {
  let token = jwt.sign({ email: "abhay@123gmail.com" }, "SecretKey");
  console.log(token);
  //sending generated token as cookie , now in session thing generated string is stored
  res.cookie("token", token);
  res.send("token is sended as cookie");
});

app.get("/read", function (req, res) {
  let data = jwt.verify(req.cookies.token, "SecretKey");
  console.log(data);
  res.send(data)
});
app.listen(5000, (req, res) => {
  console.log("app is listening at port 5000");
});

/*npm init

npm i express

npm i cookie  - parser

npm i jsonwebtoken

npm i bcrypt
*/
