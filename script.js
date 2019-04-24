
/**
 * Задание 1.
 * Функция суммирует передаваемые в аргументе числа.
 * Если аргумент не передали, то должна вывести результат суммирования 
 * @param {number} n - Число, которое мы хотим добавить к общей сумме 
 * @return {number} Сумма всех переданных чисел.
 */
function sum(n) {
	return function(a) {
		return function(b) {
			return function() {
				return n + a + b;
			}
		}
	}
}

console.log(sum(2)(3)(6)()); // 11




/**
 * Задание 2.
 * Функция возвращает объект, прототипом которого является другой объект, переданный в аргументе 
 * @param {object} obj - Объект для прототипа.
 * @return {object} Новый объект в прототипе которого переданный объект.
 */
function createInheritObject(obj) {
	// Необходимо реализовать тело функции
}

function Employee() {}

createInheritObject(new Employee());




/**
 * Задание 3.
 * Функция принимает массив из URL адресов, параллельно делаeт http запрос на каждый и возвращает Promise.
 * В обработчик then должен попадать массив с результатами от каждого запроса 
 * @async
 * @param {Array} arr - Массив из URL адресов.
 * @return {Promise} Массив и результатами запросов.
 */
function multipleRequest(arr) {
}

const arr = ['http://test1.com', 'http://test2.com', 'http://test3.com'];

multipleRequest(arr).then((results) => {
    console.log(results); // ['result1', 'result2', 'result3']
});




/**
 * Задание 4.
 * Функция проверяет правильность расстановки скобок (в математическом смысле) в переданной строке
 * Каждая открытая скобка должна быть закрыта в правильном порядке
 * @param {string} str - Строка из скобок, которую мы хотим проверить.
 * @return {boolean} true - если скобки расставлены правильно, false - если неправильно.
 */
function testBrackets(str) {
	// Необходимо реализовать тело функции
}

console.log(
    testBrackets('()'),       // true
    testBrackets('(()(()))'), // true
    testBrackets(')('),       // false
    testBrackets('(()()'),    // false
    testBrackets('())(()')    // false
);   

