import { useCallback, useEffect, useRef, useState } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';

export type ColorsTypes =
	| 'black'
	| 'white'
	| 'red'
	| 'green'
	| 'blue'
	| 'yellow'
	| 'silver';
export type ClassTypes = 'car' | 'bus' | 'truck' | 'motorcycle';
export interface CarsProps {
	deviceId: string;
	timestamp: number;
	color: ColorsTypes;
	carClass: ClassTypes;
	plate: string;
	speed: number;
}

export const useWS = (url: string) => {
	const [isConnect, setIsConnect] = useState(false);
	const [cars, setCars] = useState<CarsProps[]>([]);
	const socket: any = useRef();

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
			setIsConnect(false);
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
