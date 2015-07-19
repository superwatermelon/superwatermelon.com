var app = require('./lib/app');
var factory = new app.Factory({
    server: {
        port: 8080
    }
});
var server = factory.create();
server.start();
