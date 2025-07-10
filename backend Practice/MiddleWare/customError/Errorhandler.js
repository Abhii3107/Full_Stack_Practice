const express = require("express");
const app = express();

const ExpressError = require("./ExpressError");

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "Access Denied");
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/admin", (req, res) => {
  throw new ExpressError("403", "Access to admin is forbidden");
});

// app.use((err, req, res, next) => {
//   console.log("when error detected it comes to this middleware.");
//   res.send(err); //it will print status code and message on render page
// });

// app.use((err, req, res, next) => {
//   let { status, message } = err;
//   res.status(status).send(message); // it will throw message -access denied on renderpage and status code-401 on console
// });

//----------------------------------------------------
app.get("/err", (req, res) => {
  abcd = abcd; // it throw error
});

//but in this error , there is not such thing defined what message and status code is thrown
//so when localhost:3000/api , it throw Range Error  and status code is not defined

// /* Default Status and Message*/

app.use((err, req, res, next) => {
  let { status = 500, message = "Some error" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("app is listening");
});
