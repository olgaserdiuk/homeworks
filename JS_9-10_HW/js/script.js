$(document).ready(function() {
	$( '.parent' ).hover(
		function(){
			$(this).children('.submenu').slideDown(300);
		},

		function(){
			$(this).children('.submenu').slideUp(300);
		}
	);

	$('input[type=checkbox]').each(
		function(){
			if($(this).prop('disabled') == true )
				$(this).parent().addClass('disabled');
			if($(this).prop('checked') == true )
				$(this).parent().addClass('active');
	});
});


$('.checked').on('click', function() {


	if ( $(this).hasClass("disabled")  == true)
				return;

	if($(this).find("input[type=checkbox]").prop('checked') == false){
		$(this).find("input[type=checkbox]").prop('checked', true);
		$(this).addClass('active');
	}
	else{
		$(this).find("input[type=checkbox]").prop('checked', false);
		$(this).removeClass('active');
	}



});


/*var str = '{"name": "John Doe"}';

try {
	JSON.parse(str);
	console.log('obj.name', obj.name); /*- если правильный код*/
/*} catch (e) {
	console.log('error is here'); /*- если есть ошибка*/
/*} finally {
	console.log('finally'); /*- выведется в любом случае*/
/*}*/