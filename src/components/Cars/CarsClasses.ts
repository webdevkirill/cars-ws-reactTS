import { makeStyles } from '@material-ui/core';

export const CarsClasses = makeStyles((theme) => ({
	root: {
		paddingTop: 30,
	},
	car: {
		border: '1px solid',
		width: 280,
		padding: 10,
		paddingBottom: 2,
		margin: 10,
		borderRadius: 5,
		height: 'auto',
	},
	red: {
		borderColor: 'red',
	},
	black: {
		borderColor: 'black',
	},
	white: {
		borderColor: 'white',
	},
	green: {
		borderColor: 'green',
	},
	blue: {
		borderColor: 'blue',
	},
	yellow: {
		borderColor: 'yellow',
	},
	silver: {
		borderColor: 'silver',
	},
	text: {
		fontSize: '20',
		margin: 0,
		marginBottom: 8,
	},
}));
