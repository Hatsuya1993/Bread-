const express = require("express");

const { homePage } = require("../controller/breadController");

const breadRoute = express.Router();

breadRoute.route("/").get(homePage);

module.exports = breadRoute;
