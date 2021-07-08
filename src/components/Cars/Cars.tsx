import React from 'react';
import { FiltersProps } from '../Filters/Filters';
import { CarsProps } from '../../hooks/useWS';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { CarsClasses } from './CarsClasses';
import { dateFormat } from '../../utils';
import { colors } from '../Filters/FiltersData';

export const Cars = ({
	filters,
	cars,
}: {
	filters: FiltersProps;
	cars: CarsProps[];
}): JSX.Element => {
	const classes = CarsClasses();

	if (+filters.carsCount > 0) {
		cars = cars.filter((car, idx) => idx < +filters.carsCount);
	}
	if (filters.color !== 'all') {
		cars = cars.filter((car) => car.color === filters.color);
	}
	if (filters.carClass !== 'all') {
		cars = cars.filter((car) => car.carClass === filters.carClass);
	}

	const carEmoji: { [key: string]: string } = {
		car: 'Автомобиль ' + String.fromCodePoint(0x1f697),
		truck: 'Грузовой автомобиль ' + String.fromCodePoint(0x1f69a),
		bus: 'Автобус ' + String.fromCodePoint(0x1f68c),
		motorcycle: 'Мотоцикл ' + String.fromCodePoint(0x1f3cd),
	};

	console.log(cars);

	return (
		<Container fixed>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
			>
				{cars.map(
					({
						deviceId,
						timestamp,
						color,
						carClass,
						plate,
						speed,
					}) => {
						return (
							<Grid
								container
								direction='column'
								justifyContent='flex-start'
								alignItems='flex-start'
								key={deviceId}
								className={`${classes.car} ${classes[color]}`}
							>
								<p className={classes.text}>
									{carEmoji[carClass]}
								</p>
								<p className={classes.text}>
									Цвет {colors[color]}
								</p>
								<p>
									<img
										src={`https://www.car72.ru/nomer/rus/${plate}.png`}
										alt={`Автомобиль ${plate}`}
									/>
								</p>
								<p className={classes.text}>
									Скорость {speed} км/ч
								</p>
								<p className={classes.text}>
									Дата: {dateFormat(timestamp)}
								</p>
							</Grid>
						);
					}
				)}
			</Grid>
		</Container>
	);
};
