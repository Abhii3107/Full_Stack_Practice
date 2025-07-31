const express = require("express");
const router =  express.Router();

//Index                                      //remove user, common part from all routes
router.get("/", (req,res) =>{
    res.send("GET for users");
});

//show
router.get("/:id" , (req,res) =>{
    res.send("Get for user id");
});

//POST
router.post("/", (req,res) => {
    res.send("post for user");
});

//Delete
router.delete("/:id", (req,res) =>{
    res.send("Delete for id");
});

module.exports = router;