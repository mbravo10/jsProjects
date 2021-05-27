const express = require("express");
const app = express();
const weather = require("./api/router");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World, this is backend for Weather Info");
});

app.use("/weather", weather);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
