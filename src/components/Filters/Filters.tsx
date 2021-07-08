import React, { useState, Dispatch, SetStateAction } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ClassTypes, ColorsTypes } from '../../hooks/useWS';

const useStyles = makeStyles((theme) => ({
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

	return (
		<div>
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
		</div>
	);
};
