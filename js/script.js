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

function scrollAPage() {
	var y = $(window).scrollTop() + $(window).height();
	window.scrollTo({
		top: y,
		behavior: 'smooth'
	});
	console.log('clicked');
}
function scrollNextCont() {
	$("div").next(".container").addClass("scrollHere");
	var headerHeight = $("#topHeader").height();
	var x = $(".scrollHere").offset()
	window.scrollTo({
		top: x.top-headerHeight,
		behavior: 'smooth'
	});
	console.log('clicked');
}

/*$(window).scroll(function() {
    var contactScroll = $(window).scrollTop();
	var elementOffset = $(".bd-contact-page .container.contact.contact-cont").offset().top;
	var height = $(window).height();
	var distance = (elementOffset - scrollTop);
	if(distance <= height - 200) {
		$(".bd-contact-page .container.contact.contact-cont").addClass("in-view");
	}
	else {
		$(".bd-contact-page .container.contact.contact-cont").removeClass("in-view");
	}
});*/