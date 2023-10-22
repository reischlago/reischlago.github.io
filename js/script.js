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

//typing animation starts
var type_i = 0;
var txt = " and I like challenges";
var txt6 = " and I live in Barcelona";
var txt5 = " and I speak Hungarian, English and German";
var txt4 = " and I like to create websites";
var txt3 = " and I can do fuckin' anything";
var txt2 = " and I am a humble person";
var txt1 = " and I like challenges";
var speed = 50;
var wait = 300;
var timesrun = 0;

function typeIntro(){
	//console.log(type_i);
	if ((type_i < txt.length) || (type_i == 0)) {
		document.getElementById("typetext").innerHTML += txt.charAt(type_i);
		type_i++;
		setTimeout(typeIntro, speed);
	}
	else {
		setTimeout(delIntro, wait);
	}
}
function delIntro() {
	if (type_i != 0) {
		document.getElementById("typetext").innerHTML = document.getElementById("typetext").innerHTML.slice(0, -1);
		type_i = type_i-1;
		setTimeout(delIntro, speed);
	}
	else {
		timesrun = timesrun+1;
		if (timesrun == 1) {
			txt = txt6;
		}
		if (timesrun == 2) {
			txt = txt5;
		}
		if (timesrun == 3) {
			txt = txt4;
		}
		if (timesrun == 4) {
			txt = txt3;
		}
		if (timesrun == 5) {
			txt = txt2;
		}
		if (timesrun == 6) {
			txt = txt1;
			timesrun = 0;
		}
		setTimeout(typeIntro, wait);
	}
}
//typing animation endss

//var y = $(window).scrollTop() + $(window).height();
//console.log(y);
//$( ".landing-image .bg-landingimage" ).click(function() {
//    var x = $(window).scrollTop();
//    $(window).scrollTop(x+600);
//});
