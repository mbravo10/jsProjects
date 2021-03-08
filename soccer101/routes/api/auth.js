const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.js');

//To create a route we do 
// @Route    GET api/auth
// @Desc     Test route
// @access   Public
router.get('/', auth ,(req, res) => res.send('Auth route'));

module.exports = router;