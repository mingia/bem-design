module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'bem-starter-feed.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'bem-starter-feed.min.js' }],
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
													block: 'feed',
													attrs: { style: 'border: 1px solid var(--color-border); height: 456px; overflow: hidden; width: 320px'},
													mix: { block: 'pt-list', mods: { view: 'ghost' } },
													content: [
														{
															elem: 'item',
															mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm' }}, { block: 'decorator', mods: { 'indent-b': 's' } }],
															content: [
																{
																	elem: 'header',
																	elemMods: { align: 'center' },
																	mix: [
																		{ block: 'pt-list', elem: 'item', elemMods: { 'distribute': 'between' }},
																		{ block: 'decorator', mods: { 'indent-b': 'm' }},
																	],
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-right': 's' },
																					mix: { block: 'pt-avatar' },
																					content: [
																						{
																							block: 'pt-avatar',
																							elem: 'photo',
																							elemMods: { size: 's'},
																							content: {
																								block: 'activities',
																								elem: 'avatar-img',
																								tag: 'img',
																								attrs: { src: '/assets/bem-starter-kit/ava1.png' }
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
																							content: 'Tony Montana'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: '2h ago'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'icon',
																			mods: { more: 'm-link' }
																		}
																	]
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																	content: 'Just visited the best beach for surfing. The waves are awesome.'
																},
																{
																	block: 'image',
																	url: '/assets/bem-starter-kit/feed-photo.png',
																	width: '100%',
																	mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
																},
																{
																	elem: 'action',
																	mix: [
																		{ block: 'pt-list', elem: 'item', elemMods: { distribute: 'between' } },
																		{ block: 'decorator', mods: { 'space-b': 'x,s' }}
																	],
																	content: [
																		{
																			block: 'pt-list',
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'link', size: 's', display: 'inline-block' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'm' }},
																					content: 'Add comment'
																				},
																				{
																					block: 'text',
																					mods: { view: 'link', size: 's', display: 'inline-block' },
																					content: 'Share'
																				}
																			]
																		},
																		{
																			block: 'pt-list',
																			elem: 'item',
																			content: {
																				block: 'text',
																				mods: { view: 'link', size: 's', display: 'inline-block' },
																				content: 'Like'
																			}
																		}
																	]
																}
															]
														},

														{
															elem: 'item',
															mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm' }}, { block: 'decorator', mods: { 'indent-b': 's' } }],
															content: [
																{
																	elem: 'header',
																	elemMods: { align: 'center' },
																	mix: [
																		{ block: 'pt-list', elem: 'item', elemMods: { 'distribute': 'between' }},
																		{ block: 'decorator', mods: { 'indent-b': 'm' }},
																	],
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-right': 's' },
																					mix: { block: 'pt-avatar' },
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
																							content: 'Tony Montana'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: '2h ago'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'icon',
																			mods: { more: 'm-link' }
																		}
																	]
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																	content: 'How does he do it? 😵😵😵'
																},
																{
																	elem: 'item',
																	mix: [{ block: 'pt-list', elem: 'item', elemMods: { border: 'top', 'space-t': 's' }}, { block: 'decorator', mods: { 'indent-b': 's' } }],
																	content: [
																		{
																			elem: 'header',
																			elemMods: { align: 'baseline' },
																			mix: [
																				{ block: 'pt-list', elem: 'item', elemMods: { 'distribute': 'between' }},
																				{ block: 'decorator', mods: { 'indent-b': 'm' }},
																			],
																			content: [
																				{
																					block: 'text',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'xs' },
																							content: 'Garry Tornthon'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: '5h ago'
																						}
																					],
																				},
																				{
																					block: 'text',
																					mods: { view: 'secondary', size: 'xs' },
																					content: 'Shared post'
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																			content: 'Just visited the best beach for surfing. The waves are awesome.'
																		},
																		{
																			block: 'image',
																			url: '/assets/bem-starter-kit/feed-photo.png',
																			width: '100%',
																			mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
																		},
																		{
																			elem: 'action',
																			mix: [
																				{ block: 'pt-list', elem: 'item', elemMods: { distribute: 'between' } },
																				{ block: 'decorator', mods: { 'space-b': 'x,s' }}
																			],
																			content: [
																				{
																					block: 'pt-list',
																					elem: 'item',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'link', size: 's', display: 'inline-block' },
																							mix: { block: 'decorator', mods: { 'indent-r': 'm' }},
																							content: 'Add comment'
																						},
																						{
																							block: 'text',
																							mods: { view: 'link', size: 's', display: 'inline-block' },
																							content: 'Share'
																						}
																					]
																				},
																				{
																					block: 'pt-list',
																					elem: 'item',
																					content: {
																						block: 'text',
																						mods: { view: 'link', size: 's', display: 'inline-block' },
																						content: 'Like'
																					}
																				}
																			]
																		}
																	]
																},
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
		}
	]
};
