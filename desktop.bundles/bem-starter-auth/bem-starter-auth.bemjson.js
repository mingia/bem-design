module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'bem-starter-auth.min.css' },
		{ elem: 'css', url: '/assets/bem-starter-kit/decorator/decorator.css'},
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'bem-starter-auth.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' },
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
													block: 'auth',
													mix: { block: 'decorator', mods: { 'space-a': 'l' } },
													attrs: { style: 'border: 1px solid var(--color-border); height: 456px; overflow: hidden; width: 320px; box-sizing: border-box;'},
													content: [
														{
															elem: 'header',
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxxxl', weight: 'black' },
																	attrs: { style: 'font-weight: 900' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																	content: 'Log in'
																},
																{
																	block: 'text',
																	mods: { view: 'ghost', size: 's' },
																	content: 'Welcome Back, Andrey Kopeyka'
																}
															]
														},

														{
															block: 'pt-form',
															mods: { view: 'default' },
															mix: { block: 'auth', elem: 'form' },
															content: [
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'l' },
																	content: {
																		block: 'input',
																		mods: { theme: 'islands', width: 'available', size: 'xl'},
																		placeholder: 'Username',
																	},
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'xl' },
																	content: {
																		block: 'input',
																		mods: { theme: 'islands', width: 'available', size: 'xl'},
																		placeholder: 'Password',
																	},
																},

																{
																	elem: 'item',
																	elemMods: { 'indent-b': 's' },
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', view: 'action' },
																		text: 'Sign in',
																	},
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'm' },
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', view: 'action' },
																		text: 'Facebook',
																	},
																},
																{
																	elem: 'item',
																	content: {
																		block: 'text', mods: { view: 'link', size: 's', align: 'center' },
																		content: 'Signup'
																	}
																}
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
													block: 'auth',
													mix: { block: 'decorator', mods: { 'space-a': 'l' } },
													attrs: { style: 'border: 1px solid var(--color-border); height: 456px; overflow: hidden; width: 320px; box-sizing: border-box;'},
													content: [
														{
															elem: 'header',
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxxxl', weight: 'black' },
																	attrs: { style: 'font-weight: 900' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																	content: 'Sign in'
																},
																{
																	block: 'text',
																	mods: { view: 'ghost', size: 's' },
																	content: 'Welcome Back, Andrey Kopeyka'
																}
															]
														},

														{
															block: 'pt-form',
															mods: { view: 'default' },
															mix: { block: 'auth', elem: 'form' },
															content: [
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'l' },
																	content: {
																		block: 'input',
																		mods: { theme: 'islands', width: 'available', size: 'xl'},
																		placeholder: 'Username',
																	},
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'xl' },
																	content: {
																		block: 'input',
																		mods: { theme: 'islands', width: 'available', size: 'xl'},
																		placeholder: 'Password',
																	},
																},

																{
																	elem: 'item',
																	elemMods: { 'indent-b': 's' },
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', view: 'action' },
																		text: 'Sign up',
																	},
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'm' },
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', view: 'action' },
																		text: 'Facebook',
																	},
																},
																{
																	elem: 'item',
																	content: {
																		block: 'text', mods: { view: 'link', size: 's', align: 'center' },
																		content: 'Login'
																	}
																}
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
													block: 'auth',
													mix: { block: 'decorator', mods: { 'space-a': 'l' } },
													attrs: { style: 'border: 1px solid var(--color-border); height: 456px; overflow: hidden; width: 320px; box-sizing: border-box;'},
													content: [
														{
															elem: 'header',
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxxxl', weight: 'black' },
																	attrs: { style: 'font-weight: 900; line-height: 1em' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																	content: 'Forgot Password'
																},
																{
																	block: 'text',
																	mods: { view: 'ghost', size: 's' },
																	content: 'Please enter you email'
																}
															]
														},

														{
															block: 'pt-form',
															mods: { view: 'default' },
															mix: { block: 'auth', elem: 'form' },
															content: [
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'l' },
																	content: {
																		block: 'input',
																		mods: { theme: 'islands', width: 'available', size: 'xl'},
																		placeholder: 'Username',
																	},
																},

																{
																	elem: 'item',
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', view: 'action' },
																		text: 'Reset',
																	},
																},
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
};
