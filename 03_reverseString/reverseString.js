const reverseString = function(str) {
	let newstr = "";
	for (let i = str.length; i >= 0; i--) {
		newstr = newstr + (str.charAt(i));
	}
	return newstr;
};

// Do not edit below this line
module.exports = reverseString;
