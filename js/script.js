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
function srcollNextCont() {
	$("div").next(".container").addClass("scrollHere");
	var x = $(".scrollHere").offset()
	window.scrollTo({
		top: x.top,
		behavior: 'smooth'
	});
	console.log('clicked');
}

//var y = $(window).scrollTop() + $(window).height();
//console.log(y);
//$( ".landing-image .bg-landingimage" ).click(function() {
//    var x = $(window).scrollTop();
//    $(window).scrollTop(x+600);
//});