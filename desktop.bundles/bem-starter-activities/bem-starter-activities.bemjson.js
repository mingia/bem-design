module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'bem-starter-activities.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'bem-starter-activities.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' },
	},
	content: [
		{
			block: 'tpl-layout',
			mix: { block: 'decorator',mods: { 'space-v': 'xxxxxxl' } },
			content: [

				/* История */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center', size: 'm' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'third', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'activities',
													attrs: { style: 'border: 1px solid var(--color-border); height: 456px; overflow: hidden; width: 320px'},
													mix: { block: 'pt-list', mods: { view: 'default' } },
													content: [
														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-a': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'pt-avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'pt-avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava6.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},

														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-a': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'pt-avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'pt-avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava7.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},

														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-a': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'pt-avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'pt-avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava9.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Jo Han added Annie Star to friends'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},

														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-a': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'pt-avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'pt-avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava6.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},

														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-a': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'pt-avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'pt-avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava4.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Albert Godfrey changed hos status'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},

														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-a': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'pt-avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'pt-avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava4.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Albert Godfrey added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},

														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-a': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'pt-avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'pt-avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava4.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},

														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-a': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'pt-avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'pt-avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava8.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},

														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-a': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'pt-avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'pt-avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava5.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},

														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-a': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'pt-avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'pt-avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava3.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /История */
			]
		}
	]
};
