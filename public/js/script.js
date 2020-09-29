$(document).ready(function () {
    $(window).scroll(() => {
        const pos = $(this).scrollTop();
        console.log(pos);
        if (pos >= 100) {
            $("#navbar").addClass("fixed-top");
            $("#navbar").addClass("container-fluid");
        } else {
            $("#navbar").removeClass("fixed-top");
            $("#navbar").removeClass("container-fluid");
        }
    });
});