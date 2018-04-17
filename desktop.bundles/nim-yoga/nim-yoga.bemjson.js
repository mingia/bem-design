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
		{
			block: 'text',
			mods: { view: 'secondary' },
			content: 'dd'
		},
		// контент
		{
			block: 'header',
			content: [
				'bsbbsbsbs',
				{
					elem: 'logo',
				},
				{
					elem: 'menu-button'
				}
			]
		},
		{
			block: 'heading',
			content: [
				'bsbbbsss',
				{
					elem: 'cover',
					content: [

					]
				}
			]
		},
		{
			block: 'intro',
			content: [

			]
		}	
	// контент
	]
};
