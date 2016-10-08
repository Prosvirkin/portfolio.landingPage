$(document).ready(function() {

	$(".toggle-mnu, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".toggle-mnu").click(function(){
		if ($(".top-mnu").is(":visible")){
			$(".top-mnu").fadeOut(600);
		} else{
			$(".top-mnu").fadeIn(600);
		};
	});

	$(".top-mnu ul li a").click(function(){
		$(".top-mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});



	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("#about-me").click(function() {
		$.scrollTo($(".about-me"), 1100, {
			offset: -150
		});
	});

	$("#resume").click(function() {
		$.scrollTo($(".resume"), 1100, {
			offset: -150
		});
	});

	$("#portfolio").click(function() {
		$.scrollTo($(".portfolio"), 1100, {
			offset: -110
		});
	});

	$("#contacts").click(function() {
		$.scrollTo($(".contacts"), 1100, {
			offset: -50
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items: 3,
		autoPlay: 3000,
		itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,2],
    itemsTablet : [600,1]
	
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".main-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Сообщение отправлено!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
});

/* Progress bar */

	var lang = {
  "html": "70%",
  "css": "70%",
  "javascript": "40%",
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});


});
 
	/* Анимации */

 $(".name h1").animated("fadeInDown");
 $(".name p").animated("fadeInUp");
 $(".top-mnu li").animated("fadeInUp");
 $(".topic").animated("fadeInUp");