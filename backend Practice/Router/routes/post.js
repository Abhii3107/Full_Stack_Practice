const express = require("express");
const router = express.Router();

//Index
router.get("/",(req,res) =>{
    res.send("GET for posts");
});

//Show
router.get("/:id" , (req,res) =>{  // /posts/:id -> all common things is removed here ex- post
    res.send("GET for posts id");
})

//post 
router.post("/", (req, res) => {
    res.send("post for posts");
});

//delete
router.delete("/:id" , (req,res) => {
    res.send("DELETE for post id");
});

module.exports = router;