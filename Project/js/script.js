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
                mouseDrag: false,
                touchDrag: true,
                autoplayTimeout:100, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:2,
                        loop:true,
                        stagePadding:40/*,*/
                       /* mouseDrag: false,
                        touchDrag: true*/
                    },
                    480:{
                        items:3,
                        loop:true,
                        stagePadding:40/*,*/
                       /* mouseDrag: false,
                        touchDrag: true*/
                    },
                    768:{
                        items:4,
                        loop:true,
                        stagePadding:40/*,*/
                       /* mouseDrag: true,
                        touchDrag: false*/
                    },
                    992:{
                        items:4/*,*/
                        /*mouseDrag: true,
                        touchDrag: false*/
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

/*обработчики событий для кнопок*/
/*Каталог*/
$('.category').on('click', function(){
    if($('.show').hasClass('none')){
      $('.show').removeClass('none');
      $('.show').addClass('non');
    } else {
        $('.show').removeClass('non');
      $('.show').addClass('none');
    }
});
/*Закрыть окно*/
$('.close').click(function(){
    $('.show').removeClass('non');
    $('.show').addClass('none');
    $('.showfil').removeClass('non');
    $('.showfil').addClass('none');
});

/*Фильтр*/
$('.filtr').on('click', function(){
    if($('.showfil').hasClass('none')){
      $('.showfil').removeClass('none');
      $('.showfil').addClass('non');
    } else {
        $('.showfil').removeClass('non');
      $('.showfil').addClass('none');
    }
});

/*Условия доставки*/

$('.rules').on('click', function(){
    if($('.delivery').hasClass('none')){
      $('.delivery').removeClass('none');
      $('.delivery').removeClass('del_rules');
      document.getElementByClass(".delivery").style.display = "block";
    } else {
        $('.delivery').addClass('del_rules');
      $('.delivery').addClass('none');
    }
});
/*Закрыть окно*/
$('.del').click(function(){
    $('.delivery').addClass('none');
    $('.delivery').addClass('del_rules');
});


/*Написать отзыв big size*/

$('.review-link').on('click', function(){
    if($('.feedbk-wrap').hasClass('none')){
      $('.feedbk-wrap').removeClass('none');
      $('.feedbk-wrap').removeClass('feedbk_del');
      document.getElementByClass(".feedbk-wrap").style.display = "block";
    } else {
        $('.feedbk-wrap').addClass('feedbk_del');
      $('.feedbk-wrap').addClass('none');
    }
});

/*Написать отзыв mobile size*/
$('.review-link1').on('click', function(){
    if($('.feedbk-wrap').hasClass('none')){
      $('.feedbk-wrap').removeClass('none');
      $('.feedbk-wrap').removeClass('feedbk_del');
      document.getElementByClass(".feedbk-wrap").style.display = "block";
    } else {
        $('.feedbk-wrap').addClass('feedbk_del');
      $('.feedbk-wrap').addClass('none');
    }
});

// Открытие подкаталогов
/*$(document).ready(function pressbutt(subm,num,dir,i,m)){

    // Работа с классом
    if(document.getElementById("cat"+subm)){
        var IdStyle = document.getElementById("cat"+subm);
        if(IdStyle.className == 'catalog_forma') IdStyle.className='catalog_forma_open';
        else IdStyle.className='catalog_forma';
    }


    if(!dir) dir='';
    if(!m) m="m";
    if(!i) i="i";
    var SUBMENU = document.getElementById(m+subm).style;

    if (SUBMENU.visibility=='hidden'){
        SUBMENU.visibility = 'visible';
        SUBMENU.position = 'relative';
    }

    else{
        SUBMENU.visibility = 'hidden';
        SUBMENU.position = 'absolute';
    }

    for(j=0;i<num;j++)
        if(j != subm)
            if(document.all[m+j]){
                document.all[m+j].style.visibility = 'hidden';
                document.all[m+j].style.position = 'absolute';
            }
});*/


/*$('.rules').on('click', function(){
    $('.delivery').toggleClass('.del_rules', addOrRemove);
    $('.delivery').toggleClass('.none', addOrRemove);
});*/

