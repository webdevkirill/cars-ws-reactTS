import { useCallback, useEffect, useRef, useState } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';

interface CarsProps {
	deviceId: string;
	timestamp: number;
	color: 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'silver';
	class: 'car' | 'bus' | 'truck' | 'motorcycle';
	plate: string;
	speed: number;
}

export const useWS = (url: string) => {
	const [isConnect, setIsConnect] = useState(false);
	const initCars: CarsProps[] = [];
	const [cars, setCars] = useState(initCars);
	const socket: any = useRef();

	console.log(cars);

	const connect = useCallback(() => {
		socket.current = new ReconnectingWebSocket(url);
		socket.current.reconnectInterval = 5000;

		socket.current.addEventListener('open', () => {
			console.log('Подключение установлено');
			setIsConnect(true);
		});

		socket.current.addEventListener('message', (event: MessageEvent) => {
			const newCars = JSON.parse(event.data);
			setCars((prevState) => [newCars, ...prevState]);
		});

		socket.current.addEventListener('close', () => {
			console.warn('Соединение закрыто');
		});
	}, [url]);

	useEffect(() => {
		connect();
		return () => {
			socket.current.removeEventListener('open');
			socket.current.removeEventListener('message');
			socket.current.removeEventListener('close');
		};
	}, [connect]);

	return { isConnect, cars };
};
