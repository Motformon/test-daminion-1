//Fizz-buzz задачи

//Задача №1



// Yor code here  ...
function dscount(str, a , b) {
	var strLower = str.toLowerCase();
	var count = 0;
	var pos = strLower.indexOf(a + b);
	
	while (pos !== -1) {
		count++;
		pos = strLower.indexOf(a + b, pos + 1);
	}

	return count;
}

// Для удобства можно использовать эти тесты:
try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}

// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}


//Задача №2

// function checkSyntax(str) {
// 	if() {
// 		return 1;
// 	}
// 	return 0;
// }

// console.log(checkSyntax("---(++++)----") == 0)
// console.log(checkSyntax("") == 0)
// console.log(checkSyntax("before ( middle []) after ") == 0)
// console.log(checkSyntax(") (") == 1)
// console.log(checkSyntax("} {") == 1)
// console.log(checkSyntax("<(   >)") == 1)
// console.log(checkSyntax("(  [  <>  ()  ]  <>  )") == 0)
// console.log(checkSyntax("   (      [)") == 1)


//Алгоритмы


// Задача №1


//Рефакторинг

//Задача №2

function drawRating(vote) {
	switch (true) {
		case vote >= 0 && vote <= 20:
			return '★☆☆☆☆';
		case vote > 20 && vote <= 40:
			return '★★☆☆☆';
		case vote > 40 && vote <= 60:
			return '★★★☆☆';
		case vote > 60 && vote <= 80:
			return '★★★★☆';
		case vote > 80 && vote <= 100:
			return '★★★★★';
	}
}


// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★

//Практические задачи

//Задача №1

function parseUrl(url) {
	var parser = document.createElement('a');
	parser.href = url;
	return parser;
}

let a = parseUrl('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')

// Вернет объект, в котором будут следующие свойства:
console.log( a.href == "http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
console.log( a.hash == "#foo" )
console.log( a.port == "8080" )
console.log( a.host == "tutu.ru:8080" )
console.log( a.protocol == "http:" )
console.log( a.hostname == "tutu.ru" )
console.log( a.pathname == "/do/any.php" )
console.log( a.origin == "http://tutu.ru:8080" )