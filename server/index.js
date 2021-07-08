const ws = require('ws');
const cars = require('./cars');

function randomCar(min = 0, max = cars.length - 1) {
	let randI = min + Math.random() * (max + 1 - min);
	return cars[Math.floor(randI)];
}

const wss = new ws.Server(
	{
		port: 5000,
	},
	() => {
		console.log('Server start on 5000 port');
		setInterval(() => {
			const car = { ...randomCar() };
			car.deviceId = Date.now().toString();
			car.timestamp = Date.now();
			sendCar(car);
			console.log(JSON.stringify(car));
		}, 5000);
	}
);

function sendCar(car) {
	wss.clients.forEach((client) => {
		client.send(JSON.stringify(car));
	});
}
