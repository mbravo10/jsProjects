const express = require('express');
const router = express.Router();

//To create a route we do 
// @Route    POST api/users
// @Desc     Register user route
// @access   Public
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('User route')

});

module.exports = router;