const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce(((acc, val) => acc + val), 0);
};

const multiply = function(array) {
	return array.reduce(((acc,val) => acc * val), 1);
};

const power = function(num1, power) {
	let num2 = num1;
	for (let i = 1; i < power; i++) {
		num2 = num2 * num1;
	}
	return num2;
};

const factorial = function(num) {
	let n = 1;
	for (let i = 1; i <= num; i++) {
		n = n * i;
	}
	return n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
