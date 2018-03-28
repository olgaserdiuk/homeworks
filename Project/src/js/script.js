


/*$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});*/

$(document).ready(function() {
	var owl=$(".owl-carousel");
	owl.owlCarousel({
                margin:20, //Отступ от элемента справа в 50px
                // nav:true, //Отключение навигации
                dots:false,
                smartSpeed:500, //Время движения слайда
                autoplayTimeout:500, //Время смены слайда
                /*navText : ["",""],*/
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                	0:{
                		items:2
                	},
                	600:{
                		items:4
                	},
                	1000:{
                		items:4
                	}
                }
            });
	$(".next").click(function(){
		owl.trigger("next.owl.carousel");
	});
	$(".prev").click(function(){
		owl.trigger("prev.owl.carousel");
	});

});

$(function(){
  $('.owl-carousel').each(function(){
    $(this).owlCarousel();
  });
});