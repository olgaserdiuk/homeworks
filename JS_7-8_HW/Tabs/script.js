$('ul.tabs_caption li a').click(function() {

	event.preventDefault(); 

  	var thisClass = $(this).attr('href');

  	$('div.tabs div').hide();
	$('div.' + thisClass).show();
	$('ul.tabs_caption li').removeClass('active');
	$(this).parent().addClass('active');

});