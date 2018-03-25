module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'starter-kit-music.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'starter-kit-music.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default' }
	},
	content: [

		{
			block: 'tpl-layout',
			attrs: {
				'style': 'background-color: var(--color-ghost);'
			},
			mix: { block: 'decorator',mods: { 'space-v': 'xxxxxxl' } },
			content: [
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [

						// -----MUSIC--------
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [

									//PLAYLIST
										{
											elem: 'fraction',
											attrs: {
												'style': 'background-color: var(--color-default);'
											},
											elemMods: { col: '4'},
											content: [
												{
													block: 'play-list',
													mix: { block: 'decorator', mods: { 'space-a': 'l' } },
													content: [
														{
															elem: 'header',
															content: [
																{
																	block: 'pt-icon-plus',
																	mods: { 'vertical-align': 'bottom' },
																	content: [
																		{
																			elem: 'icon',
																			mix: { block: 'playlist-cover', mods: { size: 'big' } },
																			elemMods: { 'indent-right': 'l' },
																			content: {
																				block: 'image',
																				url: '/assets/bem-starter-kit/music-playlist.png',
																				width: 100
																			}
																		},
																		{
																			elem: 'block',
																			content: [
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																					mods: { view: 'primary', size: 'xl', weight: 'bold' },
																					content: "Pitchfork's Best New Music"
																				},
																				{
																					block: 'text',
																					mods: { view: 'link', size: 's', weight: 'semibold', style: 'italic' },
																					content: 'Pitchfork'
																				}
																			]
																		}
																	]
																}
															]
														},

														{
															block: 'text',
															mix: { block: 'decorator', mods: { 'indent-v': 'm' } },
															mods: { view: 'primary', size: 'xs' },
															content: 'Here’s a shining example of an Inspired By playlist based around an album. With Kanye West performing his melancholy, Auto-Tune–heavy 2008 album in full lately, it’s worth taking a look at its influence on Drake, Lorde, the xx, and Raury.'
														},

														{
															elem: 'playlist',
															mix: { block: 'pt-list' },
															content : [

															// TRACK-1
																{
																	elem: 'track',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 'xs' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'bottom' },
																			content: [
																				{
																					elem: 'icon',
																					mix: { block: 'playlist-cover', mods: { size: 'small' } },
																					elemMods: { 'indent-right': 's' },
																					content: {
																						block: 'image',
																						url: '/assets/bem-starter-kit/music-album-cover.png',
																						width: 32
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'London',
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: 'Benjamin Clementine • At Least for Now'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: '4:20'
																		}
																	]
																},

															// TRACK-2
																{
																	elem: 'track',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 'xs' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'bottom' },
																			content: [
																				{
																					elem: 'icon',
																					mix: { block: 'playlist-cover', mods: { size: 'small' } },
																					elemMods: { 'indent-right': 's' },
																					content: {
																						block: 'image',
																						url: '/assets/bem-starter-kit/music-album-cover.png',
																						width: 32
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'London',
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: 'Benjamin Clementine • At Least for Now'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: '4:20'
																		}
																	]
																},

															// TRACK-3
																{
																	elem: 'track',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 'xs' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'bottom' },
																			content: [
																				{
																					elem: 'icon',
																					mix: { block: 'playlist-cover', mods: { size: 'small' } },
																					elemMods: { 'indent-right': 's' },
																					content: {
																						block: 'image',
																						url: '/assets/bem-starter-kit/music-album-cover.png',
																						width: 32
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'London',
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: 'Benjamin Clementine • At Least for Now'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: '4:20'
																		}
																	]
																},

															]
														}
													]
												}
											]
										},

									//ALBUM
										{
											elem: 'fraction',
											attrs: {
												'style': 'background-color: var(--color-default);'
											},
											elemMods: { col: '4'},
											content: [
												{
													block: 'album',
													mix: { block: 'decorator', mods: { 'space-a': 'l' } },
													content: [

														{
															block: 'image',
															mix: [
																{ block: 'decorator', mods: { 'indent-h': 'auto', 'indent-b': 'xs' } },
																{ block: 'playlist-cover', mods: { size: 'big' } }
															],
															url: '/assets/bem-starter-kit/music-album-cover.png',
															width: 100
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'xxl', weight: 'bold', align: 'center' },
															content: 'Damn'
														},
														{
															block: 'text',
															mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
															mods: { view: 'link', size: 's', weight: 'semibold', align: 'center' },
															content: 'Kendrick Lamar'
														},
														{
															block: 'button',
															mix: { block: 'text', mods: { align: 'center' } },
															mods: { theme: 'islands', size: 'm', view: 'action' },
															text: 'SHUFFLE PLAY'
														},
														{
															elem: 'playlist',
															mix: { block: 'pt-list' },
															content : [

															// TRACK-1
																{
																	elem: 'track',
																	mix: [
																		{ block: 'decorator', mods: { 'indent-t': 's' } },
																		{ block: 'pt-list', elem: 'item', elemMods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 'xs' } },
																	],
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'bottom' },
																			content: [
																				{
																					elem: 'icon',
																					mix: { block: 'playlist-cover', mods: { size: 'small' } },
																					elemMods: { 'indent-right': 's' },
																					content: {
																						block: 'image',
																						url: '/assets/bem-starter-kit/music-album-cover.png',
																						width: 32
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'London',
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: 'Benjamin Clementine • At Least for Now'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: '4:20'
																		}
																	]
																},

															// TRACK-2
																{
																	elem: 'track',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 'xs' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'bottom' },
																			content: [
																				{
																					elem: 'icon',
																					mix: { block: 'playlist-cover', mods: { size: 'small' } },
																					elemMods: { 'indent-right': 's' },
																					content: {
																						block: 'image',
																						url: '/assets/bem-starter-kit/music-album-cover.png',
																						width: 32
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'London',
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: 'Benjamin Clementine • At Least for Now'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: '4:20'
																		}
																	]
																},

															// TRACK-3
																{
																	elem: 'track',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 'xs' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'bottom' },
																			content: [
																				{
																					elem: 'icon',
																					mix: { block: 'playlist-cover', mods: { size: 'small' } },
																					elemMods: { 'indent-right': 's' },
																					content: {
																						block: 'image',
																						url: '/assets/bem-starter-kit/music-album-cover.png',
																						width: 32
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'London',
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: 'Benjamin Clementine • At Least for Now'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: '4:20'
																		}
																	]
																},

															]
														}
													]
												}
											]
										},

									//TRACK
										{
											elem: 'fraction',
											attrs: {
												'style': 'background-color: var(--color-ghost);'
											},
											elemMods: { col: '4'},
											content: [
												{
													block: 'track',
													mix: { block: 'pt-card', mods: { view: 'default', shadow: 'cloud' } },
													content: [
														{
															elem: 'about',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl', 'space-t': 'xl' } },
															content: [
																{
																	block: 'image',
																	mix: { block: 'playlist-cover', mods: { size: 'big' } },
																	url: '/assets/bem-starter-kit/music-album-cover.png',
																},
																{
																	block: 'text',
																	mix: { block: 'decorator', mods: { 'indent-t': 'xxl' } },
																	mods: { view: 'primary', size: 'xl', weight: 'bold' },
																	content: 'All Down Hill From Here'
																},
																{
																	block: 'text',
																	mods: { view: 'link', size: 'm' },
																	content: 'Kendrick Lamar • DAMN.'
																},
															]
														},
														{
															elem: 'controls',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl'} },
															content: [
																{
															    block: 'progressbar',
															    mods: { theme: 'islands' },
															    val: 25
																},
																{
																	elem: 'buttons',
																	content: [
																		{
																			block: 'icon',
																			mods: { 'previous': 's-primary' },
																		},
																		{
																			block: 'icon',
																			mods: { 'play': 's-primary' },
																		},
																		{
																			block: 'icon',
																			mods: { 'next': 's-primary' },
																		},
																	]
																}
															]
														}
													]
												}
											]
										},



								// -----INFORMER--------

									//ALERT
										{
											elem: 'fraction',
											attrs: {
												'style': 'background-color: var(--color-default);'
											},
											elemMods: { col: '4'},
											content: [
												{
													block: 'informer',
													mix: { block: 'pt-card' },
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content' },
															content: [
																{
																	elem: 'icon-wrapper',
																	content: {
																		block: 'icon',
																		mods: { 'minus': 'm-inverse' }
																	}
																},
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'xxl', weight: 'bold', align: 'center' },
																	content: 'Error'
																},
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'm', align: 'center' },
																	content: 'Currently payments not available '
																},
																{
																	elem: 'info',
																	content: [

																	]
																}
															]
														},
														{
															elem: 'button',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' } },
															content: {
																block: 'button',
																mods: {
													        theme: 'islands',
													        size: 'xl',
														    },
																text: 'DONE'
															}
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
		}
	]
};
