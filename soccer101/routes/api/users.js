const express = require('express');
const router = express.Router();

//To create a route we do 
// @Route    GET api/users
// @Desc     Test route
// @access   Public
router.get('/', (req, res) => res.send('User route'));

module.exports = router;