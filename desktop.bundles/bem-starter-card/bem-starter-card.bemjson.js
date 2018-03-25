module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'bem-starter-card.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'bem-starter-card.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default' }
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
													block: 'decorator',
													mods: { 'space-t': 'xl' },
													attrs: { style: 'border: 1px solid var(--color-border); height: 456px; overflow: hidden; width: 320px'},
													content: [
														{
															block: 'text',
															mods: { view: 'primary', size: 'xxl', align: 'center' },
															content: 'Plastic'
														},
														{
															block:'text',
															mods: { view: 'link', size: 'm', align: 'center' },
															mix: { block: 'decorator', mods: { 'indent-b': 'm'}},
															content: 'Card for offline payments'
														},
														{
															block: 'bank-card',
															mods: { view: 'brand' },
															mix: { block: 'decorator', mods: { 'indent-h': 'xl'}},
															content: [
																{
																	elem: 'content',
																	content: [
																		{
																			elem: 'icon',
																			content: {
																				block: 'icon',
																				mods: { paypass: 'm-inverse'}
																			}
																		},
																		{
																			elem: 'number',
																			mix: { block: 'text', mods: { view: 'inverse', size: 'l', align: 'center', spacing: 'm' }},
																			content: '•••• •••• •••• 5106'
																		},
																		{
																			elem: 'footer',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'xs', view: 'inverse'},
																					content: 'Card Information'
																				},
																				{
																					block: 'image',
																					url: '/assets/bem-starter-kit/mastercard.svg',
																					width: 36
																				}
																			]
																		}
																	]
																}
															]
														},

														{
															block: 'dots',
															mix: { block: 'decorator', mods: { 'indent-t': 'm', 'indent-b': 'xl' } },
															content: {
																elem: 'wrapper',
																content: [
																	{ elem: 'item', elemMods: { view: 'active' }},
																	{ elem: 'item', elemMods: { view: 'default' }},
																	{ elem: 'item', elemMods: { view: 'default' }}
																]
															}
														},

														{
															block: 'text',
															mods: { view: 'primary', size: 'xl' },
															mix: { block: 'decorator', mods: { 'indent-l': 'l', 'indent-b': 'xxs'}},
															content: 'Settings'
														},

														{
															block: 'pt-list',
															mods: { view: 'default' },
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-h': 'l', 'space-v': 's'},
																	mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			elem: 'icon',
																			elemMods: { 'indent-right': 's' },
																			attrs: { 'style': 'padding: var(--space-xs); background-color: var(--color-link); background-size: 16px; border-radius: 50%;' },
																			mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																		},
																		{
																			elem: 'block',
																			content: {
																				block: 'text',
																				mods: { view: 'primary', size: 's' },
																				content: 'Code word information'
																			}
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-h': 'l', 'space-v': 's'},
																	mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			elem: 'icon',
																			elemMods: { 'indent-right': 's' },
																			attrs: { 'style': 'padding: var(--space-xs); background-color: var(--color-link); background-size: 16px; border-radius: 50%;' },
																			mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																		},
																		{
																			elem: 'block',
																			content: {
																				block: 'text',
																				mods: { view: 'primary', size: 's' },
																				content: 'Pin code settings'
																			}
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-h': 'l', 'space-v': 's'},
																	mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			elem: 'icon',
																			elemMods: { 'indent-right': 's' },
																			attrs: { 'style': 'padding: var(--space-xs); background-color: var(--color-link); background-size: 16px; border-radius: 50%;' },
																			mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																		},
																		{
																			elem: 'block',
																			content: {
																				block: 'text',
																				mods: { view: 'primary', size: 's' },
																				content: 'Card lock '
																			}
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-h': 'l', 'space-v': 's'},
																	mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			elem: 'icon',
																			elemMods: { 'indent-right': 's' },
																			attrs: { 'style': 'padding: var(--space-xs); background-color: var(--color-link); background-size: 16px; border-radius: 50%;' },
																			mix: { block: 'icon', mods: { 'fave-1': 's-inverse' } }
																		},
																		{
																			elem: 'block',
																			content: {
																				block: 'text',
																				mods: { view: 'primary', size: 's' },
																				content: 'Delete card'
																			}
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
				}
			]
		}
	]
};
