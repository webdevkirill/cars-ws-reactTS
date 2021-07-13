const carPlates = [
	'A789CC47',
	'C789CC47',
	'B456BB56',
	'H456HH56',
	'E123EE178',
	'K789KK47',
	'B789MM47',
	'O123OO178',
	'P456PP56',
	'C789XX47',
	'T789TT47',
	'A123AA178',
	'K376BA47',
	'T749TM47',
	'E456MK56',
	'K123OX178',
	'T376XA47',
	'A749AP47',
	'B456AT56',
	'A123TX178',
	'E896TC47',
	'B789AP47',
	'E456AO56',
	'P123XE178',
	'X789TA47',
	'X789AT47',
	'B456AC56',
	'A123BC178',
];

const carClasses = ['motorcycle', 'bus', 'truck', 'car'];

const carColors = [
	'black',
	'white',
	'red',
	'green',
	'blue',
	'yellow',
	'silver',
];

function randomInteger(min = 60, max = 130) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function randomCar() {
	return {
		deviceId: '' + Date.now(),
		timestamp: Date.now(),
		color: carColors[randomInteger(0, carColors.length - 1)],
		carClass: carClasses[randomInteger(0, carClasses.length - 1)],
		plate: carPlates[randomInteger(0, carPlates.length - 1)],
		speed: randomInteger(),
	};
}

module.exports = randomCar;
