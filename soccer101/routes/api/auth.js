const express = require('express');
const router = express.Router();

//To create a route we do 
// @Route    GET api/auth
// @Desc     Test route
// @access   Public
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;