const express = require("express");

const app = express();

app.use(express.static("public"));

const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const breadRoute = require("./routes/breadRoute");

app.use("/", breadRoute);

module.exports = app;
