const convertToCelsius = function(fahrTemp) {
	celsiusTemp = (fahrTemp - 32) * (5/9);
	return parseFloat(celsiusTemp.toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {
	fahrTemp = (celsiusTemp * (9/5) + 32);
	return parseFloat(fahrTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
