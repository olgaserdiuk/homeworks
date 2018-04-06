

/*$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});*/

$(document).ready(function() {
    var owl=$(".owl-carousel");
    var owl1=$(".car1");
    var owl2=$(".car2");
    var owlmob1=$(".owl-mobile1");
    var owlmob2=$(".owl-mobile2");

    owl.owlCarousel({
                dots:false,
                margin:20,
                /*loop:true,*/
                smartSpeed:400, //Время движения слайда
                autoplayTimeout:100, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:2,
                        loop:true,
                        stagePadding:40
                    },
                    480:{
                        items:3,
                        loop:true,
                        stagePadding:40,
                    },
                    768:{
                        items:5,
                        loop:true,
                        stagePadding:40,
                    },
                    992:{
                        items:4
                    }
                }
            });
    
/*переключатель первой карусели*/
    $(".next1").click(function(){
        owl1.trigger("next.owl.carousel");
    });
    $(".prev1").click(function(){
        owl1.trigger("prev.owl.carousel");
    });

/*переключатель второй карусели*/
    $(".next2").click(function(){
        owl2.trigger("next.owl.carousel");
    });
    $(".prev2").click(function(){
        owl2.trigger("prev.owl.carousel");
    });

/*переключатель первой мобильной карусели*/
    $(".mobnext1").click(function(){
        owlmob1.trigger("next.owl.carousel");
    });
    $(".mobprev1").click(function(){
        owlmob1.trigger("prev.owl.carousel");
    });

/*переключатель второй мобильной карусели*/
    $(".mobnext2").click(function(){
        owlmob2.trigger("next.owl.carousel");
    });
    $(".mobprev2").click(function(){
        owlmob2.trigger("prev.owl.carousel");
    });

});

$(function(){
  $('.owl-carousel').each(function(){
    $(this).owlCarousel();
  });
});



/*обработчик событий для кнопок*/
/*Каталог*/
$('.category').on('click', function(){
    if($('.show').hasClass('non')){
      $('.show').removeClass('non');
      $('.show').removeClass('none');
    } else {
      $('.show').addClass('non');
    }
});
/*Закрыть окно*/
$('.close').click(function(){
    $('.show').removeClass('non');
    $('.show').addClass('none');
});

/*Фильтр*/
/*$('.filtr').on('click', function(){
    if($('.showfil').hasClass('non')){
      $('.showfil').removeClass('non');
      $('.showfil').removeClass('none');
    } else {
      $('.showfil').addClass('non');
    }
});*/


