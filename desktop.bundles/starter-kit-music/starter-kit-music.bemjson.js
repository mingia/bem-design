module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'starter-kit-music.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'starter-kit-music.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' },
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

									//ERROR
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'informer',
													mods: { view: 'alert' },
													mix: { block: 'pt-card' },
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
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
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
																	mods: { view: 'inverse', size: 'm', align: 'center' },
																	content: 'Currently payments not available'
																},
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			mods: { view: 'inverse', size: 's', weight: 'bold' },
																			content: 'Information'
																		},
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-right': 'l' },
																					content: {
																						block: 'icon',
																						mods: { 'payment-visa': 'm-inverse' }
																					}
																				},
																				{
																					elem: 'block',
																					content: {
																						block: 'text',
																						mods: { view: 'inverse', mods: 'm' },
																						content: '4276 55•• •••• 5371'
																					}
																				}
																			]
																		}
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
										},

									//ALERT
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'informer',
													mods: { view: 'warn' },
													mix: { block: 'pt-card' },
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'icon-wrapper',
																	content: {
																		block: 'icon',
																		mods: { 'attention': 'm-inverse' }
																	}
																},
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'xxl', weight: 'bold', align: 'center' },
																	content: 'Alert'
																},
																{
																	block: 'text',
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
																	mods: { view: 'inverse', size: 'm', align: 'center' },
																	content: 'Currently payments not available'
																},
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			mods: { view: 'inverse', size: 's', weight: 'bold' },
																			content: 'Transfer to card'
																		},
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-right': 'l' },
																					content: {
																						block: 'icon',
																						mods: { 'payment-visa': 'm-inverse' }
																					}
																				},
																				{
																					elem: 'block',
																					content: {
																						block: 'text',
																						mods: { view: 'inverse', mods: 'm' },
																						content: '4276 55•• •••• 5371'
																					}
																				}
																			]
																		}
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
										},

									//SUCCESS
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'informer',
													mods: { view: 'success' },
													mix: { block: 'pt-card' },
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'icon-wrapper',
																	content: {
																		block: 'icon',
																		mods: { 'check': 'm-inverse' }
																	}
																},
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'xxl', weight: 'bold', align: 'center' },
																	content: 'Success'
																},
																{
																	block: 'text',
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
																	mods: { view: 'inverse', size: 'm', align: 'center' },
																	content: 'Payment completed'
																},
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			mods: { view: 'inverse', size: 's', weight: 'bold' },
																			content: 'Information'
																		},
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 's' },
																			content: 'Just visited the best beach for surfing. The waves are awesome.'
																		}
																	]
																}
															]
														},
														{
															elem: 'button',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' } },
															content: {
																block: 'button',
																mods: { theme: 'islands', view: 'normal', size: 'xl',  },
																text: 'DONE'
															}
														}
													]
												}
											]
										},



								// -----MEDIA--------

									//PUBLICATION
										{
											elem: 'fraction',
											attrs: {
												'style': 'background-color: var(--color-default);'
											},
											elemMods: { col: '4'},
											content: [
												{
													block: 'publication',
													mix: { block: 'decorator', mods: { 'space-h': 'l', 'space-v': 'm' } },
													content: [
														{
															elem: 'header',
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'm', weight: 'black' },
																	content: 'Hive'
																},
																{
																	block: 'text',
																	mods: { view: 'link', size: 'xs', weight: 'bold', transform: 'uppercase' },
																	content: 'Technology'
																}
															]
														},
														{
															block: 'text',
															mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
															mods: { view: 'link', size: 'xxl' },
															content: [
																{
																	block: 'text',
																	mods: { weight: 'black' },
																	content: 'This is a slow roll: '
																},
																'silicon valley insiders think that facebook will never be the same '
															]
														},
														{
															block: 'pt-icon-plus',
															mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
															mods: { 'vertical-align': 'center' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-right': 's' },
																	content: {
																		block: 'pt-avatar',
																		content: {
																			elem: 'photo',
																			elemMods: { size: 's'}
																		}
																	}
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', weight: 'black' },
																			content: 'Luke Appleyard'
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 'xs' },
																			content: '2h ago'
																		}
																	]
																}
															]
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'm' },
															content: 'The scandal, the latest in Facebook’s tortured history with privacy concerns, has eroded the potential for any of the company’s leaders to ever credibly run for public office. And it’s made Zuckerberg’s Chinese dreams a lot more fraught. One tech investor put it more succinctly: “They’re fucked.”',
														},
														{
															elem: 'image',
															mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
															content: [
																{
																	block: 'image',
																	url: '/assets/bem-starter-kit/publication.png'
																},
																{
																	block: 'text',
																	mods: { view: 'secondary', size: 's' },
																	content: 'Mark Zuckerberg at Cortex Innovation Community technology hub in St. Louis.'
																}
															]
														},
														{
															elem: 'article-content',
															mix: { block: 'text', mods: { size: 's' } },
															content: `Late last Friday, Paul Grewal, Facebook’s vice president and deputy general counsel, wrote a seemingly straightforward blog post on the company’s newsroom page indicating that Facebook was suspending the data firm Strategic Communications Laboratory, and its political unit, Cambridge Analytica, for policy violations—in particular, for obtaining user information without corporate approval. It was an egregious breach, but it appeared as though Facebook was handling it responsibly. Rather than fumbling around for an articulate response, as the company had in the wake of revelations that its platform facilitated the dissemination of fake news that influenced Donald Trump’s election, Facebook was trying to get ahead of the bad press, to get “out front,” as they say in the lingua franca of corporate communications. “We are committed to vigorously enforcing our policies to protect people’s information,” Grewal wrote. “We will take whatever steps are required to see that this happens. We will take legal action if necessary to hold them responsible and accountable for any unlawful behavior.”`
														},
														{
															block: 'text',
															mix: { block: 'decorator', mods: { 'indent-v': 'xxl', 'indent-l': 'l' } },
															mods: { view: 'primary', size: 'xl', weight: 'bold', style: 'italic' },
															content: [
																{
																	block: 'text',
																	mods: { weight: 'black' },
																	content: 'We are committed'
																},
																' to vigorously enforcing our policies to protect people’s information'
															]
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 's' },
															content: `As we all now know, of course, Facebook wasn’t offering a bare-chested confessional. Instead, a day later, The New York Times, in partnership with The Guardian, published a blockbuster exposé that accused Cambridge Analytica of exploiting the Facebook data of some 50 million people. Grewal’s note, it appeared, was simply a dastardly attempt to forestall yet another calamitous story about Facebook surrounding the election. “This attempt to appear ‘out front’ is totally disingenuous,” the Times’s Gabriel J.X. Dance, who worked on the initial story, wrote on Twitter.`
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
