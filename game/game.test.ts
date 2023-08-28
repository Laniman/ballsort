namespace $.$$ {
	$mol_test( {

		"Moves initially zero"( $ ) {
			const obj = new $hype_ballsort_game

			$mol_assert_equal( obj.moves(), 0 )
		},

		"tube completing"( $ ) {
			const game = new $hype_ballsort_game
			const tube = game.tubes().find( obj => obj.balls().length > 0 )!
			$mol_assert_not( tube.complete() )

			tube.balls().forEach( ball => ball.color( 0 ) )

			$mol_assert_ok( tube.complete() )
		},

		"completed tube non activation"( $ ) {
			const game = new $hype_ballsort_game
			const tube = game.tubes().find( obj => obj.balls().length > 0 )!

			$mol_assert_not( game.tube_active() )

			tube.balls().map( obj => obj.color( 0 ) )

			game.tube_click( tube )
			$mol_assert_not( game.tube_active() )
		},

		"empty tube not activation"( $ ) {
			const game = new $hype_ballsort_game
			const tube = game.tubes().find( obj => obj.balls().length === 0 )!

			$mol_assert_not( game.tube_active() )

			game.tube_click( tube )
			$mol_assert_not( game.tube_active() )
		},

		'tube activation'() {
			const game = new $hype_ballsort_game
			const tube_filled = game.tubes().find( obj => obj.balls().length > 0 )!
			const tube_empty = game.tubes().find( obj => obj.balls().length === 0 )!

			$mol_assert_not( game.tube_active() )

			game.tube_click( tube_filled )
			$mol_assert_equal( tube_filled, game.tube_active() )

			game.tube_click( tube_empty )
			$mol_assert_not( game.tube_active() )

			game.tube_click( tube_empty )
			$mol_assert_equal( tube_empty, game.tube_active() )
		},

		'ball moving'() {
			const game = new $hype_ballsort_game

			const tube_filled = game.tubes().find( obj => obj.balls().length > 0 )!
			const tube_empty = game.tubes().find( obj => obj.balls().length === 0 )!
			const ball_moving = tube_filled.balls().at( -1 )!

			game.tube_click( tube_filled )
			game.tube_click( tube_empty )

			$mol_assert_equal( tube_filled.balls().length, game.tube_size() - 1 )
			$mol_assert_not( tube_filled.balls().includes( ball_moving ) )

			$mol_assert_equal( tube_empty.balls().length, 1 )
			$mol_assert_ok( tube_empty.balls().includes( ball_moving ) )
		},

		'moves increment'() {
			const game = new $hype_ballsort_game
			const tube_filled = game.tubes().find( obj => obj.balls().length > 0 )!
			const tube_empty = game.tubes().find( obj => obj.balls().length === 0 )!

			game.tube_click( tube_filled )
			game.tube_click( tube_empty )
			$mol_assert_equal( game.moves(), 1 )
		},

		'game finish'() {
			const game = new $hype_ballsort_game

			$mol_assert_not( game.finished() )

			game.balls().forEach( ball => ball.color( 0 ) )
			$mol_assert_ok( game.finished() )
		},
	} )
}
