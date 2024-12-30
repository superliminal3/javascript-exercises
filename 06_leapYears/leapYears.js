const leapYears = function(yearin) {
	if (((yearin % 4 == 0) && !(yearin % 100 == 0)) || (yearin % 400 == 0)) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = leapYears;
