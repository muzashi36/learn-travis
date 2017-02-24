var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({port: 3000}); // tell hapi which TCP Port to "listen" on

server.route({
    method: 'GET',        // define the method this route will handle
    path: '/{yourname*}', // this is how you capture route parameters in Hapi
    handler: function(req, reply) { // request handler method
        reply('Hello ' + req.params.yourname + '!'); // reply with text.
    }
});

server.start(function () { // start the Hapi server on your localhost
    console.log('Now Visit: http://localhost:' + server.info.port + '/YOURNAME');
});

module.exports = server;
