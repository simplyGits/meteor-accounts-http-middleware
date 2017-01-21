Package.describe({
	name: 'simply:accounts-http-middleware',
	version: '0.0.1',
	summary: 'Changes the node requestion object with useful Meteor account information.',
	git: 'https://github.com/simplyGits/meteor-accounts-http-middleware',
	documentation: 'README.md',
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.2.3');
	api.use([
		'ecmascript',
		'accounts-base',
		'meteorhacks:fast-render@2.0.0', // this sets the used cookie
	], 'server');
	api.mainModule('accounts-http-middleware.js', 'server');
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('simply:accounts-http-middleware');
	api.mainModule('accounts-http-middleware-tests.js');
});
