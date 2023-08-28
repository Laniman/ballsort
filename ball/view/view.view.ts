namespace $.$$ {
	export class $hype_ballsort_ball_view extends $.$hype_ballsort_ball_view {

		color_index() {
			return this.ball().color() * 2
		}

		color_main() {
			return this.colors()[ this.color_index() ] ?? 'red'
		}

		color_light() {
			return this.colors()[ this.color_index() + 1 ] ?? 'white'
		}
	}
}
