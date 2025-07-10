// Utility Middleware

//Logger - log(useful information , coonsole ke upr print krwana)

const express = require("express");
const app = express();

app.use((req, res, next) => {
  // console.log(req);  // To see Request all objects
  req.responseTime = new Date(Date.now()).toString(); //Date.now() - to readable form
  console.log(req.method, req.path, req.responseTime, req.hostname);
  next();
});

app.get("/random", (req, res) => {
  res.send("This is random page");
});

app.listen(3000, () => {
  console.log("app is listening");
});
