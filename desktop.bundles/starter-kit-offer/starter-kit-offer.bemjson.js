module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'starter-kit-offer.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'starter-kit-offer.min.js' }],
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
													block: 'offer',
													mods: { size: 'default' },
													mix: [
														{ block: 'pt-card', mods: { view: 'inverse' } },
													],
													content: [
														{
															elem: 'logo',
															mix : { block: 'pt-card', elem: 'header', elemMods: { align: 'center', 'space-a': 'm' } },
															content: {
																block: 'image',
																url: '/assets/bem-starter-kit/offer-uber-logo.svg',
																width: 120
															}
														},
														{
															elem: 'about-wrapper',
															content: {
																elem: 'about',
																content: [
																	{
																		elem: 'amount',
																		mix : { block: 'pt-card', elem: 'content', elemMods: { align: 'center', 'space-a': 'm' } },
																		content: {
																			block: 'text',
																			mods: { view: 'inverse', size: 'xxxl', weight: 'bold', align: 'center' },
																			content: '500 ₽'
																		}
																	},
																	{
																		elem: 'description',
																		mix : { block: 'pt-card', elem: 'footer', elemMods: { align: 'center', 'space-a': 'l' } },
																		content: {
																			block: 'text',
																			mods: { view: 'inverse' , size: 's', align: 'center' },
																			content: 'На первую поездку'
																		}
																	}
																]
															}
														},
														// {
														// 	elem: 'background',
														// 	mix: { block: 'pt-card', elem: 'image', elemMods: { size: 'cover' } },
														// 	content: {
														// 		block: 'image',
														// 		url: '/assets/bem-starter-kit/offer-uber-bg.jpg',
														// 	}
														// }
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
