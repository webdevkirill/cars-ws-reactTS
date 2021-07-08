import { useState } from 'react';
import { useWS } from './hooks/useWS';
import { Filters, FiltersProps } from './components/Filters/Filters';
import { Cars } from './components/Cars/Cars';

function App(): JSX.Element {
	const { isConnect, cars } = useWS('ws://localhost:5000');
	const defaultFulters: FiltersProps = {
		carsCount: '0',
		color: 'all',
		carClass: 'all',
	};
	const [filters, setFilters] = useState(defaultFulters);

	return (
		<div className='app'>
			<Filters filters={filters} setFilters={setFilters} />
			<Cars filters={filters} cars={cars} />
		</div>
	);
}

export default App;
