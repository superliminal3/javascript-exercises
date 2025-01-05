const fibonacci = function(num) {
	if (num < 0) {
		return "OOPS";
	}

	if (num == 1 || num == 2) {
		return 1;
	} else {

	let n1 = 1;
	let n2 = 1;
	let n3 = 0;
	let n4 = 0;
	for (let i = 0; i < (num - 2); i++) {
		n3 = n1 + n2;
		n2 = n1;
		n1 = n3;
	}
	return n3;
	}
};

// Do not edit below this line
module.exports = fibonacci;
