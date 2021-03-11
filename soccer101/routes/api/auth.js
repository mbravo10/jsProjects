const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.js');

const User = require('../../models/User');

//To create a route we do 
// @Route    GET api/auth
// @Desc     Test route
// @access   Public

//This is a protected route unless we get a token 
router.get('/', auth , async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user); 
    }catch(err){
        console.err(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;