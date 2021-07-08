import { useState } from 'react';
import { useWS } from './hooks/useWS';
import { Filters, FiltersProps } from './components/Filters/Filters';
import { Cars } from './components/Cars/Cars';
import { makeStyles } from '@material-ui/core';

export const TextClasses = makeStyles((theme) => ({
	text: {
		textAlign: 'center',
		fontSize: 20,
	},
}));

function App(): JSX.Element {
	const classes = TextClasses();
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
			{!isConnect && (
				<p className={classes.text}>
					Устанавливаем соединение с сервером...
				</p>
			)}
			<Cars filters={filters} cars={cars} />
		</div>
	);
}

export default App;
