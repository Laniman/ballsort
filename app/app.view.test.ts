namespace $.$$ {
	$mol_test( {

		"Screen changing"( $ ) {
			const app = new $hype_ballsort_app
			$mol_assert_like( app.sub(), [ app.Start_page() ] )

			app.start()
			$mol_assert_like( app.sub(), [ app.Game_page() ] )

			app.game().balls().forEach( obj => obj.color( 0 ) )
			$mol_assert_like( app.sub(), [ app.Finish_page() ] )
		},

	} )
}
