//TABS
$('ul.tabs_caption li').click(function() {

	event.preventDefault(); 

  	var thisClass = $(this).find('a').attr('href');

  	$('div.tabs>div').hide();
	$('div.' + thisClass).show();
	$('ul.tabs_caption li').removeClass('active');
	$(this).addClass('active');

});

// add comment function
$('.comment').on('click', function(){
    if($('.comment_new').hasClass('del')){
      $('.comment_new').removeClass('del');
      $('.comment').addClass('del');
    } else {
        $('.comment_new').addClass('del');
        $('.comment').removeClass('del');
    }
});