/*возведение числа в степень*/

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



