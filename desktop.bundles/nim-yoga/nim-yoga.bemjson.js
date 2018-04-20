module.exports = {
	block: 'page',
	title: 'NIM Yoga',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'nim-yoga.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'nim-yoga.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default' }
	},
	content: [
		// контент
		{
			block: 'nim-header',
			content: [
				{
					elem: 'logo',
					content: ''
				},
				{
					elem: 'menu-button',
				}
			]
		},
		{
			block: 'nim-heading',
			content: [
				{
					elem: 'cover',
				}
			]
		},
		{
			block: 'nim-intro',
			content: [
				{
					elem: 'title',
					mix: { 
						block: 'text',
						mods: { size: 'xxxxl', weight: 'bold', align: 'center' } 
					},
					content: 'Park Yoga by NYM—'
				},
				{
					elem: 'subtitle',
					mix: {
						block: 'text',
						mods: { size: 'xxl', weight: 'bold', align: 'center' },
					},
					content: 'первая студия йоги на территории Парка Горького. Вас ждет полное расписание занятий (групповые и индивидуальные классы), одежда и аксессуары для занятий от NYM Wear, а также уже знакомые многим напитки и блюда из NYM Café.'
				},
				{
					elem: 'divider'
				},
				{
					elem: 'text',
					mix: {
						block: 'text',
						mods: { size: 'm'},
					},
					content: 'Студия находится на границе между Парком Горького и культурным центром «Гараж». Планируется, что студия будет работать c 08.00 до 23.00 каждый день'
				}
			]
		},
		{
			block: 'nim-teachers',
			content: [
				{
					elem: 'section-title',
					mix: { block: 'text', mods: {size: 'xs', transform: 'uppercase', spacing: 's'} },
					content: 'Преподаватели'
				},
				{
					elem: 'portraits',
					content: [
						{
							elem: 'line',
							content: [
								{
									elem: 'item',
									content: [
										{
											elem: 'photo',
										},
										{
											elem: 'name',
											mix: { block: 'text', mods: {align: 'center', size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
											content: 'Аня Лунегова'
										},
										{
											elem: 'about',
											mix: { block: 'text', mods: {align: 'center', size: 'xs', transform: 'uppercase', spacing: 's'} },
											content: 'Старший преподаватель'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'photo',
										},
										{
											elem: 'name',
											mix: { block: 'text', mods: {align: 'center', size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
											content: 'Аня Щетинина'
										},
										{
											elem: 'about',
											mix: { block: 'text', mods: {align: 'center', size: 'xs', transform: 'uppercase', spacing: 's'} },
											content: 'Старший преподаватель'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'photo',
										},
										{
											elem: 'name',
											mix: { block: 'text', mods: {align: 'center', size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
											content: 'Катя Кушнер'
										},
										{
											elem: 'about',
											mix: { block: 'text', mods: {align: 'center', size: 'xs', transform: 'uppercase', spacing: 's'} },
											content: 'Старший преподаватель'
										}
									]
								}
							]
						},
						{
							elem: 'line',
							content: [
								{
									elem: 'item',
									content: [
										{
											elem: 'photo',
										},
										{
											elem: 'name',
											mix: { block: 'text', mods: {align: 'center', size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
											content: 'Юля Шелковина'
										},
										{
											elem: 'about',
											mix: { block: 'text', mods: {align: 'center', size: 'xs', transform: 'uppercase', spacing: 's'} },
											content: 'Старший преподаватель'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'photo',
										},
										{
											elem: 'name',
											mix: { block: 'text', mods: {align: 'center', size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
											content: 'Алёна Тихонова'
										},
										{
											elem: 'about',
											mix: { block: 'text', mods: {align: 'center', size: 'xs', transform: 'uppercase', spacing: 's'} },
											content: 'Старший преподаватель'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'photo',
										},
										{
											elem: 'name',
											mix: { block: 'text', mods: {align: 'center', size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
											content: 'Елена Кан'
										},
										{
											elem: 'about',
											mix: { block: 'text', mods: {align: 'center', size: 'xs', transform: 'uppercase', spacing: 's'} },
											content: 'Старший преподаватель'
										}
									]
								}
							]
						},
						{
							elem: 'line',
							content: [
								{
									elem: 'item',
									content: [
										{
											elem: 'photo',
										},
										{
											elem: 'name',
											mix: { block: 'text', mods: {align: 'center', size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
											content: 'Илона Белая'
										},
										{
											elem: 'about',
											mix: { block: 'text', mods: {align: 'center', size: 'xs', transform: 'uppercase', spacing: 's'} },
											content: 'Преподаватель'
										}
									]
								},
								{
									elem: 'button',
									mix: { block: 'text', mods: {size: 'm', weight: 'bold', view: 'inverse', transform: 'uppercase', spacing: 's'} },
									content: 'Все преподаватели'
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'photo',
										},
										{
											elem: 'name',
											mix: { block: 'text', mods: {align: 'center', size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
											content: 'Сергей Шаталов'
										},
										{
											elem: 'about',
											mix: { block: 'text', mods: {align: 'center', size: 'xs', transform: 'uppercase', spacing: 's'} },
											content: 'Преподаватель'
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
			block: 'nim-gallery',
			content: [
				{
					elem: 'section-title',
					mix: { block: 'text', mods: {size: 'xs', transform: 'uppercase', spacing: 's'} },
					content: 'Фотографии'
				},
				{
					elem: 'title',
					mix: { 
						block: 'text',
						mods: { size: 'xxxxl', weight: 'bold', align: 'center' } 
					},
					content: 'Урок по йоге смеха'
				},
				{
					elem: 'subtitle',
					mix: {
						block: 'text',
						mods: { size: 'xxl', weight: 'bold', align: 'center' },
					},
					content: 'Преподаватель–Анжу Шахани'
				},
				{
					elem: 'gallery',
					content: [
						{
							elem: 'arrows',
							content: [
								{
									elem: 'arrow-button'
								},
								{
									elem: 'arrow-button'
								}
							]
						},
						{
							elem: 'photos',
							content: [
								{
									elem: '4x-section',
									content: [
										{
											elem: 'photo'
										}
									]
								},
								{
									elem: '4x-section',
									content: [
										{
											elem: '2x-section',
											content: [
												{
													elem: '1x-section',
													content: [
														{
															elem: 'photo'
														}
													]
												},
												{
													elem: '1x-section',
													content: [
														{
															elem: 'photo'
														}
													]
												}
											]
										},
										{
											elem: '2x-section',
											content: [
												{
													elem: 'photo'
												}
											]
										}
									]
								},
								{
									elem: '4x-section',
									content: [
										{
											elem: 'photo'
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
			block: 'nim-schedule',
			content: [
				{
					elem: 'section-title',
					mix: { block: 'text', mods: {size: 'xs', transform: 'uppercase', spacing: 's'} },
					content: 'Расписание'
				},
				{
					elem: 'row',
					content: [
						{
							elem: 'day',
							mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 'm'} },
							content: 'Понедельник'
						}
					]
				},
				{
					elem: 'shedule',	
					mix: { block: 'text', mods: {size: 'xs', weight: 'bold', transform: 'uppercase', spacing: 's'} },
					content: [
						{
							elem: '1-coloumn',
							elemMods: { background: 'light' },
							content: 'Время'
						},
						{
							elem: '2-coloumn',
							content: 'Преподаватель'
						},
						{
							elem: '3-coloumn',
							elemMods: { background: 'light' },
							content: 'Направление'
						},
						{
							elem: '4-coloumn',
							content: 'Уровень'
						}
					]
				},
				{
					elem: 'shedule',
					content: [
						{
							elem: '1-coloumn',
							content: [
								{
									elem: 'icon-time'
								},
								{
									elem: 'time',
									mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 's'} },
									content: '13:00–14:45'
								}
							]
						},
						{
							elem: '2-coloumn',
							elemMods: { background: 'light' },
							mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
							content: 'Сергей Шаталов'
						},
						{
							elem: '3-coloumn',
							mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
							content: 'Дживамукти'
						},
						{
							elem: '4-coloumn',
							elemMods: { background: 'light' },
							mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
							content: 'Средний'
						}
					]
				},
				{
					elem: 'shedule',
					content: [
						{
							elem: '1-coloumn',
							elemMods: { background: 'light' },
							content: [
								{
									elem: 'icon-time'
								},
								{
									elem: 'time',
									mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 's'} },
									content: '16:30–18:15'
								}
							]
						},
						{
							elem: '2-coloumn',
							mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
							content: 'Илона Белая'
						},
						{
							elem: '3-coloumn',
							elemMods: { background: 'light' },
							mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
							content: 'Дживамукти'
						},
						{
							elem: '4-coloumn',
							mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
							content: 'Легкий'
						}
					]
				},
				{
					elem: 'shedule',
					content: [
						{
							elem: '1-coloumn',
							content: [
								{
									elem: 'icon-time'
								},
								{
									elem: 'time',
									mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 's'} },
									content: '19:45–21:30'
								}
							]
						},
						{
							elem: '2-coloumn',
							elemMods: { background: 'light' },
							mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
							content: 'Алена Тихонова'
						},
						{
							elem: '3-coloumn',
							mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
							content: 'Хатха'
						},
						{
							elem: '4-coloumn',
							elemMods: { background: 'light' },
							mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
							content: 'Легкий'
						}
					]
				}
			]
		}		
	// контент
	]
};
