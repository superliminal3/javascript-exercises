const findTheOldest = function(people) {
	currentTime = new Date().getFullYear();

	people.map((people) => {
		if (!people.yearOfDeath) {
			people.yearOfDeath = currentTime;
		}
		return people.age = people.yearOfDeath - people.yearOfBirth
	});

	people.sort((a, b) => parseFloat(b.age) - parseFloat(a.age));
	return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
