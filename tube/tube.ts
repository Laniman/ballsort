namespace $ {
	export class $hype_ballsort_tube extends $mol_object {

		size() {
			return 0
		}

		@$mol_mem
		complete() {
			const [ ball, ...balls ] = this.balls()
			return this.balls().length === this.size() && balls.every( obj => obj.color() === ball.color() )
		}

		@$mol_action
		take() {
			const next = this.balls().slice()
			const ball = next.pop()
			this.balls( [ ...next ] )
			return ball
		}

		@$mol_action
		put( obj: $hype_ballsort_ball ) {
			this.balls( [ ...this.balls(), obj ] )
		}

		@$mol_mem
		balls( next?: $hype_ballsort_ball[] ) {

			return next ?? []
		}

	}
}
