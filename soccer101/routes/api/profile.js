const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth'); //For protected routes

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//To create a route we do 
// @Route    GET api/profile/me
// @Desc     Get current users profile 
// @access   Private, getting profile by user id with token
router.get('/me', auth, async (req, res) => {
    
    try{
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', 'name');

        if(!profile){
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        res.json(profile);

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server err');
    }
    
});

module.exports = router;