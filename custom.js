var mainslider;
var sliding = false;

$(document).ready(function function_name(argument) {
	var options = {
		slide: '.slide', // Nama slide di slidercontainer
		swipe: false, //handler swipe, wajib include touchSwipe
		transition: "slide", //Transisi slide=> slide dan fade
		slideTracker: true, // menambah pelacakan slide
		slideTrackerID: 'slideposition', // Nama pelacakan slide
		slideOnInterval: false, // Interval slide
		interval: 9000, //Interval slide, jika slideONInterval is enabled/true
		animateDuration: 1000, //Durasi animasi
		animationEasing: 'ease', //Nilai yang diterima: liniear ease in out in-out snap easeOutCubic



		pauseOnHover: false, // Pasu jika user mengarahkan kursor ke slide container
		magneticSwipe: true, // efek menempel pada slide ketika swipping/dragging
		neverEnding: true // aktifkan untuk membuat efek yang tidak pernah berhenti/neverending

};

$(".slider").simpleSlider(options);
mainslider = $(".slider").data("simpleSlider");
/*yes,that's all ! */

	$(".slider").on("beforeSliding", function(event) {
		var prevSlide = event.prevSlide;
		var newSlide = event.newSlide;
		$(".slider .slide[data-index='" + prevSlide + "'] .slideContent") .fadeOut();
		$(".slider .slide[data-index='" + newSlide + "'] .slideContent") .hide();
		sliding = false;

	});

	/** Control the slider bby scrolling **/

	$(window).bind('mousewheel' , function(event) {
		if(!sliding) {
			if(event.originalEvent.deltaY > 0){
				mainslider.nextSlide();
			}
			else {
				mainslider.prevSlide();
			}
		}
	});

	$(".slide#satu") .backstretch("images/image1.jpg");
	$(".slide#dua") .backstretch("images/image2.jpg");
	$(".slide#tiga") .backstretch("images/image3.jpg");
	$(".slide#empat") .backstretch("images/image4.jpg");
	$(".slide#lima") .backstretch("images/image5.jpeg");
	$(".slide#enam") .backstretch("images/image6.jpg");

	$('.slide .backstretch img').on('dragstart', function(event) { event.preventDefault(); });

	$(".slidecontent").each(function() {
		$(this).css('margin-top', -$(this) .height()/2);

		});
	});