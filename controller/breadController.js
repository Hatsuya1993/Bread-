const catchAsync = require("../utils/catchAsync")

// Display Home

const homePage = catchAsync(async (req, res) => {
    res.render("home", {
        title: "Love with baking items"
    })
})

// Display Menu

const menu = catchAsync(async (req, res) => {
    res.render("menu", {
        title: "Menu List"
    })
})

// Display Team

const team = catchAsync(async (req, res) => {
    res.render("teams", {
        title: "Chef Teams"
    })
})

// Display Contact

const contact = catchAsync(async (req, res) => {
    res.render("contact")
})

// Display Blog

const blog = catchAsync(async (req, res) => {
    res.render("blog")
})

module.exports = {
    homePage,
    menu,
    team,
    contact,
    blog
}