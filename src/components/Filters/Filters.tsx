import React, { Dispatch, SetStateAction } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Grid } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ClassTypes, ColorsTypes } from '../../hooks/useWS';
import { FilterClasses } from './FilterClasses';
import { counts, colors, cars } from './FiltersData';

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
	const classes = FilterClasses();

	const changeFilterHandler = (name: string, value: string) => {
		setFilters((prevState) => ({ ...prevState, [name]: value }));
	};

	const filterData = [
		{
			id: 'count',
			title: 'Количество',
			items: counts,
			changeName: 'carsCount',
			value: filters.carsCount,
		},
		{
			id: 'color',
			title: 'Цвет',
			items: colors,
			changeName: 'color',
			value: filters.color,
		},
		{
			id: 'carClass',
			title: 'Тип',
			items: cars,
			changeName: 'carClass',
			value: filters.carClass,
		},
	];

	return (
		<div className={classes.root}>
			<p className={classes.title}>Фильтры</p>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
			>
				{filterData.map(({ id, title, items, changeName, value }) => (
					<FormControl key={id} className={classes.formControl}>
						<InputLabel id={id}>{title}</InputLabel>
						<Select
							labelId={id}
							value={value}
							onChange={(event) =>
								changeFilterHandler(
									changeName,
									event.target.value as string
								)
							}
						>
							{Object.keys(items).map((item) => (
								<MenuItem key={item} value={item}>
									{items[item]}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				))}
			</Grid>
		</div>
	);
};
