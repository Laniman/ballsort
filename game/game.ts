namespace $ {
	export class $hype_ballsort_game extends $mol_object {

		color_count() { return 4 }

		tube_size() { return 4 }

		tube_empty_count() { return 2 }

		tube_count() { return this.color_count() + this.tube_empty_count() }

		ball_count() { return this.tube_size() * this.color_count() }

		@$mol_mem_key
		Ball( index: number ) {
			return new $hype_ballsort_ball
		}

		@$mol_mem
		balls() {
			return Array.from( { length: this.ball_count() }, ( _, index ) => {
				const obj = this.Ball( index )
				obj.color( index % this.tube_size() )
				return obj
			} )
		}

		@$mol_mem_key
		Tube( index: number ) {
			const obj = new $hype_ballsort_tube
			obj.size = () => this.tube_size()
			return obj
		}

		@$mol_mem
		tubes() {
			const balls = $mol_array_shuffle( this.balls() )
			const size = this.tube_size()

			return Array.from( { length: this.tube_count() }, ( _, index ) => {
				const obj = this.Tube( index )
				const list = index < this.color_count() ? balls.slice( index * size, index * size + size ) : []
				obj.balls( list )
				return obj
			} )
		}

		@$mol_mem
		moves( next?: number ) {
			return next ?? 0
		}

		@$mol_mem
		tube_active( next?: $hype_ballsort_tube | null ) {
			if( next?.balls().length === 0 ) return null
			if( next?.complete() ) return null
			return next ?? null
		}

		@$mol_action
		ball_move( to: $hype_ballsort_tube ) {
			const from = this.tube_active()
			if( to === from || !from ) { return this.tube_active( null ) }
			const from_color = from?.balls().at( -1 )?.color()
			const to_color = to.balls().at( -1 )?.color()
			if( to.balls().length && from_color !== to_color ) {
				return
			}

			const ball = from.take()!
			to.put( ball )

			this.moves( this.moves() + 1 )
			this.tube_active( null )

		}

		@$mol_action
		tube_click( tube: $hype_ballsort_tube ) {
			const tube_active = this.tube_active()
			tube_active === null ? this.tube_active( tube ) : this.ball_move( tube )

		}

		@$mol_mem
		finished() {
			return this.tubes().every( tube => tube.complete() || tube.balls().length === 0 )
		}
	}
}
