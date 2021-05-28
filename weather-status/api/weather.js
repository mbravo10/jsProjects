const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("config");
const API = "https://api.openweathermap.org/data/2.5/weather";
const KEY = config.get("WEATHER");

router.get("/", async (req, res) => {
  try {
    var city = "Denver";
    const info = await axios.get(API, {
      params: { q: city, appid: KEY },
    });

    res.json(info.data);
  } catch (e) {
    console.log(e);
    res.send("There was an error");
  }
});

module.exports = router;
