namespace $.$$ {

	$mol_style_define( $hype_ballsort_button, {
		width: 'fit-content',
		backgroundColor: 'white',
		color: 'black',
		padding: [ '0.6rem', '1rem' ],
		fontSize: '1.3rem',
		margin: [ 0, '0.2rem' ],
		border: {
			width: '2px',
			style: 'solid',
			color: 'lightgray',
		},
		cursor: 'pointer',
		position: 'relative',

		':hover': {
			backgroundColor: '#f1f1f1',
		},

		':focus': {
			outline: 'none',
			boxShadow: '0 0 0 4px lightblue',
			borderColor: 'lightblue',
		},
	} )
}
