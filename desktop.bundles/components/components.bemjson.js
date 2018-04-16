module.exports = {
	block: 'page',
	title: 'BEM components',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'components.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'components.min.js' }],
	mods: { type: 'full-screen', theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'liquid-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'ibm' }
		},
		{
			block: 'component',
			mods: { liquid: 'default' }
		}
	],
	content: [
		{
			block: 'demo',
			content: [

				{
					block: 'tpl-layout',
					content: [
						{
							elem: 'container',
							elemMods: { size: 'xs', align: 'center' },
							content: [

								/* Дефолтная */
								{
									block: 'controls',
									attrs: {
										'style': 'margin-bottom: 48px'
									},
									content: [
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																view: 'action',
																width: 'available'
															},
															text: 'Купить сейчас!'
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															text: 'Размер m'
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															text: 'Return button',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															icon: {
																block: 'icon',
																mods: {
																	'arrow-left': 's-primary'
																}
															}
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																view: 'pseudo',
																width: 'available'
															},
															text: 'У меня прозрачный фон'
														}
													]
												},
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
													    block: 'select',
													    mods: {
													        mode: 'radio',
													        theme: 'islands',
													        width: 'available',
													        size: 'm'
													    },
													    name: 'select1',
													    val: 2,
													    options: [
													        {
													            val: 1,
													            text: 'Доклад'
													        },
													        {
													            val: 2,
													            text: 'Мастер-класс'
													        },
													        {
													            val: 3,
													            text: 'Круглый стол'
													        }
													    ]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'select',
															mods: {
																	mode: 'radio-check',
																	theme: 'islands',
																	size: 'm',
																	width: 'available',
																	disabled: true
															},
															name: 'select4',
															val: 2,
															text: '—',
															options: [
																	{
																			val: 1,
																			text: 'Доклад'
																	},
																	{
																			val: 2,
																			text: 'Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем'
																	},
																	{
																			val: 3,
																			text: 'Круглый стол'
																	}
															]
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'input',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available',
																'has-clear': true,
															},
															val: 'Привет!'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'input',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available',
																disabled: true
															},
															placeholder: 'Введите имя'
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'textarea',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															placeholder: 'Ваш текст должен быть здесь'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'textarea',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true,
																width: 'available'
															},
															placeholder: 'Ваш текст должен быть здесь'
														}
													]
												}
											]
										},

										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
																checked: true
															},
															name: 'name1',
															val: 'val_1',
															text: 'Конфеты'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
															},
															name: 'name1',
															val: 'val_1',
															text: 'Конфеты'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true
															},
															name: 'name1',
															val: 'val_0',
															text: 'Конфеты закончились'
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
																checked: true
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Использовать BEMHTML'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Использовать BEMHTML'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Использовать BEMHTML'
														}
													]
												}
											]
										}
									]
								}
								/* Дефолтная */

							]
						}
					]
				},
				{
					block: 'tpl-layout',
					attrs: {
						'style': 'background: #0070f0;'
					},
					mix: [
						{
							block: 'theme',
							mods: { color: 'liquid-brand' }
						},
						{
							block: 'component',
							mods: { liquid: 'brand' }
						}
					],
					content: [
						{
							elem: 'container',
							elemMods: { size: 'xs', align: 'center' },
							content: [

								/* Яркая */
								{
									block: 'controls',
									attrs: {
										'style': 'margin-bottom: 48px'
									},
									content: [
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																view: 'action',
																width: 'available'
															},
															text: 'Купить сейчас!'
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															text: 'Размер m'
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															text: 'Return button',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															icon: {
																block: 'icon',
																mods: {
																	'arrow-left': 's-inverse'
																}
															}
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																view: 'pseudo',
																width: 'available'
															},
															text: 'У меня прозрачный фон'
														}
													]
												},
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'select',
															mods: {
																	mode: 'radio',
																	theme: 'islands',
																	width: 'available',
																	size: 'm'
															},
															name: 'select1',
															val: 2,
															options: [
																	{
																			val: 1,
																			text: 'Доклад'
																	},
																	{
																			val: 2,
																			text: 'Мастер-класс'
																	},
																	{
																			val: 3,
																			text: 'Круглый стол'
																	}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'select',
															mods: {
																	mode: 'radio-check',
																	theme: 'islands',
																	size: 'm',
																	width: 'available',
																	disabled: true
															},
															name: 'select4',
															val: 2,
															text: '—',
															options: [
																	{
																			val: 1,
																			text: 'Доклад'
																	},
																	{
																			val: 2,
																			text: 'Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем'
																	},
																	{
																			val: 3,
																			text: 'Круглый стол'
																	}
															]
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'input',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available',
																'has-clear': true,
															},
															val: 'Привет!'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'input',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available',
																disabled: true
															},
															placeholder: 'Введите имя'
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'textarea',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															placeholder: 'Ваш текст должен быть здесь'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'textarea',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true,
																width: 'available'
															},
															placeholder: 'Ваш текст должен быть здесь'
														}
													]
												}
											]
										},

										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
																checked: true
															},
															name: 'name1',
															val: 'val_1',
															text: 'Конфеты'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
															},
															name: 'name1',
															val: 'val_1',
															text: 'Конфеты'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true
															},
															name: 'name1',
															val: 'val_0',
															text: 'Конфеты закончились'
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
																checked: true
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Использовать BEMHTML'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Использовать BEMHTML'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Использовать BEMHTML'
														}
													]
												}
											]
										}
									]
								}
								/* Яркая */
							]
						}
					]
				},
				{
					block: 'tpl-layout',
					attrs: {
						'style': 'background: #1a1a1a;'
					},
					mix: [
						{
							block: 'theme',
							mods: { color: 'liquid-inverse' }
						},
						{
							block: 'component',
							mods: { liquid: 'inverse' }
						}
					],
					content: [
						{
							elem: 'container',
							elemMods: { size: 'xs', align: 'center' },
							content: [

								/* Инверсная */
								{
									block: 'controls',
									attrs: {
										'style': 'margin-bottom: 48px'
									},
									content: [
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																view: 'action',
																width: 'available'
															},
															text: 'Купить сейчас!'
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															text: 'Размер m'
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															text: 'Return button',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															icon: {
																block: 'icon',
																mods: {
																	'arrow-left': 's-inverse'
																}
															}
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																view: 'pseudo',
																width: 'available'
															},
															text: 'У меня прозрачный фон'
														}
													]
												},
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'select',
															mods: {
																	mode: 'radio',
																	theme: 'islands',
																	width: 'available',
																	size: 'm'
															},
															name: 'select1',
															val: 2,
															options: [
																	{
																			val: 1,
																			text: 'Доклад'
																	},
																	{
																			val: 2,
																			text: 'Мастер-класс'
																	},
																	{
																			val: 3,
																			text: 'Круглый стол'
																	}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'select',
															mods: {
																	mode: 'radio-check',
																	theme: 'islands',
																	size: 'm',
																	width: 'available',
																	disabled: true
															},
															name: 'select4',
															val: 2,
															text: '—',
															options: [
																	{
																			val: 1,
																			text: 'Доклад'
																	},
																	{
																			val: 2,
																			text: 'Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем'
																	},
																	{
																			val: 3,
																			text: 'Круглый стол'
																	}
															]
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'input',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available',
																'has-clear': true,
															},
															val: 'Привет!'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'input',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available',
																disabled: true
															},
															placeholder: 'Введите имя'
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'textarea',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															placeholder: 'Ваш текст должен быть здесь'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'textarea',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true,
																width: 'available'
															},
															placeholder: 'Ваш текст должен быть здесь'
														}
													]
												}
											]
										},

										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
																checked: true
															},
															name: 'name1',
															val: 'val_1',
															text: 'Конфеты'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
															},
															name: 'name1',
															val: 'val_1',
															text: 'Конфеты'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true
															},
															name: 'name1',
															val: 'val_0',
															text: 'Конфеты закончились'
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
																checked: true
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Использовать BEMHTML'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Использовать BEMHTML'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Использовать BEMHTML'
														}
													]
												}
											]
										}
									]
								}
								/* Инверсная */

							]
						}
					]
				}

			]
		}
	]
};
