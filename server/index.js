const ws = require('ws');
const randomCar = require('./randomCar');

const wss = new ws.Server(
	{
		port: 5000,
	},
	() => {
		console.log('Server start on 5000 port');
		setInterval(() => {
			const car = randomCar();
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
