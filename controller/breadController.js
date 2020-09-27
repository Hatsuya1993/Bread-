const catchAsync = require("../utils/catchAsync")

// Display Home

const homePage = catchAsync(async (req, res) => {
    res.render("home")
})

module.exports = {
    homePage
}