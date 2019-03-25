const express = require("express");
const router = express.Router();

// res.json is similar to res.send, but it outputs json
// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// exports so when I want to use profile.js, it exports router
module.exports = router;
