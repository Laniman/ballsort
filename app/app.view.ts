namespace $.$$ {
	export class $hype_ballsort_app extends $.$hype_ballsort_app {

		@$mol_mem
		game( next?: $hype_ballsort_game | null ) {
			return next ?? null!
		}

		@$mol_action
		start() {
			this.game( new $hype_ballsort_game )
		}

		@$mol_action
		home() {
			this.game( null )
		}

		@$mol_mem
		sub() {
			if( !this.game() ) return [ this.Start_page() ]
			return [ this.game().finished() === false ? this.Game_page() : this.Finish_page() ]
		}

		@$mol_mem
		tubes() {
			return this.game().tubes().map( ( _, index ) => this.Tube( index ) )
		}

		tube( index: number ) {
			return this.game().Tube( index )
		}

		@$mol_action
		tube_click( index: number ) {
			this.game().tube_click( this.tube( index ) )
		}

		@$mol_mem_key
		tube_active( index: number ) {
			return this.game().tube_active() === this.tube( index )
		}

		@$mol_mem
		moves() {
			return super.moves().replace( '{count}', `${ this.game().moves() }` )
		}

	}
}
