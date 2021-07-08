import { useWS } from './useWS';

function App() {
	const { isConnect } = useWS('ws://localhost:5000');

	return <div className='app'>Hello</div>;
}

export default App;
