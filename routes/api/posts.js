const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post model
const Post = require('../../models/Post');

// Post validation
const validatePostInput = require('../../validation/post');


// res.json is similar to res.send, but it outputs json
// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));


// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {

    // initialize error checking
    const { errors, isValid } = validatePostInput(req.body);

    // check validation
    if(!isValid){
        // if any errors, send 400 with errors object
        return res.status(400).json(errors);
    }


    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });

    newPost.save().then(post => res.json(post));
});



// exports so when I want to use posts.js, it exports router
module.exports = router;
