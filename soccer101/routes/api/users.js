const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

const User = require("../../models/User");
//To create a route we do
// @Route    POST api/users
// @Desc     Register user route
// @access   Public
router.post(
  "/",

  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //If information not included correctly, bad req
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      /*See if user exists, encrypt user, return jswt
        
        Since the destructured object contains email as email: 'name@...' then we can just call it by default as email in json
        FindOne Document which is the key and value of something*/
      let user = await User.findOne({ email });

      //Check if user exists
      if (user) {
        return res.status(400).json({
          errors: [{ msg: "User already exists" }],
        });
      }

      user = new User({
        name,
        email,
        password,
      });

      //How secure
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      //Now save user
      await user.save();

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
