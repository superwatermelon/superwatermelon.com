"use strict";

var express = require('express');
var piddly = require('piddly');
var marked = require('marked');
var fs = require('fs');
var yaml = require('js-yaml');

var controllers = require('./controllers');

function Factory(config) {
    this._config = config || {};

    this._components = piddly.create({

        'ContactController': function(components) {
            return new controllers.ContactController();
        },
        
        'HomeController': function(components) {
            return new controllers.HomeController(components('HomeTemplate'), components('HomeContent'))
        },

        'HomeContent': function(components) {
            return {
                main: marked(fs.readFileSync('content/home.md', 'utf-8')),
                experience: marked(fs.readFileSync('content/home_experience.md', 'utf-8')),
                clientSide: marked(fs.readFileSync('content/home_client_side.md', 'utf-8')),
                serverSide: marked(fs.readFileSync('content/home_server_side.md', 'utf-8')),
                infrastructure: marked(fs.readFileSync('content/home_infrastructure.md', 'utf-8')),
                labels: yaml.safeLoad(fs.readFileSync('content/home.yaml', 'utf-8'))
            };
        },

        'HomeTemplate': function(components) {
            return fs.readFileSync('lib/templates/home.mustache', 'utf-8');
        },

        'Server': function(components) {
            return new Server(config.server, {
                home: components('HomeController'),
                contact: components('ContactController')
            });
        }

    })
}

Factory.prototype.create = function() {
    return this._components('Server');
};

function createControllerRoute(controller, method) {
    return controller[method].bind(controller);
}

function Server(config, controllers) {
    this._config = config || {};
    this._port = this._config.port || null;
    this._driver = express();
    this._driver.use(express.static('out'));
    this._driver.get('/', createControllerRoute(controllers.home, 'home'));
    this._driver.get('/contact', createControllerRoute(controllers.contact, 'contact'));
}

Server.prototype.start = function() {
    var server = this._server = this._driver.listen(this._port, function() {
        console.log('Listening on port %d', server.address().port);
    });
};

Server.prototype.stop = function() {
    this._server.close(function() {
        console.log('Stopped listening');
    });
};

exports.Factory = Factory;
