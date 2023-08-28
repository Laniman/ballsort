namespace $.$$ {
	export class $hype_ballsort_tube_view extends $.$hype_ballsort_tube_view {

		@$mol_mem
		roof() {
			const index = this.tube().balls().length - 1
			return this.active() ? this.Ball( index ) : null
		}

		@$mol_mem
		balls() {
			const list = this.active() ? this.tube().balls().slice( 0, -1 ) : this.tube().balls()

			return list.map( ( _, index ) => this.Ball( index ) )
		}

		ball( index: number ) {
			return this.tube().balls()[ index ]
		}

		complete() {
			return this.tube().complete()
		}

	}
}
