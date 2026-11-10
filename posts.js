const express = require("express");
const router = express.Router();

//Index
router.get("/posts", (req, res) => {
    res.send("GET for posts");
});

// Posts - Show
router.get("/posts/:id", (req, res) => {
    res.send("GET for post id");
});

// Posts - Post
router.post("/posts", (req, res) => {
    res.send("POST for posts");
});

// Posts - Delete 
router.delete("/posts/:id", (req, res) => {
    res.send("DELETE for post id");
});

module.exports = router;