namespace $.$$ {

	$mol_style_define( $mol_link, {
		color: 'lightgray',
		padding: [ '0.25rem', '1rem' ]
	} )

	$mol_style_define( $mol_button, {
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

	$mol_style_define( $hype_ballsort_app, {
		fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
		color: '#e1e1e1',
		lineHeight: 'normal',

		padding: {
			top: '1rem',
		},

		justify: { content: 'center' },

		background: {
			color: '#101526',
		},

		Title: {
			font: {
				size: '3rem',
				weight: 300,
			}
		},

		Title_begin: {
			textDecoration: 'underline',
		},

		Links: {
			padding: {
				top: '1rem',
			},
			justify: { content: 'center' },
			flex: {
				wrap: 'wrap',
			},
		},

		Start_page: {
			align: { items: 'center' },
		},

		Moves: {
			padding: [ '0.6rem', '0.4rem' ],
			font: {
				size: '1.3rem',
			}
		},

		Tubes: {
			justify: {
				content: 'center',
			}
		},

		Control: {
			justify: {
				content: 'center',
			}
		},

		Tube: {
			margin: '1rem',
		},

		Finish: {
			position: 'fixed',
			bottom: 0,
			top: 0,
			left: 0,
			right: 0,
			background: {
				color: $mol_style_func.rgba( 255, 255, 255, 0.6 ),
			},
			backdropFilter: $mol_style_func.blur( new $mol_style_unit( 6, 'px' ) ),
			alignItems: 'center',
			paddingTop: '5rem',
		},

		Finish_title: {
			color: 'black',
			textShadow: '0 0 2px white',
		},

		Finish_moves: {
			color: 'black',
			textShadow: '0 0 2px white',
			margin: {
				top: '1rem',
			},
		},

		Finish_home: {
			margin: {
				top: '1rem',
			},
		},

	} )

}
