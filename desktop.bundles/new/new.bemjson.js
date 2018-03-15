module.exports = {
	block: 'page',
	title: 'BEM Vectors',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'new.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'new.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default' }
	},
	content: [
		{
			block: 'hello',
			content: [
				{
					elem: 'name',
					elemMods: { view: 'inverse' },
					content: [
						{
							block: 'text',
							mods: { view: 'inverse' },
							content: 'Inverse'
						}
					]
				}
			]
		}
	]
};
