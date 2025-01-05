const isAValidChar = function (c) {
	if (((c.toLowerCase() != c.toUpperCase()) || !(isNaN(c))) && c != " ") {
		return true;
	} else {
		return false;
	}

}

const palindromes = function (string) {
	let stringArrFiltered = string.split("").filter(isAValidChar); 
	let middlePoint = (stringArrFiltered.length / 2).toFixed(0);

	if (stringArrFiltered.length % 2 != 0) {
		middlePoint--;
		stringArrFiltered.splice((middlePoint), 1);
	}

	half1 = stringArrFiltered.slice(0, middlePoint).reverse().join().toLowerCase();
	half2 = stringArrFiltered.slice(middlePoint, (stringArrFiltered.length + 1)).join().toLowerCase();

	if (half1.includes(half2)) {
		return true;
	} else {
		return false;
	}



};

// Do not edit below this line
module.exports = palindromes;
