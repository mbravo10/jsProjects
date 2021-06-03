const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 2000;

app.use(express.json({ extended: false }));
app.use(cors());

app.use("/weather", require("./api/weather"));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
