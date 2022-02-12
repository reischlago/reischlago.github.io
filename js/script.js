$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 90) {
        $("#topHeader").addClass("scroll");
    }
    else {
        $("#topHeader").removeClass("scroll");
    }
});