$(document).on("mousemove mouseout", function(){
	
	$(".form").focus(function() {
		$(this).next('div.help').fadeIn(500);
	});

	$(".form").blur(function() {
		$(this).next('div.help').fadeOut(300);
	});
});