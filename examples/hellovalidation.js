var Hapi = require('hapi');
var Joi = require('joi');

var server = new Hapi.Server();

server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/{yourname*}',
  config: {
    validate: {
      params: {
        yourname: Joi.string().min(2).max(40).alphanum().required()
      }
    },
    handler: function(request, reply) {
      reply('Hello ' + request.params.yourname + "!");
    }
  }
});

server.start(function () { // start the Hapi server on your localhost
   console.log('Now Visit: http://localhost:' + server.info.port + '/YOURNAME');
});

function getServer() {
  return server;
}

module.exports = {
  getServer: getServer
};
