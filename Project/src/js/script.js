

/*$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});*/

$(document).ready(function() {
    var owl=$(".owl-carousel");
    var owl1=$(".car1");
    var owl2=$(".car2");
    var owlmob=$(".owl-mobile1");

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

    /*owlmob.owlCarousel ({
        stagePadding: 40,
        loop:true,
        margin:10,
        nav:true,
        center: true
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            320:{
                items:2,
                nav:false
            },
            600:{
                items:4,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });*/
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

/*переключатель мобильной карусели*/
    $(".mobnext1").click(function(){
        owlmob.trigger("next.owl.carousel");
    });
    $(".mobprev1").click(function(){
        owlmob.trigger("prev.owl.carousel");
    });
});

$(function(){
  $('.owl-carousel').each(function(){
    $(this).owlCarousel();
  });
});


