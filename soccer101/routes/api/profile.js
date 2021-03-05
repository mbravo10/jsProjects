const express = require('express');
const router = express.Router();

//To create a route we do 
// @Route    GET api/profiles
// @Desc     Test route
// @access   Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;