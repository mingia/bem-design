module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'bem-starter-payment.min.css' },
		{ elem: 'css', url: '/assets/bem-starter-kit/decorator/decorator.css'},
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'bem-starter-payment.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' },
	},
	content: [
		{
			block: 'tpl-layout',
			mix: { block: 'decorator',mods: { 'space-v': 'xxxxxxl' } },
			attrs: { style: 'background: rgba(0,30,80,.1)' },
			content: [

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
													block: 'payment',
													mix: { block: 'decorator', mods: { 'space-a': 'xl' } },
													attrs: { style: 'border: 1px solid var(--color-border); height: 456px; overflow: hidden; width: 320px; box-sizing: border-box; background: var(--color-default)'},
													content: [
														{
															elem: 'header',
															mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxxl', weight: 'black' },
																	attrs: { style: 'font-weight: 900' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																	content: 'Rostelecom'
																}
															]
														},

														{
															block: 'pt-form',
															mods: { view: 'default' },
															mix: { block: 'payment', elem: 'form' },
															content: [
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'l' },
																	content: [
																		{
																			block: 'text', mods: { view: 'ghost', size: 's' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																			content: 'Identifacation'
																		},
																		{
																			block: 'input',
																			mods: { theme: 'islands', width: 'available', size: 'xl'},
																			val: '3023281048110009',
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'xl' },
																	content: [
																		{
																			block: 'text', mods: { view: 'ghost', size: 's' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																			content: 'Number'
																		},
																		{
																			block: 'input',
																			mods: { theme: 'islands', width: 'available', size: 'xl'},
																			val: '6-10',
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'xxl' },
																	content: [
																		{
																			block: 'text', mods: { view: 'ghost', size: 's' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																			content: 'Price'
																		},
																		{
																			block: 'input',
																			mods: { theme: 'islands', width: 'available', size: 'xl'},
																			val: 'RUB',
																		}
																	]
																},
																{
																	elem: 'item',
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'xl', view: 'action' },
																		text: 'Facebook',
																	},
																},
															]
														},
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
													mix: { block: 'pt-list', mods: { 'view': 'ghost' } },
													attrs: { style: 'width: 320px; box-sizing: border-box'},
													content: [
														{
															elem: 'header',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'xl', 'indent-b': 's' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxxl', weight: 'black' },
																	attrs: { style: 'font-weight: 900' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'Rostelecom'
																},
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'decorator',
																			mods: { 'indent-r': 'l'},
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 's', weight: 'bold' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																					content: 'Information'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 's' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																					content: 'To correct the previous steps, you can click edit'
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'link', size: 's' },
																			content: 'Edit'
																		}
																	]
																}
															]
														},

														{
															block: 'pt-list',
															elem: 'item',
															elemMods: { 'space-a': 'xl', 'indent-b': 's' },
															mix: { block: 'payment', elem: 'item' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', weight: 'black', size: 'xl' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'm'}},
																	content: 'Payment method'
																},
																{
																	block: 'paychoose',
																	mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																	content: [
																		{
																			elem: 'item',
																			content: [
																				{
																					elem: 'item-header',
																					content: [
																						{
																							elem: 'name',
																							content: [
																								{
																									elem: 'radio',
																									elemMods: { view: 'default' }
																								},
																								{
																									block: 'text',
																									mods: { view: 'link', size: 's', weight: 'bold' },
																									content: 'Bank Card'
																								},
																							]
																						},
																						{
																							block: 'image',
																							mix: { block: 'paychoose', elem: 'logo' },
																							url: '/assets/bem-starter-kit/mastercard_inverse.svg',
																							width: 30
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					elem: 'item-header',
																					content: [
																						{
																							elem: 'name',
																							content: [
																								{
																									elem: 'radio',
																									elemMods: { view: 'default' }
																								},
																								{
																									block: 'text',
																									mods: { view: 'link', size: 's', weight: 'bold' },
																									content: 'Yandex Money'
																								},
																							]
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's' },
																							content: '$2 345'
																						}
																					]
																				}
																			]
																		},
																	]
																},

																{
																	block: 'text',
																	mods: { view: 'primary', weight: 'bold', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																	content: 'About'
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'To the next time to pay it was more convenient, we will open a purse for you in Yandex. We can also tie a card.'
																}
															]
														},


														{
															block: 'pt-list',
															elem: 'item',
															elemMods: { 'space-a': 'xl', 'indent-b': 's' },
															mix: { block: 'payment', elem: 'item' },
															content: [
																{
																	block: 'button',
																	mods: { theme: 'islands', size: 'xl', view: 'action', width: 'full' },
																	content: 'Pay $120'
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
													block: 'payment',
													mix: { block: 'pt-list', mods: { 'view': 'ghost' } },
													attrs: { style: 'width: 320px; box-sizing: border-box'},
													content: [
														{
															elem: 'header',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'xl', 'indent-b': 's' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxxl', weight: 'black' },
																	attrs: { style: 'font-weight: 900' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'Rostelecom'
																},
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'decorator',
																			mods: { 'indent-r': 'l'},
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 's', weight: 'bold' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																					content: 'Information'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 's' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																					content: 'To correct the previous steps, you can click edit'
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'link', size: 's' },
																			content: 'Edit'
																		}
																	]
																}
															]
														},

														{
															block: 'pt-list',
															elem: 'item',
															elemMods: { 'space-a': 'xl', 'indent-b': 's' },
															mix: { block: 'payment', elem: 'item' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', weight: 'black', size: 'xl' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'm'}},
																	content: 'Payment method'
																},
																{
																	block: 'paychoose',
																	mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																	content: [
																		{
																			elem: 'item',
																			content: [
																				{
																					elem: 'item-header',
																					content: [
																						{
																							elem: 'name',
																							content: [
																								{
																									elem: 'radio',
																									elemMods: { view: 'default' }
																								},
																								{
																									block: 'text',
																									mods: { view: 'link', size: 's', weight: 'bold' },
																									content: 'Bank Card'
																								},
																							]
																						},
																						{
																							block: 'image',
																							mix: { block: 'paychoose', elem: 'logo' },
																							url: '/assets/bem-starter-kit/mastercard_inverse.svg',
																							width: 30
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { view: 'brand' },
																			content: [
																				{
																					elem: 'item-header',
																					content: [
																						{
																							elem: 'name',
																							content: [
																								{
																									elem: 'radio',
																									elemMods: { view: 'checked' }
																								},
																								{
																									block: 'text',
																									mods: { view: 'inverse', size: 's', weight: 'bold' },
																									content: 'Yandex Money'
																								},
																							]
																						},
																						{
																							block: 'text',
																							mods: { view: 'inverse', size: 's' },
																							content: '$2 345'
																						}
																					]
																				},
																				{
																					elem: 'content',
																					content: [
																						{
																							block: 'paychoose', elem: 'user',
																							mix: { block: 'decorator', mods: { 'indent-b': 'xxs'} },
																							content: [
																								{
																									block: 'pt-avatar',
																									mix: [
																										{ block: 'paychoose', elem: 'avatar' },
																										{ block: 'decorator', mods: { 'indent-b': 's'}}
																									],
																									content: {
																										elem: 'photo',
																										elemMods: { size: 's'}
																									}
																								},
																								{
																									block: 'text',
																									mods: { view: 'inverse', size: 's', weight: 'bold'},
																									content: 'Luke Appleyard'
																								},
																								{
																									block: 'text',
																									mods: { view: 'inverse', size: 'xs', weight: 'light'},
																									content: 'Selected'
																								}
																							]
																						},
																						{
																							block: 'text',
																							mods: { view: 'inverse', size: 's', weight: 'light', align: 'right'},
																							content: 'Edit'
																						}

																					]
																				}
																			]
																		},
																	]
																},

																{
																	block: 'text',
																	mods: { view: 'primary', weight: 'bold', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																	content: 'About'
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'To the next time to pay it was more convenient, we will open a purse for you in Yandex. We can also tie a card.'
																}
															]
														},


														{
															block: 'pt-list',
															elem: 'item',
															elemMods: { 'space-a': 'xl', 'indent-b': 's' },
															mix: { block: 'payment', elem: 'item' },
															content: [
																{
																	block: 'button',
																	mods: { theme: 'islands', size: 'xl', view: 'action', width: 'full' },
																	content: 'Pay $120'
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
													block: 'payment',
													mix: { block: 'pt-list', mods: { 'view': 'ghost' } },
													attrs: { style: 'width: 320px; box-sizing: border-box'},
													content: [
														{
															elem: 'header',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'xl', 'indent-b': 's' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxxl', weight: 'black' },
																	attrs: { style: 'font-weight: 900' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'Rostelecom'
																},
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'decorator',
																			mods: { 'indent-r': 'l'},
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 's', weight: 'bold' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																					content: 'Information'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 's' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																					content: 'To correct the previous steps, you can click edit'
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'link', size: 's' },
																			content: 'Edit'
																		}
																	]
																}
															]
														},

														{
															block: 'pt-list',
															elem: 'item',
															elemMods: { 'space-a': 'xl', 'indent-b': 's' },
															mix: { block: 'payment', elem: 'item' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', weight: 'black', size: 'xl' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'm'}},
																	content: 'Payment method'
																},
																{
																	block: 'paychoose',
																	mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'paychoose',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: [
																				{
																					elem: 'item',
																					elemMods: { view: 'brand' },
																					content: [
																						{
																							elem: 'item-header',
																							content: [
																								{
																									elem: 'name',
																									content: [
																										{
																											elem: 'radio',
																											elemMods: { view: 'checked' }
																										},
																										{
																											block: 'text',
																											mods: { view: 'inverse', size: 's', weight: 'bold' },
																											content: 'Bank Card'
																										},
																									]
																								},
																								{
																									block: 'image',
																									mix: { block: 'paychoose', elem: 'logo' },
																									url: '/assets/bem-starter-kit/mastercard.svg',
																									width: 30
																								}
																							]
																						},
																						{
																							elem: 'content',
																							content: [
																								{
																									block: 'input',
																									mods: { theme: 'islands', width: 'available', size: 'xl'},
																									mix: { block: 'decorator', mods: { 'indent-v': 'l'}},
																									placeholder: 'Card number',
																								},
																								{
																									elem: 'card-info',
																									mix: { block: 'decorator', mods: { 'indent-b': 's'}},
																									content: [
																										{
																											block: 'input',
																											mods: { theme: 'islands', size: 'xl'},
																											mix: { block: 'decorator', mods: { 'indent-r': 's'}},
																											placeholder: 'MM',
																										},
																										{
																											block: 'text',
																											mods: { view: 'inverse', size: 'm' },
																											mix: { block: 'decorator', mods: { 'indent-r': 's'}},
																											content: '/'
																										},
																										{
																											block: 'input',
																											mods: { theme: 'islands', size: 'xl'},
																											mix: { block: 'decorator', mods: { 'indent-r': 's'}},
																											placeholder: 'YR',
																										},
																										{
																											block: 'input',
																											mods: { theme: 'islands', size: 'xl'},
																											attrs: { style: 'align-self: flex-end'},
																											placeholder: 'CVV',
																										},
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					content: [
																						{
																							elem: 'item-header',
																							content: [
																								{
																									elem: 'name',
																									content: [
																										{
																											elem: 'radio',
																											elemMods: { view: 'default' }
																										},
																										{
																											block: 'text',
																											mods: { view: 'link', size: 's', weight: 'bold' },
																											content: 'Yandex Money'
																										},
																									]
																								},
																								{
																									block: 'text',
																									mods: { view: 'primary', size: 's' },
																									content: '$2 345'
																								}
																							]
																						}
																					]
																				},
																			]
																		},
																	]
																},

																{
																	block: 'text',
																	mods: { view: 'primary', weight: 'bold', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																	content: 'About'
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'To the next time to pay it was more convenient, we will open a purse for you in Yandex. We can also tie a card.'
																}
															]
														},


														{
															block: 'pt-list',
															elem: 'item',
															elemMods: { 'space-a': 'xl', 'indent-b': 's' },
															mix: { block: 'payment', elem: 'item' },
															content: [
																{
																	block: 'button',
																	mods: { theme: 'islands', size: 'xl', view: 'action', width: 'full' },
																	content: 'Pay $120'
																}
															]
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
};
