$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 90) {
        $("#topHeader").addClass("scroll");
    }
    else {
        $("#topHeader").removeClass("scroll");
    }
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
	var elementOffset = $(".bg-scroll-to-primary").offset().top;
	var height = $(window).height();
	var distance = (elementOffset - scrollTop);
	if(distance <= height - 200) {
		$(".bg-scroll-to-primary").addClass("in-view");
	}
	else {
		$(".bg-scroll-to-primary").removeClass("in-view");
	}
});