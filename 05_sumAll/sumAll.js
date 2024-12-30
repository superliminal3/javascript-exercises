const sumAll = function(a, b) {
	if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
		return "ERROR";
	}
	if (a < b) {
	} else if (a > b) {
		let d = b;
		b = a;
		a = d;
	}
	let c = 0;
	for (let i = a; i <= b; i++) {
		c += i;
	}
	return c;
};

// Do not edit below this line
module.exports = sumAll;
