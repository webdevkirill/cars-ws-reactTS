import { useWS } from './hooks/useWS';

function App() {
	const { isConnect, cars } = useWS('ws://localhost:5000');

	return <div className='app'>Hello</div>;
}

export default App;
