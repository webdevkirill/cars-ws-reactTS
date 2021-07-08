import { useCallback, useEffect, useRef, useState } from 'react';

export const useWS = (url) => {
	const [isConnect, setIsConnect] = useState(false);
	const [cars, setCars] = useState([]);
	const socket = useRef();

	console.log(cars);

	const connect = useCallback(() => {
		socket.current = new WebSocket(url);

		socket.current.addEventListener('open', () => {
			setIsConnect(true);
		});

		socket.current.addEventListener('message', (event) => {
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
