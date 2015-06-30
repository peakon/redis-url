module.exports = {
	src: [
		'**/*.spec.js',
		'!node_modules/**/*'
	],
	options: {
		coverageFolder: 'coverage',
		mochaOpts: ['--harmony'],
		istanbulOptions: ['--harmony']
	}
};