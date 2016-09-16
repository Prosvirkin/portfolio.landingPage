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

	$(".link-ski").click(function(){
			$(".top-mnu").fadeOut(600);
	});

	$(".link-instagram").click(function(){
			$(".top-mnu").fadeOut(600);
	});

	$(".link-music").click(function(){
			$(".top-mnu").fadeOut(600);
	});

	$(".link-aboutme").click(function(){
			$(".top-mnu").fadeOut(600);
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".link-ski").click(function() {
		$.scrollTo($(".sport"), 800, {
			offset: 0
		});
	});

		$(".link-instagram").click(function() {
		$.scrollTo($(".instargam"), 800, {
			offset: 0
		});
	});

		$(".link-music").click(function() {
		$.scrollTo($(".music"), 800, {
			offset: 0
		});
	});

		$(".link-aboutme").click(function() {
		$.scrollTo($("footer"), 800, {
			offset: -90
		});
	});


	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
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
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});


 $(".sport").animated("bounceInLeft");
 $(".ski").animated("bounceInRight");
 $(".instargam").animated("bounceInLeft");
 $(".music").animated("bounceInRight");
  $(".spotify").animated("bounceInLeft");
	$(".itunes").animated("bounceInRight");
