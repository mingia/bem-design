module.exports = {
	block: 'page',
	title: 'BRANDNEW',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'brandnew.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'brandnew.min.js' }],
	mods: { type: 'full-screen', theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default' }
	},
	content: [
		
		{
			block: 'tpl-layout',
			content: [

				/* Start */
				{
					elem: 'section',
					attrs: {
						style: 'padding: 216px 0px;'
					},
					content: [
						{
							elem: 'container',
							elemMods: { size: 'm' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'm', 'row-gap': 'm' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '12' },
											content: [
												{
													block: 'text',
													mods: { view: 'primary', size: 'xxxl', weight: 'bold' },
													attrs: { 'style': 'font-size: 200px;' },
													content: 'Platform'
												}
											]
										}	
									]
								}
							]
						}
					]
				},
				/* Start  */

				/* Tools */
				{
					elem: 'section',
					attrs: {
						style: 'padding: 48px 0px'
					},
					content: [
						{
							elem: 'container',
							elemMods: { size: 'm' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'l', 'row-gap': 'l' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '12'},
											content: [
												{
													block: 'text',
													mods: { size: 'xxxxl', view: 'primary' },
													mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
													content: 'Система'
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tool',
													content: [
														{
															block: 'text',
															mods: { size: 'xxl', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Темы'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Is ready to do any changes meanwhile your template stays untouched as a result of previous hard work.'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Цветовая палитра'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Отступы'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Размеры'
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
												{
													block: 'tool',
													content: [
														{
															block: 'text',
															mods: { size: 'xxl', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Контент'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Is ready to do any changes meanwhile your template stays untouched as a result of previous hard work.'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Типографика'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Векторы'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Иконки'
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
												{
													block: 'tool',
													content: [
														{
															block: 'text',
															mods: { size: 'xxl', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Паттерны'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Is ready to do any changes meanwhile your template stays untouched as a result of previous hard work.'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link', border: 'bottom'  },
																			content: 'Карточки'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Списки'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Формы'
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
												{
													block: 'tool',
													content: [
														{
															block: 'text',
															mods: { size: 'xxl', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Шаблоны'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Is ready to do any changes meanwhile your template stays untouched as a result of previous hard work.'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Обвязка'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Сетка'
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
												{
													block: 'tool',
													content: [
														{
															block: 'text',
															mods: { size: 'xxl', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Документы'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Is ready to do any changes meanwhile your template stays untouched as a result of previous hard work.'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Как рисовать иконки'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Шаблонизация'
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
												{
													block: 'tool',
													content: [
														{
															block: 'text',
															mods: { size: 'xxl', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Материалы'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Is ready to do any changes meanwhile your template stays untouched as a result of previous hard work.'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Карточный Кит'
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
				/* Tools */

				/* Community */
				{
					elem: 'section',
					attrs: {
						style: 'padding: 72px 0px'
					},
					content: [
						{
							elem: 'container',
							elemMods: { size: 'm' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'm', 'row-gap': 'm' },
									content: [
										{
												elem: 'fraction',
												elemMods: { col: '12'},
												content: [
													{
														block: 'text',
														mods: { size: 'xxxxl', view: 'primary' },
														mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
														content: 'Сообщество'
													}
												]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'pt-card',
													mix: { block: 'article' },
													content: [
														{
															elem: 'header',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'm' },
																	content: 'Журнал'
																}
															]
														},
														{
															elem: 'footer',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'xxxl', weight: 'light' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																	content: 'BEM Design'
																},
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'm' },
																	content: 'Is ready to do any changes meanwhile your template stays untouched'
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
													block: 'pt-card',
													mix: { block: 'article' },
													content: [
														{
															elem: 'header',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'm' },
																	content: 'Сообщество'
																}
															]
														},
														{
															elem: 'footer',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'xxxl', weight: 'light' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																	content: 'Telegram'
																},
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'm' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																	content: 'Мы эксперементируем над форматами работы и ищем людей заинтересованных в работе и развитие наших продуктов.'
																},
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'm' },
																	content: 'Мы уверены что сильное комьюните создает мощные продукты'
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
											mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
											content: [
												{
													block: 'pt-card',
													mix: { block: 'article' },
													content: [
														{
															elem: 'header',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'm' },
																	content: 'Интсрументарий'
																}
															]
														},
														{
															elem: 'footer',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'xxxl', weight: 'light' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																	content: 'Instrument'
																},
																{
																	block: 'text',
																	mods: { view: 'inverse', size: 'm' },
																	content: 'О будущем платформы'
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
													block: 'text',
													mods: { size: 'l', view: 'primary' },
													content: 'Is ready to do any changes meanwhile your template stays untouched as a result of previous hard work.'
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '8'},
											content: [
												{
													block: 'pt-list',
													mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
													content: [
														{
															elem: 'item',
															elemMods: { 'space-b': 'l', 'space-t': 'l', 'border': 'bottom' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary' },
																	content: 'БЭМ-одержимость'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l', 'space-t': 'l', 'border': 'bottom'  },
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary' },
																	content: 'Параметрический дизайн'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l', 'space-t': 'l', 'border': 'bottom'  },
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary' },
																	content: 'Дизайн в браузере'
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
				/* Community */

				/* Product */
				{
					elem: 'section',
					attrs: {
						style: 'padding-top: 72px; padding-bottom: 96px;'
					},
					content: [
						{
							elem: 'container',
							elemMods: { size: 'm' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'm', 'row-gap': 'm' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '12'},
											content: [
												{
													block: 'text',
													mods: { size: 'xxxxl', view: 'primary', align: 'center' },
													mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
													content: 'Мероприятия'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'primary', align: 'center' },
													mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
													content: 'Мы проводим серии лекций на разработчиских и дизайн мероприятих тут собраны самые важные из них.'
												},
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '6' },
											content: [
												{
													block: 'event',
													content: [
														{
															block: 'pt-card',
															mix: { block: 'event' },
															content: [
																{
																	elem: 'header',
																	elemMods: { 'space-a': 'xxl' },
																	attrs: {
																		'style': 'text-align: center;'
																	},
																	content: [
																		{
																			block: 'brand-logo',
																			mods: { view: 'yota', size: 'm' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																		},
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 'xxxl', weight: 'light', align: 'center' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: 'Вторник, Май 27е'
																		},
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 'l', weight: 'light', align: 'center' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																			content: 'Ежемесячные встречи по фронтенду в Петербурге. Декларативный дизайн, Юлия Музафарова'
																		}
																	]
																},
																{
																	elem: 'footer',
																	elemMods: { 'space-a': 'xxl' },
																	content: [

																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 'm', align: 'center' },
																			content: '@pitercss_meetup'
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
											elemMods: { col: '6' },
											content: [
												{
													block: 'event',
													content: [
														{
															block: 'pt-card',
															mix: { block: 'event' },
															content: [
																{
																	elem: 'header',
																	elemMods: { 'space-a': 'xxl' },
																	attrs: {
																		'style': 'text-align: center;'
																	},
																	content: [
																		{
																			block: 'brand-logo',
																			mods: { view: 'yota', size: 'm' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																		},
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 'xxxl', weight: 'light', align: 'center' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: 'Веб-стандарты'
																		},
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 'l', weight: 'light', align: 'center' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																			content: 'Выступление на Веб-стандарты, Проектирование на продакшн технологиях Михаил Колосков'
																		}
																	]
																},
																{
																	elem: 'footer',
																	elemMods: { 'space-a': 'xxl' },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 'm', align: 'center' },
																			content: '@webstandards_ru'
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
				/* Product */


				/* Product */
				{
					elem: 'section',
					attrs: {
						style: 'padding-top: 72px; padding-bottom: 216px; text-align: center;'
					},
					content: [
						{
							elem: 'container',
							elemMods: { size: 'm' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'm', 'row-gap': 'm' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '12'},
											content: [
												{
													block: 'text',
													mods: { size: 'xxxxl', view: 'primary', align: 'center' },
													mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
													content: 'Будь в курсе событий'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'primary', align: 'center' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
													content: 'Мы стараемся собирать информацию о развитии продуктов в одном месте и работать над чем-то'
												},
												{
														block: 'button',
														mods: {
																theme: 'islands',
																size: 'xl',
																view: 'action'
														},
														text: 'Телеграм'
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* Product */


				/* Footer */
				{
					elem: 'section',
					mix: { block: 'foot' },
					attrs: {
						style: 'padding: 48px 0px'
					},
					content: [
						{
							elem: 'container',
							elemMods: { size: 'm' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'l', 'row-gap': 'l' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '3'},
											content: [
												{
													block: 'pt-list',
													content: [
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'inverse' },
																	content: 'Цвета системы'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'inverse' },
																	content: 'Отступы'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'inverse' },
																	content: 'Размеры'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '3'},
											content: [
												{
													block: 'pt-list',
													content: [
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'inverse' },
																	content: 'Цвета системы'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'inverse' },
																	content: 'Отступы'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'inverse' },
																	content: 'Размеры'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '3'},
											content: [
												{
													block: 'pt-list',
													content: [
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'inverse' },
																	content: 'Цвета системы'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'inverse' },
																	content: 'Отступы'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'inverse' },
																	content: 'Размеры'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '3'},
											content: [
												{
													block: 'tool',
													content: [
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'l' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'inverse' },
																			content: 'Цвета системы'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'l' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'inverse' },
																			content: 'Отступы'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'l' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'inverse' },
																			content: 'Размеры'
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
											elemMods: { col: '2'},
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'inverse' },
													content: 'BEM'
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '8'},
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'inverse' },
													content: 'Is ready to do any changes meanwhile your template stays untouched as a result of previous hard work.'
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '2'},
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'inverse' },
													content: '2018'
												}
											]
										}
									]
								}
							]
						}
					]
				}
				/* Footer */

			]
		}

	]
};
