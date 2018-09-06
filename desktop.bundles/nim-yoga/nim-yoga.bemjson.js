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
			mix: {block: 'e-accordion', mods: {view: 'default'}},
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
											content: [
												{
									 				block: 'image',
									 				width: 200,
									 				url: '../../../../assets/image/nym/teachers/ania_lunegova.png',
									 			}
											]
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
											content: [
												{
									 				block: 'image',
									 				width: 200,
									 				url: '../../../../assets/image/nym/teachers/ania_schetinina.png',
									 			}
											]
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
											content: [
												{
									 				block: 'image',
									 				width: 200,
									 				url: '../../../../assets/image/nym/teachers/k_kushner.png',
									 			}
											]
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
							mix: {block: 'e-accordion', elem: 'show'},
							content: [
								{
									elem: 'item',
									content: [
										{
											elem: 'photo',
											content: [
												{
									 				block: 'image',
									 				width: 200,
									 				url: '../../../../assets/image/nym/teachers/ulia_shelkovina.png',
									 			}
											]
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
											content: [
												{
									 				block: 'image',
									 				width: 200,
									 				url: '../../../../assets/image/nym/teachers/alena_tihonova.png',
									 			}
											]
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
											content: [
												{
									 				block: 'image',
									 				width: 200,
									 				url: '../../../../assets/image/nym/teachers/elena_kan.png',
									 			}
											]
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
											content: [
												{
									 				block: 'image',
									 				width: 200,
									 				url: '../../../../assets/image/nym/teachers/ilona_belaya.png',
									 			}
											]
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
									elem: 'item',
									content: [
										{
											elem: 'photo',
											content: [
												{
									 				block: 'image',
									 				width: 200,
									 				url: '../../../../assets/image/nym/teachers/irina_burmistrova.png',
									 			}
											]
										},
										{
											elem: 'name',
											mix: { block: 'text', mods: {align: 'center', size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
											content: 'Ирина Бурмистрова'
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
											content: [
												{
									 				block: 'image',
									 				width: 200,
									 				url: '../../../../assets/image/nym/teachers/sergei_shatalov.png',
									 			}
											]
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
						},
						{
							elem: 'line',
							elemMods: {align: 'center'},
							content: [
								{
									elem: 'button',
									mix: [
										{ block: 'e-accordion', elem: 'arrow' },
										{ block: 'text', mods: {size: 'm', weight: 'bold', view: 'inverse', transform: 'uppercase', spacing: 's'} }
									],
									content: 'Все преподаватели'
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
									elem: 'arrow-button',
									content: [
										{
											elem: 'line-topleft',
										},
										{
											elem: 'line-left',
										}
									]
								},
								{
									elem: 'arrow-button',
									content: [
										{
											elem: 'line-topright',
										},
										{
											elem: 'line-right',
										}
									]
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
											elem: 'photo',
											content: [
												{
									 				block: 'image',
									 				width: 310,
									 				url: '../../../../assets/image/nym/gallery/1.png',
									 			}
											]
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
															elem: 'photo',
															content: [
																{
													 				block: 'image',
													 				width: 146,
													 				url: '../../../../assets/image/nym/gallery/2.png',
													 			}
															]
														}
													]
												},
												{
													elem: '1x-section',
													content: [
														{
															elem: 'photo',
															content: [
																{
													 				block: 'image',
													 				width: 146,
													 				url: '../../../../assets/image/nym/gallery/3.png',
													 			}
															]
														}
													]
												}
											]
										},
										{
											elem: '2x-section',
											content: [
												{
													elem: 'photo',
													content: [
														{
											 				block: 'image',
											 				width: 310,
											 				url: '../../../../assets/image/nym/gallery/4.png',
											 			}
													]
												}
											]
										}
									]
								},
								{
									elem: '4x-section',
									content: [
										{
											elem: 'photo',
											content: [
												{
									 				block: 'image',
									 				width: 310,
									 				url: '../../../../assets/image/nym/gallery/5.png',
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
			block: 'nim-schedule',
			content: [
				{
					elem: 'section-title',
					mix: { block: 'text', mods: {size: 'xs', transform: 'uppercase', spacing: 's'} },
					content: 'Расписание'
				},
				{
					elem: 'gap',
					elemMods: {height: '10'},
				},
				{
					elem: 'item',
					mix: {block: 'e-accordion', mods: {view: 'default'}},
					content: [
						{
							elem: 'row',
							mix: [
								{block: 'nim-schedule-hovers', elem: 'row'},
								{block: 'e-accordion'/*, elem: 'short'*/}
							],
							content: [
								{
									elem: 'day',
									mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 'm'} },
									content: 'Понедельник'
								},
								{
									elem: 'arrow',
									mix: {block: 'e-accordion', elem: 'arrow'},
									content: [
										{
											elem: 'circle',
										},
										{
											elem: 'line-topleft',
										},
										{
											elem: 'line-topright',
										}
									]
								},
								{
									elem: 'arrow-hover',
									mix: { block: 'nim-schedule-hovers', elem: 'arrow-hover' },
									content: [
										{
											elem: 'circle',
											elemMods: {color: 'inverse'}
										},
										{
											elem: 'line-topleft',
											elemMods: {color: 'inverse'}
										},
										{
											elem: 'line-topright',
											elemMods: {color: 'inverse'}
										}
									]
								}
							]
						},
						{
							elem: 'schedule',
							mix: { block: 'e-accordion', elem: 'more' },
							content: [
								{
									elem: 'zebra',
									elemMods: {align: 'left'},
									content: [
										{
											elem: 'zebra-item',
											elemMods: {background: 'light'},
										},
										{
											elem: 'zebra-item',
										},
										{
											elem: 'zebra-item',
											elemMods: {background: 'light'},
										},
										{
											elem: 'zebra-item',
										}
										
									]
								},
								{
									elem: 'schedule-table',
									content: [
										{
											elem: 'schedule-row',	
											mix: { block: 'text', mods: {size: 'xs', weight: 'bold', transform: 'uppercase', spacing: 's'} },
											content: [
												{
													elem: 'schedule-cell',
													elemMods: {state: 'head', width: '40', background: 'light'},
													content: 'Время'
												},
												{
													elem: 'schedule-cell',
													elemMods: {state: 'head', width: '20', background: 'dark'},
													content: 'Преподаватель'
												},
												{
													elem: 'schedule-cell',
													elemMods: {state: 'head', width: '20', background: 'light'},
													content: 'Направление'
												},
												{
													elem: 'schedule-cell',
													elemMods: {state: 'head', width: '20', background: 'dark'},
													content: 'Уровень'
												}
											]
										},
										{
											elem: 'schedule-row',
											content: [
												{
													elem: 'schedule-cell',
													elemMods: {width: '40', align: 'center'},
													content: [
														{
															elem: 'icon-time',
															content: [
																{
																	elem: 'time-circle'
																},
																{
																	elem: 'segment-right'
																},
																{
																	elem: 'mask-right'
																}
															]
														},
														{
															elem: 'time',
															mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 's'} },
															content: '13:00–14:45'
														}
													]
												},
												{
													elem: 'schedule-cell',
													elemMods: {width: '20', align: 'center', background: 'light' },
													mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
													content: 'Сергей Шаталов'
												},
												{
													elem: 'schedule-cell',
													elemMods: {width: '20', align: 'center'},
													mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
													content: 'Дживамукти'
												},
												{
													elem: 'schedule-cell',
													elemMods: {width: '20', align: 'center', background: 'light' },
													mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
													content: 'Средний'
												}
											]
										},
										{
											elem: 'schedule-row',
											content: [
												{
													elem: 'schedule-cell',
													elemMods: {width: '40', align: 'center', background: 'light' },
													content: [
														{
															elem: 'icon-time',
															content: [
																{
																	elem: 'time-circle'
																},
																{
																	elem: 'segment-bottom'
																},
																{
																	elem: 'mask-bottom'
																}
															]
														},
														{
															elem: 'time',
															mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 's'} },
															content: '16:30–18:15'
														}
													]
												},
												{
													elem: 'schedule-cell',
													elemMods: {width: '20', align: 'center'},
													mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
													content: 'Илона Белая'
												},
												{
													elem: 'schedule-cell',
													elemMods: {width: '20', align: 'center', background: 'light' },
													mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
													content: 'Дживамукти'
												},
												{
													elem: 'schedule-cell',
													elemMods: {width: '20', align: 'center'},
													mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
													content: 'Легкий'
												}
											]
										},
										{
											elem: 'schedule-row',
											content: [
												{
													elem: 'schedule-cell',
													elemMods: {width: '40', align: 'center'},
													content: [
														{
															elem: 'icon-time',
															content: [
																{
																	elem: 'time-circle'
																},
																{
																	elem: 'segment-left'
																},
																{
																	elem: 'mask-left'
																}
															]
														},
														{
															elem: 'time',
															mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 's'} },
															content: '19:45–21:30'
														}
													]
												},
												{
													elem: 'schedule-cell',
													elemMods: {width: '20', align: 'center', background: 'light' },
													mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
													content: 'Алена Тихонова'
												},
												{
													elem: 'schedule-cell',
													elemMods: {width: '20', align: 'center'},
													mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
													content: 'Хатха'
												},
												{
													elem: 'schedule-cell',
													elemMods: {width: '20', align: 'center', background: 'light' },
													mix: { block: 'text', mods: {size: 'm', weight: 'bold', transform: 'uppercase', spacing: 's'} },
													content: 'Легкий'
												}
											]
										}
									]
								},
								{
									elem: 'zebra',
									elemMods: {align: 'left'},
									content: [
										{
											elem: 'zebra-item',
											elemMods: {background: 'dark'}
										},
										{
											elem: 'zebra-item',
											elemMods: {background: 'light'}
										},
										{
											elem: 'zebra-item',
										},
										{
											elem: 'zebra-item',
											elemMods: {background: 'light'}
										}
										
									]
								}
							]
						}
					]
				},
				{
					elem: 'gap',
					elemMods: {height: '10'},
				},
				{
					elem: 'row',
					mix: { block: 'nim-schedule-hovers', elem: 'row' },
					content: [
						{
							elem: 'day',
							mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 'm'} },
							content: 'Вторник'
						},
						{
							elem: 'arrow',
							content: [
								{
									elem: 'circle',
								},
								{
									elem: 'line-left',
								},
								{
									elem: 'line-right',
								}
							]
						},
						{
							elem: 'arrow-hover',
							mix: { block: 'nim-schedule-hovers', elem: 'arrow-hover' },
							content: [
								{
									elem: 'circle',
									elemMods: {color: 'inverse'}
								},
								{
									elem: 'line-left',
									elemMods: {color: 'inverse'}
								},
								{
									elem: 'line-right',
									elemMods: {color: 'inverse'}
								}
							]
						}
					]
				},
				{
					elem: 'gap',
					elemMods: {height: '10'},
				},
				{
					elem: 'row',
					mix: { block: 'nim-schedule-hovers', elem: 'row' },
					content: [
						{
							elem: 'day',
							mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 'm'} },
							content: 'Среда'
						},
						{
							elem: 'arrow',
							content: [
								{
									elem: 'circle',
								},
								{
									elem: 'line-left',
								},
								{
									elem: 'line-right',
								}
							]
						},
						{
							elem: 'arrow-hover',
							mix: { block: 'nim-schedule-hovers', elem: 'arrow-hover' },
							content: [
								{
									elem: 'circle',
									elemMods: {color: 'inverse'}
								},
								{
									elem: 'line-left',
									elemMods: {color: 'inverse'}
								},
								{
									elem: 'line-right',
									elemMods: {color: 'inverse'}
								}
							]
						}
					]
				},
				{
					elem: 'gap',
					elemMods: {height: '10'},
				},
				{
					elem: 'row',
					mix: { block: 'nim-schedule-hovers', elem: 'row' },
					content: [
						{
							elem: 'day',
							mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 'm'} },
							content: 'Четверг'
						},
						{
							elem: 'arrow',
							content: [
								{
									elem: 'circle',
								},
								{
									elem: 'line-left',
								},
								{
									elem: 'line-right',
								}
							]
						},
						{
							elem: 'arrow-hover',
							mix: { block: 'nim-schedule-hovers', elem: 'arrow-hover' },
							content: [
								{
									elem: 'circle',
									elemMods: {color: 'inverse'}
								},
								{
									elem: 'line-left',
									elemMods: {color: 'inverse'}
								},
								{
									elem: 'line-right',
									elemMods: {color: 'inverse'}
								}
							]
						}
					]
				},
				{
					elem: 'gap',
					elemMods: {height: '10'},
				},
				{
					elem: 'row',
					mix: { block: 'nim-schedule-hovers', elem: 'row' },
					content: [
						{
							elem: 'day',
							mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 'm'} },
							content: 'Пятница'
						},
						{
							elem: 'arrow',
							content: [
								{
									elem: 'circle',
								},
								{
									elem: 'line-left',
								},
								{
									elem: 'line-right',
								}
							]
						},
						{
							elem: 'arrow-hover',
							mix: { block: 'nim-schedule-hovers', elem: 'arrow-hover' },
							content: [
								{
									elem: 'circle',
									elemMods: {color: 'inverse'}
								},
								{
									elem: 'line-left',
									elemMods: {color: 'inverse'}
								},
								{
									elem: 'line-right',
									elemMods: {color: 'inverse'}
								}
							]
						}
					]
				},
				{
					elem: 'gap',
					elemMods: {height: '10'},
				},
				{
					elem: 'row',
					mix: { block: 'nim-schedule-hovers', elem: 'row' },
					content: [
						{
							elem: 'day',
							mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 'm'} },
							content: 'Суббота'
						},
						{
							elem: 'arrow',
							content: [
								{
									elem: 'circle',
								},
								{
									elem: 'line-left',
								},
								{
									elem: 'line-right',
								}
							]
						},
						{
							elem: 'arrow-hover',
							mix: { block: 'nim-schedule-hovers', elem: 'arrow-hover' },
							content: [
								{
									elem: 'circle',
									elemMods: {color: 'inverse'}
								},
								{
									elem: 'line-left',
									elemMods: {color: 'inverse'}
								},
								{
									elem: 'line-right',
									elemMods: {color: 'inverse'}
								}
							]
						}
					]
				},
				{
					elem: 'gap',
					elemMods: {height: '10'},
				},
				{
					elem: 'row',
					mix: { block: 'nim-schedule-hovers', elem: 'row' },
					content: [
						{
							elem: 'day',
							mix: { block: 'text', mods: {size: 'xxxl', weight: 'bold', transform: 'uppercase', spacing: 'm'} },
							content: 'Воскресенье'
						},
						{
							elem: 'arrow',
							content: [
								{
									elem: 'circle',
								},
								{
									elem: 'line-left',
								},
								{
									elem: 'line-right',
								}
							]
						},
						{
							elem: 'arrow-hover',
							mix: { block: 'nim-schedule-hovers', elem: 'arrow-hover' },
							content: [
								{
									elem: 'circle',
									elemMods: {color: 'inverse'}
								},
								{
									elem: 'line-left',
									elemMods: {color: 'inverse'}
								},
								{
									elem: 'line-right',
									elemMods: {color: 'inverse'}
								}
							]
						}
					]
				}
			]
		}		
	// контент
	]
};
