$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(".mnu ul").slideToggle();
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
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});



	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		  navigation : false, // Show next and prev buttons
		  slideSpeed : 2000,
		  paginationSpeed : 3000,
		  singleItem:true,
		  mouseDrag: false,
		  touchDrag : false,
		  autoPlay: 4000,
		  transitionStyle : false,
		  responsive: true,
		});

	$(".next-button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev-button").click(function(){
		owl.trigger("owl.prev");
	});



//===========================================

$(document).ready(function() {
	var owl = $(".catalog-carousel");
	owl.owlCarousel({
		  //items : 7,
		  itemsCustom : [
		  [0, 1],
		  [490, 2],
		  [600, 2],
		  [700, 3],
		  [1000, 4],
		  [1200, 5],
		  [1400, 6],
		  [1600, 7]
		  ],
		  navigation : false,
		  mouseDrag: false,
		  touchDrag : false,
		});

	$(".catalog-next-button").click(function(){
		owl.trigger("owl.next");
	});
	$(".catalog-prev-button").click(function(){
		owl.trigger("owl.prev");
	});
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


/*
select
*/

$('select').each(function(){
	var $this = $(this), numberOfOptions = $(this).children('option').length;

	$this.addClass('select-hidden'); 
	$this.wrap('<div class="select"></div>');
	$this.after('<div class="select-styled"></div>');

	var $styledSelect = $this.next('div.select-styled');
	$styledSelect.text($this.children('option').eq(0).text());

	var $list = $('<ul />', {
		'class': 'select-options'
	}).insertAfter($styledSelect);

	for (var i = 0; i < numberOfOptions; i++) {
		$('<li />', {
			text: $this.children('option').eq(i).text(),
			rel: $this.children('option').eq(i).val()
		}).appendTo($list);
	}

	var $listItems = $list.children('li');

	$styledSelect.click(function(e) {
		e.stopPropagation();
		$('div.select-styled.active').not(this).each(function(){
			$(this).removeClass('active').next('ul.select-options').hide();
		});
		$(this).toggleClass('active').next('ul.select-options').toggle();
	});

	$listItems.click(function(e) {
		e.stopPropagation();
		$styledSelect.text($(this).text()).removeClass('active');
		$this.val($(this).attr('rel'));
		$list.hide();
        //console.log($this.val());
      });

	$(document).click(function() {
		$styledSelect.removeClass('active');
		$list.hide();
	});

});

/* Accordion */

var acc = document.getElementsByClassName("categories-accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].onclick = function(){
		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show");
	}
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].onclick = function(){
		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show");
	}
}

/* Slider  range*/

$(".slider-range").slider({
	range: true,
	min: 0,
	max: 200,
	values: [ 0, 200 ],
	slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	}
});
$( "#amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) +
	" - $" + $( ".slider-range" ).slider( "values", 1 ) );


