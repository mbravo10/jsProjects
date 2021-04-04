const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth"); //For protected routes
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

//To create a route we do
// @Route    GET api/profile/me
// @Desc     Get current users profile
// @access   Private, getting profile by user id with token
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", "name");

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server err");
  }
});

//To create a route we do
// @Route    GET api/profile/
// @Desc     Create-update a user profile
// @access   Private, getting profile by user id with token

router.post(
  "/",
  auth,
  check("teams", "At least one team is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { bio, teams } = req.body;

    //Build profile fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (bio) profileFields.bio = bio;
    if (teams) {
      profileFields.teams = teams.split(",").map((skill) => skill.trim());
    }

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      //Create
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server err");
    }
  }
);

//To create a route we do
// @Route    GET api/profile/
// @Desc     Get all profiles
// @access   Public

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "teams"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//To create a route we do
// @Route    GET api/profile/user/:user_id
// @Desc     Get profile by user id
// @access   Public

router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "teams"]);
    if (!profile) return res.status(400).json({ msg: "Profile not found" });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server error");
  }
});

//To create a route we do
// @Route    Delete api/profile/
// @Desc     Delete profiles, user, & posts
// @access   Private

router.delete("/", auth, async (req, res) => {
  try {
    //@todo - remove users posts

    //Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //Remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
