namespace $.$$ {

	$mol_style_define( $hype_ballsort_tube_view, {

		boxSizing: 'content-box',
		width: 'fit-content',

		Roof: {
			boxSizing: 'content-box',
			height: '3rem',
			alignItems: 'center',
			justifyContent: 'center',
			border: {
				bottom: {
					style: 'solid',
					color: 'lightgray',
				},
			},
		},

		Balls: {
			boxSizing: 'content-box',
			width: '3rem',
			flex: {
				direction: 'column-reverse',
			},
			justifyContent: 'flex-start',
			alignItems: 'center',

			border: {
				width: '2px',
				style: 'solid',
				color: 'lightgray',
			},

			padding: {
				bottom: '0.4rem',
				top: '0.4rem',
			},

			borderRadius: '0 0 2.4rem 2.4rem',

			'@': {
				'data-complete': {
					true: {
						backgroundColor: 'lightgray',
					},
				},
			},
		},
	} )

}
