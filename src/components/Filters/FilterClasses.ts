import { makeStyles } from '@material-ui/core';

export const FilterClasses = makeStyles((theme) => ({
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
