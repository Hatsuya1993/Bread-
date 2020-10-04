const express = require("express");

const {
    homePage,
    menu,
    team,
    contact,
    blog
} = require("../controller/breadController");

const breadRoute = express.Router();

breadRoute.route("/").get(homePage);

breadRoute.route("/menu").get(menu);

breadRoute.route("/team").get(team);

breadRoute.route("/contact").get(contact);

breadRoute.route("/blog").get(blog);


module.exports = breadRoute;