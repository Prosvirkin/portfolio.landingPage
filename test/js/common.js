$(document).ready(function(){

	$(".header-slider").owlCarousel({
		items: 1,
		margin:10,
		loop:true,
		animateOut: 'fadeOut',
	});

	var owl = $('.header-slider');
	owl.owlCarousel();

	$('.slider-next_button').click(function() {
		owl.trigger('next.owl.carousel');
	})

	$('.slider-prev_button').click(function() {
		owl.trigger('prev.owl.carousel'); 
	})

	$("#mobile-button").click(function(){
		$(".mobile-menu ul").css("display", "block"); 
	})

	$('.mobile-menu ul').animated('fadeInLeft');


	
	$('.forbusiness img').animated('bounceInRight');

	$(".partners-slider").owlCarousel({
		margin:10,
		loop:true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:false,
		responsive:{
			0:{
				items:2,
			},
			400:{
				items:2,
			},
			600:{
				items:3,
			},
			1000:{
				items:5,
			}
		}
	});



});



