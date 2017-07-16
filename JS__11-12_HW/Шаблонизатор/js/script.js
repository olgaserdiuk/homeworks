$(function() {
	
	var html = $('#item_tmpl').html();

	var data = {
		name: 'My Name',
		study: 'Хочу учить фронтенд потому что:',
		cont1: 'content1',
		cont2: 'content2',
		cont3: 'content3',
		telephone: 'Мой контактный телефон:',
		numtel: '+123456789',
		profile: 'Мой профиль в Facebook:',
		link: 'Facebook.com',
		feedback: 'Мой фидбек:',
		text: 'feedback',
	};

	var content = tmpl(html, data);

	$('body').append(content);

});