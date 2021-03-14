const express = require("express");
const router = express.Router();

//To create a route we do
// @Route    GET api/posts
// @Desc     Test route
// @access   Public
router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;
