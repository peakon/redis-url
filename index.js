var url = require('url');

module.exports = function(redisUrl) {
	// parse the url
	var connInfo = url.parse(redisUrl, true);
	if (connInfo.protocol !== 'redis:') {
		throw new Error('Connection string must use the redis: protocol');
	}

	var auth = connInfo.auth;
	if (auth) {
		var authParts = auth.split(':');
		if (authParts.length === 2) {
			auth = authParts[1];
		}
	}

	return {
		port: parseInt(connInfo.port || 6379),
		host: connInfo.hostname,
		auth: auth,
		options: connInfo.query
	};
};