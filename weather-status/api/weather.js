const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("config");
const API = "https://api.openweathermap.org/data/2.5/weather";
const KEY = config.get("WEATHER");

router.get("/:city", async (req, res) => {
  try {
    console.log(req.params.city);
    const info = await axios.get(API, {
      params: { q: req.params.city, appid: KEY, units: "imperial" },
    });

    res.json(info.data);
  } catch (e) {
    console.log(e);
    res.send("There was an error");
  }
});

module.exports = router;
