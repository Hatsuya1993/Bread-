const catchAsync = require("../utils/catchAsync")

// Display Home

const homePage = catchAsync(async (req, res) => {
    res.render("home", {
        title: "Love with baking items",
        title2: "Since Americans in the South began roasting pigs publicly, Barbecues have been a staple of North American living. For many, grilling becomes a routine mealtime activity.",
        title_image: "title-contents-home"
    })
})

// Display Menu

const menu = catchAsync(async (req, res) => {
    res.render("menu", {
        title: "Menu List",
        title2: "",
        title_image: "title-contents-menu"
    })
})

// Display Team

const team = catchAsync(async (req, res) => {
    res.render("teams", {
        title: "Chef Teams",
        title2: "",
        title_image: "title-contents-teams"
    })
})

// Display Contact

const contact = catchAsync(async (req, res) => {
    res.render("contact")
})

// Display Blog

const blog = catchAsync(async (req, res) => {
    res.render("blog", {
        title: "Dude You’re Getting a Telescope",
        title2: "There is a moment in the life of any aspiring astronomer that it is time to buy that first",
        title_image: "title-contents-blog"
    })
})

module.exports = {
    homePage,
    menu,
    team,
    contact,
    blog
}