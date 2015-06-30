var chai = require('chai');
var expect = chai.expect;
var parse = require('../');

describe('when we parse a URL', function() {
	it('it should support a basic url', function() {
		var result = parse('redis://server.com');
		expect(result).to.deep.equal({
			host: 'server.com',
			port: 6379,
			options: {},
			auth: null
		});
	});

	it('it should support a custom port', function() {
		var result = parse('redis://server.com:1234');
		expect(result).to.deep.equal({
			host: 'server.com',
			port: 1234,
			options: {},
			auth: null
		});
	});

	it('it should support just a password', function() {
		var result = parse('redis://password@server.com');
		expect(result).to.deep.equal({
			host: 'server.com',
			port: 6379,
			options: {},
			auth: 'password'
		});
	});

	it('it should support username/password (and ignore username)', function() {
		var result = parse('redis://username:password@server.com');
		expect(result).to.deep.equal({
			host: 'server.com',
			port: 6379,
			options: {},
			auth: 'password'
		});
	});

	it('it should support custom options through query parameters', function() {
		var result = parse('redis://server.com?foo=bar');
		expect(result).to.deep.equal({
			host: 'server.com',
			port: 6379,
			options: {
				foo: 'bar'
			},
			auth: null
		});
	});
});