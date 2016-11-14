//
// some mobile-oriented app config overrides
//

if(typeof(config) == 'undefined') config = {};
Object.merge(config, {
	api_url: 'https://api.turtl.it/v2',
	client: 'mobile-ubuntu',
	version: cordova_app_version,
	cookie_login: true,
	catch_global_errors: true,
	base_url: window.location.toString().replace(/\/(index\.html)?$/, '/app'),
	has_autologin: true
});

