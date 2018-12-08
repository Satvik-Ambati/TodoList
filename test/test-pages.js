var expect  = require('chai').expect;
var request = require('request');

it('About page content', function(done) {
    request('http://localhost:3000/todo' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});