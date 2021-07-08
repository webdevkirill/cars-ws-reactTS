import React, { useState, Dispatch, SetStateAction } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Grid, makeStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ClassTypes, ColorsTypes } from '../../hooks/useWS';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: 30,
		textAlign: 'center',
	},
	title: {
		fontSize: 24,
		margin: 0,
		marginBottom: 15,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export interface FiltersProps {
	carsCount: '0' | '30' | '50' | '100';
	color: 'all' | ColorsTypes;
	carClass: 'all' | ClassTypes;
}

interface AllFilterProps {
	filters: FiltersProps;
	setFilters: Dispatch<SetStateAction<FiltersProps>>;
}

export const Filters = ({
	filters,
	setFilters,
}: AllFilterProps): JSX.Element => {
	const classes = useStyles();

	const changeFilterHandler = (name: string, value: string) => {
		setFilters((prevState) => ({ ...prevState, [name]: value }));
	};

	const colors: { [key: string]: string } = {
		all: 'Все',
		black: 'Черный',
		white: 'Белый',
		red: 'Красный',
		green: 'Зеленый',
		blue: 'Синий',
		yellow: 'Желтый',
		silver: 'Серебристый',
	};

	const cars: { [key: string]: string } = {
		all: 'Все',
		car: 'Легковая',
		truck: 'Грузовая',
		bus: 'Автобус',
		motorcycle: 'Мотоцикл',
	};

	return (
		<div className={classes.root}>
			<p className={classes.title}>Фильтры</p>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
			>
				<FormControl className={classes.formControl}>
					<InputLabel id='cars-count'>Количество</InputLabel>
					<Select
						labelId='cars-count'
						value={filters.carsCount}
						onChange={(event) =>
							changeFilterHandler(
								'carsCount',
								event.target.value as string
							)
						}
					>
						<MenuItem value={'0'}>Все</MenuItem>
						<MenuItem value={'30'}>30</MenuItem>
						<MenuItem value={'50'}>50</MenuItem>
						<MenuItem value={'100'}>100</MenuItem>
					</Select>
				</FormControl>

				<FormControl className={classes.formControl}>
					<InputLabel id='cars-count'>Цвет</InputLabel>
					<Select
						labelId='cars-count'
						value={filters.color}
						onChange={(event) =>
							changeFilterHandler(
								'color',
								event.target.value as string
							)
						}
					>
						{Object.keys(colors).map((color) => (
							<MenuItem key={color} value={color}>
								{colors[color]}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<FormControl className={classes.formControl}>
					<InputLabel id='cars-count'>Тип</InputLabel>
					<Select
						labelId='cars-count'
						value={filters.carClass}
						onChange={(event) =>
							changeFilterHandler(
								'carClass',
								event.target.value as string
							)
						}
					>
						{Object.keys(cars).map((car) => (
							<MenuItem key={car} value={car}>
								{cars[car]}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
		</div>
	);
};
