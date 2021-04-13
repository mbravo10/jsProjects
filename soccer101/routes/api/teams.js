const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const axios = require("axios");
const config = require("config");
const APIKEY = config.get("soccerAPI");
const URL = "https://api.football-data.org/v2/competitions/2021/teams";

//To create a route we do
// @Route    GET api/posts/:id
// @Desc     Get posts by ID
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const response = await axios.get(URL, {
      headers: { "x-auth-token": APIKEY },
    });
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Wrong API key");
  }
});

module.exports = router;
