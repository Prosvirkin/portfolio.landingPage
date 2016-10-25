$(document).ready(function() {

	$(".burger_mnu").click(function() {
		$(this).next().slideToggle();
	});

	var owl = $("#slide");
	owl.owlCarousel({
		items : 1,	//Количество слайдов при разрешении экрана более 1000px
		itemsDesktop : [1000,1], //При разрешении экрана от 901px до 1000px
		itemsDesktopSmall : [900,1], // При разрешении экрана от 601px до 900px
		itemsTablet: [600,1], //При разрешении экрана от 0 до 600px 
		autoPlay : 2000,
		paginationSpeed : 1000,
		touchDrag : false,
		mouseDrag : true,
	});
	
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

});


/* карусельки */

var owl = $("#slide_clients");
owl.owlCarousel({
		items : 1,	//Количество слайдов при разрешении экрана более 1000px
		itemsDesktop : [1000,1], //При разрешении экрана от 901px до 1000px
		itemsDesktopSmall : [900,1], // При разрешении экрана от 601px до 900px
		itemsTablet: [600,1], //При разрешении экрана от 0 до 600px 
		autoPlay : 2000,
		paginationSpeed : 1000
		
	});

	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});


	var owl = $("#other_domain");
	owl.owlCarousel({
		items : 1,	//Количество слайдов при разрешении экрана более 1000px
		itemsDesktop : [1000,1], //При разрешении экрана от 901px до 1000px
		itemsDesktopSmall : [900,1], // При разрешении экрана от 601px до 900px
		itemsTablet: [600,1], //При разрешении экрана от 0 до 600px 
		autoPlay : 2000,
		paginationSpeed : 1000
		
	});

	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});


