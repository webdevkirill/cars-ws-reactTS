import { useWS } from './hooks/useWS';
import { Filters, FiltersProps } from './components/Filters/Filters';
import { useState } from 'react';

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
		</div>
	);
}

export default App;
