module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'bem-starter-misha.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'bem-starter-misha.min.js' }],
	mods: { theme: 'islands' },
		attrs: {
			'style': 'background: var(--color-ghost);' 
		},
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default' },
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
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'history',
													mix: { block: 'pt-list', mods: { view: 'default' } },
													content: [
														{
															elem: 'header',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l', 'space-v': 'l' } },
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary', weight: 'bold' },
																	content: 'History'
																}
															]
														},
														{
															elem: 'content',
															content: [
																{
																	elem: 'section',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'xl' } },
																	content: [
																		{
																			elem: 'subtitle',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l', 'space-v': 'xs' } },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 's', view: 'secondary', transform: 'uppercase' },
																					content: 'Today'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { size: 'm' } },
																							content: 'Tele2'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', align: 'right' },
																					content: '- 500 ₽'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							mix: { block: 'brand-logo', mods: { view: 'mts', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { size: 'm' } },
																							content: 'МТС'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', align: 'right' },
																					content: '- 420 ₽'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							mix: { block: 'brand-logo', mods: { view: 'itunes', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { size: 'm' } },
																							content: 'iTunes'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', align: 'right' },
																					content: '- 2 000 ₽'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'section',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'xl' } },
																	content: [
																		{
																			elem: 'subtitle',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l', 'space-v': 'xs' } },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 's', view: 'secondary', transform: 'uppercase' },
																					content: 'Yesterday'
																				}
																			]
																		},
																		// {
																		// 	elem: 'item',
																		// 	mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between', 'vertical-align': 'center' } },
																		// 	content: [
																		// 		{
																		// 			block: 'pt-icon-plus',
																		// 			mods: { 'vertical-align': 'center' },
																		// 			mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																		// 			content: [
																		// 				{
																		// 					elem: 'icon',
																		// 					elemMods: { 'indent-right': 's' },
																		// 					content: [
																		// 						{
																		// 							block: 'pt-avatar',
																		// 							content: [
																		// 								{
																		// 									elem: 'photo',
																		// 									elemMods: { size: 's' }
																		// 								}
																		// 							]
																		// 						}
																		// 					]
																		// 				},
																		// 				{
																		// 					elem: 'block',
																		// 					mix: { block: 'text', mods: { size: 'm' } },
																		// 					content: 'Одноклассники'
																		// 				}
																		// 			]
																		// 		},
																		// 		{
																		// 			block: 'text',
																		// 			mods: { size: 'm', view: 'success', align: 'right' },
																		// 			content: '+ 1 000 ₽'
																		// 		}
																		// 	]
																		// },
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							mix: { block: 'brand-logo', mods: { view: 'ok', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { size: 'm' } },
																							content: 'Одноклассники'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'success', align: 'right' },
																					content: '+ 1 000 ₽'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { size: 'm' } },
																							content: 'Yota'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', align: 'right' },
																					content: '- 360 ₽'
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
						}
					]
				},
				/* /История */

				/* Платежи */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'payment',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.payment (card)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'payment',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.payment (customer information)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'payment',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.payment (shipping method)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'payment',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.payment (payment method)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: 'pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'payment',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.payment (success)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'payment',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.payment (fail)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
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
				/* /Платежи */

				/* Витрина */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'vitrina',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.витрина (default)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'vitrina',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.витрина (more)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
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
				/* /Витрина */

				/* Медиа */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'media',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.media'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'product',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.product'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.card'
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
				/* /Медиа */

				/* Музыка */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'play-list',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.play-list'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-table'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'album',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.album'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'song',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.song'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-card'
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
				/* /Музыка */

				/* Друзья */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'friendlist',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.friendlist'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'activities',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.activities'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
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
				/* /Друзья */

				/* Событие */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'meetup',
													mix: { block: 'pt-list', mods: { 'view': 'ghost' } },
													content: [
														{
															elem: 'photo',
															content: [
																{
																	block: 'image',
																	url: '../../../../assets/bem-starter-kit/subzero-cover.png',
																}
															]
														},
														{
															elem: 'description',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'name',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'xxs', distribute: 'between' } },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 'xl', weight: 'bold' },
																			content: 'Subzero'
																		},
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 'xl', weight: 'bold' },
																			content: '4.5'
																		}
																	]
																},
																{
																	elem: 'rating',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm', distribute: 'between' } },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 'l', weight: 'light' },
																			content: 'Cafe'
																		},
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 'l', weight: 'light' },
																			content: '324 reviews'
																		}
																	]
																},
																{
																	elem: 'action',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm', distribute: 'between' } },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 's' },
																			content: 'Get directions'
																		},
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 's' },
																			content: 'Call'
																		}
																	]
																}
															]
														},
														{
															elem: 'feedback',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l', 'indent-b': 'xs' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's', weight: 'bold' },
																	content: 'Broun Andvild'
																},
																{
																	block: 'text',
																	mods: { view: 'ghost', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: '5h ago'
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	content: 'Just visited the best beach for surfing. The waves are awesome.'
																}
															]
														},
														{
															elem: 'info',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l', 'indent-b': 's' } },
															content: [
																{
																	elem: 'title',
																	mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xl', weight: 'bold' },
																			content: 'Information'
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-right': 's' },
																					attrs: { 'style': 'padding: var(--space-xs); background-color: #027EFF; background-size: 16px; border-radius: 50%;' },
																					mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																				},
																				{
																					block: 'content',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 'm', weight: 'light', display: 'inline' },
																							content: 'Kaigandori, Naka-ku 23 Japan, Kanaga Prefecture'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-right': 's' },
																					attrs: { 'style': 'padding: var(--space-xs); background-color: #027EFF; background-size: 16px; border-radius: 50%;' },
																					mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																				},
																				{
																					block: 'content',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 'm', weight: 'light', display: 'inline' },
																							content: '81 45-662-1099'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-right': 's' },
																					attrs: { 'style': 'padding: var(--space-xs); background-color: #027EFF; background-size: 16px; border-radius: 50%;' },
																					mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																				},
																				{
																					block: 'content',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 'm', weight: 'light', display: 'inline' },
																							content: 'www.subzero.com'
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
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												/* place */
												{
													block: 'place',
													mix: { block: 'pt-list', mods: { 'view': 'ghost' } },
													content: [
														{
															elem: 'description',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'date',
																	mix: [ { block: 'text', mods: { size: 's', view: 'inverse' } } ],
																	content: '27 may'
																},
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { size: 'm', view: 'inverse', weight: 'bold' } },  { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																	content: 'Event'
																},
																{
																	elem: 'event',
																	mix: [ { block: 'text', mods: { size: 'xxl', view: 'inverse', weight: 'bold' } }, { block: 'decorator', mods: { 'indent-b': 's' } } ],
																	content: '3rd Annual Innate Killer Summit'
																},
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { size: 's', view: 'inverse' } }, { block: 'decorator', mods: { 'indent-b': 'm' } } ],
																	content: 'Gary Tatinashvily Gallery'
																},
																{
																	block: 'pt-avatar',
																	content: [
																		{
																			elem: 'photo',
																			elemMods: { size: 's' }
																		}
																	]
																}
															]
														},
														{
															elem: 'feedback',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l', 'indent-b': 'xs' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's', weight: 'bold' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'Information'
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	content: 'Just visited the best beach for surfing. The waves are awesome.'
																}
															]
														},
														{
															elem: 'info',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-right': 's' },
																					attrs: { 'style': 'padding: var(--space-xs); background-color: #027EFF; background-size: 16px; border-radius: 50%;' },
																					mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																				},
																				{
																					block: 'content',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 'm', weight: 'light', display: 'inline' },
																							content: 'Kaigandori, Naka-ku 23 Japan, Kanaga Prefecture'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-right': 's' },
																					attrs: { 'style': 'padding: var(--space-xs); background-color: #027EFF; background-size: 16px; border-radius: 50%;' },
																					mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																				},
																				{
																					block: 'content',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 'm', weight: 'light', display: 'inline' },
																							content: '81 45-662-1099'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } }, { block: 'decorator', mods: { 'indent-t': 'l' }  }],
																	content: [
																		{
																			block: 'button',
																			mods: { theme: 'islands', size: 'l', view: 'action', width: 'full' },
																			text: 'Choose month plan'
																		}
																	]
																}
															]
														}
													]
												}
												/* place */
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Событие */

				/* Статьи */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'articles',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.articles'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'publication',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.publication'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-card'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'cover',
													mix: { block: 'pt-card', mods: { view: 'ghost' } },
													content: [
														{
															elem: 'header',
															mix: { block: 'pt-card', elem: 'header' },
															content: [
																{
																	block: 'image',
																	url: '../../../../assets/bem-starter-kit/facebook-cover.png',
																}
															]
														},
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'link', size: 'xs', weight: 'bold', transform: 'uppercase' },
																			content: 'Technology'
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 'xs', weight: 'bold', transform: 'uppercase' },
																			content: 'MARCH 20, 2018 6:30 PM'
																		}
																	]
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxl', weight: 'bold' },
																	content: 'This is a slow roll: '
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'l' },
																	content: 'silicon valley insiders think that facebook will never be the same'
																}

															]
														},
														{
															elem: 'action',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	block: 'pt-icon-plus',
																	mods: { 'vertical-align': 'center' },
																	mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																	content: [
																		{
																			elem: 'icon',
																			elemMods: { 'indent-right': 's' },
																			mix: { block: 'brand-logo', mods: { view: 'itunes', size: 'xs' } }
																		},
																		{
																			block: 'content',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'm', weight: 'bold', display: 'inline' },
																					content: 'Hive '
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', weight: 'light', display: 'inline' },
																					content: 'Nick Bilton'
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
						}
					]
				},
				/* /Статьи */

				/* Комментарии */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'answer',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.answer'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-icon-plus'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'comment',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.comment'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-icon-plus'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'comments',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.comments'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
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
				/* /Комментарии */

				/* Информер */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'informer',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.informer (success)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-informer'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'informer',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.informer (warning)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-informer'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'informer',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.informer (alert)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-informer'
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
				/* /Информер */

				/* Коммерческая */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'ecommerce',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.ecommerce (category list)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'ecommerce',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.ecommerce (category)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'ecommerce',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.ecommerce (product)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-card'
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
				/* /Коммерческая */

				/* Авторизация */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'auth',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.auth (sign-in)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'auth',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.auth (sign-up)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'auth',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.auth (forgot)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-card'
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
				/* /Авторизация */

				/* Настройки карты */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'auth',
													mix: { block: 'unit' },
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.auth (sign-in)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
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
				/* /Настройки карты */

				/* Тариф */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tariff',
													mix: { block: 'pt-card' },
													attrs: {
														'style': 'background: #027EFF;'
													},
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { view: 'inverse', size: 'xxl', weight: 'bold', align: 'center' } }, { block: 'decorator', mods: { 'indent-b': 'xxs' } } ],
																	content: 'Standart'
																},
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { view: 'inverse', size: 'm', align: 'center' } }, { block: 'decorator', mods: { 'indent-b': 'xl' } } ],
																	content: 'For large companies'
																},
																{
																	elem: 'sale',
																	mix: [{ block: 'text', mods: { view: 'inverse', size: 'm', align: 'center', weight: 'bold' } }, { block: 'decorator', mods: { 'indent-b': 'l' } }],
																	content: '$89'
																},
																{
																	elem: 'assets',
																	mix: { block: 'decorator', mods: { 'space-h': 'm' } },
																	content: [
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							attrs: { 'style': 'padding: var(--space-xs); background-color: #006CF4; background-size: 16px; border-radius: 50%;' },
																							mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', weight: 'light', view: 'inverse' },
																									content: '50 presentations/month'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							attrs: { 'style': 'padding: var(--space-xs); background-color: #006CF4; background-size: 16px; border-radius: 50%;' },
																							mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', weight: 'light', view: 'inverse' },
																									content: '5 house of free support'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							attrs: { 'style': 'padding: var(--space-xs); background-color: #006CF4; background-size: 16px; border-radius: 50%;' },
																							mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', weight: 'light', view: 'inverse' },
																									content: '10 campaigns/month'
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
														{
															elem: 'footer',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	block: 'button',
																	mods: { theme: 'islands', size: 'l', view: 'action', width: 'full' },
																	text: 'Choose month plan'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tariff',
													attrs: {
														'style': 'background: #fff;'
													},
													mix: { block: 'pt-card' },
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { view: 'primary', size: 'xxl', weight: 'bold', align: 'center' } }, { block: 'decorator', mods: { 'indent-b': 'xxs' } } ],
																	content: 'Standart'
																},
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { view: 'primary', size: 'm', align: 'center' } }, { block: 'decorator', mods: { 'indent-b': 'xl' } } ],
																	content: 'For large companies'
																},
																{
																	elem: 'sale',
																	mix: [{ block: 'text', mods: { view: 'primary', size: 'm', align: 'center', weight: 'bold' } }, { block: 'decorator', mods: { 'indent-b': 'l' } }],
																	content: '$89'
																},
																{
																	elem: 'assets',
																	mix: { block: 'decorator', mods: { 'space-h': 'm' } },
																	content: [
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							attrs: { 'style': 'padding: var(--space-xs); background-color: #006CF4; background-size: 16px; border-radius: 50%;' },
																							mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', weight: 'light', view: 'primary' },
																									content: '50 presentations/month'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							attrs: { 'style': 'padding: var(--space-xs); background-color: #027EFF; background-size: 16px; border-radius: 50%;' },
																							mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', weight: 'light', view: 'primary' },
																									content: '5 house of free support'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							attrs: { 'style': 'padding: var(--space-xs); background-color: #027EFF; background-size: 16px; border-radius: 50%;' },
																							mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', weight: 'light', view: 'primary' },
																									content: '10 campaigns/month'
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
														{
															elem: 'footer',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	block: 'button',
																	mods: { theme: 'islands', size: 'l', view: 'action', width: 'full' },
																	text: 'Choose month plan'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tariff',
													mods: { view: 'image' }, 
													mix: { block: 'pt-card' },
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { view: 'inverse', size: 'xxl', weight: 'bold', align: 'center' } }, { block: 'decorator', mods: { 'indent-b': 'xxs' } } ],
																	content: 'Standart'
																},
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { view: 'inverse', size: 'm', align: 'center' } }, { block: 'decorator', mods: { 'indent-b': 'xl' } } ],
																	content: 'For large companies'
																},
																{
																	elem: 'sale',
																	mix: [{ block: 'text', mods: { view: 'inverse', size: 'm', align: 'center', weight: 'bold' } }, { block: 'decorator', mods: { 'indent-b': 'l' } }],
																	content: '$89'
																},
																{
																	elem: 'assets',
																	mix: { block: 'decorator', mods: { 'space-h': 'm' } },
																	content: [
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							attrs: { 'style': 'padding: var(--space-xs); background-color: #006CF4; background-size: 16px; border-radius: 50%;' },
																							mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', weight: 'light', view: 'inverse' },
																									content: '50 presentations/month'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							attrs: { 'style': 'padding: var(--space-xs); background-color: #006CF4; background-size: 16px; border-radius: 50%;' },
																							mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', weight: 'light', view: 'inverse' },
																									content: '5 house of free support'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-right': 's' },
																							attrs: { 'style': 'padding: var(--space-xs); background-color: #027EFF; background-size: 16px; border-radius: 50%;' },
																							mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', weight: 'light', view: 'inverse' },
																									content: '10 campaigns/month'
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
														{
															elem: 'footer',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	block: 'button',
																	mods: { theme: 'islands', size: 'l', view: 'action', width: 'full' },
																	text: 'Choose month plan'
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
				/* /Тариф */

			]
		}
	]
};
