const express = require("express");
const router = express.Router();

// res.json is similar to res.send, but it outputs json
// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// exports so when I want to use posts.js, it exports router
module.exports = router;
