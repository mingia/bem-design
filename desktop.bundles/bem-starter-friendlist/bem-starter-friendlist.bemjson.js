module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'bem-starter-friendlist.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'bem-starter-friendlist.min.js' }],
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
													block: 'friendlist',
													attrs: { style: 'border: 1px solid var(--color-border); height: 456px; overflow: hidden; width: 320px'},
													mix: { block: 'pt-list', mods: { view: 'default' } },
													content: [
														{
															elem: 'group',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-h': 's', 'space-v': 's'} },
															content: [
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'pt-avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'pt-avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava1.png' }
																					}
																				},
																				{
																					elem: 'status',
																					elemMods: { view: 'online' }
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary' },
																			content: 'Joe Shoester'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'pt-avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'pt-avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava7.png' }
																					}
																				},
																				{
																					elem: 'status',
																					elemMods: { view: 'online' }
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary' },
																			content: 'Amanda Davis'
																		}
																	]
																},
															]
														},
														{
															elem: 'group',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-h': 's', 'space-v': 's'} },
															content: [
																{
																	elem: 'letter',
																	mix: [
																		{ block: 'text', mods: { view: 'primary', size: 'xl' } },
																		{ block: 'decorator', mods: { 'indent-b': 'xs', 'space-l': 'xs' } }
																	],
																	content: 'A'
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'pt-avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'pt-avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava2.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary' },
																			content: 'Kevin Abrams'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'pt-avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'pt-avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava3.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary' },
																			content: 'Mary Alabama'
																		}
																	]
																},

															]
														},
														{
															elem: 'group',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-h': 's', 'space-v': 's'} },
															content: [
																{
																	elem: 'letter',
																	mix: [
																		{ block: 'text', mods: { view: 'primary', size: 'xl' } },
																		{ block: 'decorator', mods: { 'indent-b': 'xs', 'space-l': 'xs' } }
																	],
																	content: 'B'
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'pt-avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'pt-avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava4.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary' },
																			content: 'Bob Billigan'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'pt-avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'pt-avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava5.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary' },
																			content: 'David Bell'
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'pt-avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'pt-avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava6.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary' },
																			content: 'Brother'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'pt-avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'pt-avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava8.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary' },
																			content: 'Kate Black'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'pt-avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'pt-avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava9.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary' },
																			content: 'Steven Beningthon'
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
						}
					]
				},
				/* /История */
			]
		}
	]
};
