const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth.js");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator/check");

const User = require("../../models/User");

//To create a route we do
// @Route    GET api/auth
// @Desc     Test route
// @access   Public

//This is a protected route unless we get a token
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.err(err.message);
    res.status(500).send("Server error");
  }
});

// @Route    POST api/auth
// @Desc     Auth user and get token
// @access   Public
router.post(
  "/",

  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password").exists(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //If information not included correctly, bad req
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      /*See if user exists, encrypt user, return jswt
        
        Since the destructured object contains email as email: 'name@...' then we can just call it by default as email in json
        FindOne Document which is the key and value of something*/
      let user = await User.findOne({ email });

      //Check if user exists
      if (!user) {
        return res.status(400).json({
          errors: [{ msg: "Invalid credentials" }],
        });
      }

      //Comparing the plain text password to the hashed password from user.password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: "Invalid credentials" }],
        });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      //Can decode payload from jwt.io
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
