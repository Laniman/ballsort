declare namespace $ {

	export class $mol_speck extends $mol_view {
		value( ): any
		theme( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		activate( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		key_press( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		status( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			click( next?: ReturnType< $mol_button['activate'] > ): ReturnType< $mol_button['activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['key_press'] > ): ReturnType< $mol_button['key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		gap_before( ): number
		Gap_before( ): $mol_view
		Empty( ): $mol_view
		gap_after( ): number
		Gap_after( ): $mol_view
		rows( ): readonly($mol_view)[]
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window_shift( next?: number ): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	export class $hype_ballsort_ball_view extends $mol_view {
		color_main( ): string
		color_light( ): string
		ball( ): $hype_ballsort_ball
		style( ): ({ 
			'--main-color': ReturnType< $hype_ballsort_ball_view['color_main'] >,
			'--light-color': ReturnType< $hype_ballsort_ball_view['color_light'] >,
		}) 
		colors( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=view.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_hype_ballsort_tube_view_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hype_ballsort_ball_view__ball_hype_ballsort_tube_view_2 = $mol_type_enforce<
		ReturnType< $hype_ballsort_tube_view['ball'] >
		,
		ReturnType< $hype_ballsort_ball_view['ball'] >
	>
	type $mol_list__style_hype_ballsort_tube_view_3 = $mol_type_enforce<
		({ 
			'min-height': string,
		}) 
		,
		ReturnType< $mol_list['style'] >
	>
	type $mol_list__attr_hype_ballsort_tube_view_4 = $mol_type_enforce<
		({ 
			'data-complete': ReturnType< $hype_ballsort_tube_view['complete'] >,
		}) 
		,
		ReturnType< $mol_list['attr'] >
	>
	type $mol_list__rows_hype_ballsort_tube_view_5 = $mol_type_enforce<
		ReturnType< $hype_ballsort_tube_view['balls'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hype_ballsort_tube_view extends $mol_list {
		click( next?: any ): any
		roof( ): any
		Roof( ): $mol_view
		complete( ): boolean
		ball( id: any): $hype_ballsort_ball
		Ball( id: any): $hype_ballsort_ball_view
		balls( ): readonly(any)[]
		Balls( ): $mol_list
		tube( ): $hype_ballsort_tube
		active( ): boolean
		event( ): ({ 
			click( next?: ReturnType< $hype_ballsort_tube_view['click'] > ): ReturnType< $hype_ballsort_tube_view['click'] >,
		}) 
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=view.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_hype_ballsort_app_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hype_ballsort_app_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button__title_hype_ballsort_app_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_button__click_hype_ballsort_app_4 = $mol_type_enforce<
		ReturnType< $hype_ballsort_app['start'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_link__title_hype_ballsort_app_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri_hype_ballsort_app_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__target_hype_ballsort_app_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['target'] >
	>
	type $mol_view__sub_hype_ballsort_app_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_hype_ballsort_app_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button__title_hype_ballsort_app_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_button__click_hype_ballsort_app_11 = $mol_type_enforce<
		ReturnType< $hype_ballsort_app['home'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__title_hype_ballsort_app_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_button__click_hype_ballsort_app_13 = $mol_type_enforce<
		ReturnType< $hype_ballsort_app['start'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_view__sub_hype_ballsort_app_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hype_ballsort_app_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hype_ballsort_tube_view__tube_hype_ballsort_app_16 = $mol_type_enforce<
		ReturnType< $hype_ballsort_app['tube'] >
		,
		ReturnType< $hype_ballsort_tube_view['tube'] >
	>
	type $hype_ballsort_tube_view__click_hype_ballsort_app_17 = $mol_type_enforce<
		ReturnType< $hype_ballsort_app['tube_click'] >
		,
		ReturnType< $hype_ballsort_tube_view['click'] >
	>
	type $hype_ballsort_tube_view__active_hype_ballsort_app_18 = $mol_type_enforce<
		ReturnType< $hype_ballsort_app['tube_active'] >
		,
		ReturnType< $hype_ballsort_tube_view['active'] >
	>
	type $mol_view__sub_hype_ballsort_app_19 = $mol_type_enforce<
		ReturnType< $hype_ballsort_app['tubes'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_hype_ballsort_app_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__dom_name_hype_ballsort_app_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_hype_ballsort_app_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__dom_name_hype_ballsort_app_23 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_hype_ballsort_app_24 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button__title_hype_ballsort_app_25 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_button__click_hype_ballsort_app_26 = $mol_type_enforce<
		ReturnType< $hype_ballsort_app['start'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_list__rows_hype_ballsort_app_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows_hype_ballsort_app_28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__dom_name_hype_ballsort_app_29 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_hype_ballsort_app_30 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hype_ballsort_app extends $mol_view {
		Title_begin( ): $mol_view
		Title_end( ): $mol_view
		start( next?: any ): any
		Start( ): $mol_button
		Sources( ): $mol_link
		Links( ): $mol_view
		Start_page( ): $mol_list
		home( next?: any ): any
		Home( ): $mol_button
		Restart( ): $mol_button
		moves( ): string
		Moves( ): $mol_view
		Control( ): $mol_view
		tube( id: any): $hype_ballsort_tube
		tube_click( id: any, next?: any ): any
		tube_active( id: any): boolean
		Tube( id: any): $hype_ballsort_tube_view
		tubes( ): readonly(any)[]
		Tubes( ): $mol_view
		Game_page( ): $mol_list
		Finish_title( ): $mol_view
		Finish_moves( ): $mol_view
		Finish_home( ): $mol_button
		Finish( ): $mol_list
		Finish_page( ): $mol_list
		game( ): $hype_ballsort_game
		title( ): string
		Title( ): $mol_view
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
export = $;
//# sourceMappingURL=web.d.ts.map
