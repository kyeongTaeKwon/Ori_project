const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.listen(4000, () => {
  console.log("listening for requsets on port 4000");
});
