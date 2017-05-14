/*1. Возведение числа в степень*/

var a = prompt('Укажите число для возведения в степень', 2);
var n = prompt('Укажите степень в которую возвести число', 3);

function pow(a, n) {
	var b = a;
	
	for (var i = 1; i < n; i++) {
		b *= a;
	}

	return b;

}

// if (a == '') {
//   alert('Вы не указали данные для осуществления операции')
// } else if (b == '') {
//   alert('Вы не указали данные для осуществления операции')
// } else if (i = 1) {
// 	alert('Результат ' + pow(a, n));
// } else if (i < n) {
// 	alert('Результат ' + pow(a, n));
// } else if (i++) {
// 	alert('Результат ' + pow(a, n));
// } 

alert('Результат ' + pow(a, n));

console.log(pow(a,n));



/*2. Проверить имя пользователя*/

var arr=[]; 
    for(var i = 0; i<5; i++) arr.push(prompt('Enter your name'));

console.log(arr);

var userName = prompt('Enter your Username');

if (userName == arr[0]) {
	
	alert( 'Welcome ' + arr[0]);

	} else if (userName == arr[1]) {
	
	alert( 'Welcome ' + arr[1]);

	} else if (userName == arr[2]) {
	
	alert( 'Welcome ' + arr[2]);

	} else if (userName == arr[3]) {
	
	alert( 'Welcome ' + arr[3]);

	} else if (userName == arr[4]) {
	
	alert( 'Welcome ' + arr[4]);

	} else if (userName == '') {
	
	alert( 'Enter your Username' );

	} else {

  alert( 'Invalid Username' );
}

