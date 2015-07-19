"use strict";

var mustache = require('mustache');

function HomeController(template, content) {
    this._template = template;
    this._content = content;
}

HomeController.prototype.home = function(req, res) {
    res.send(
        mustache.render(this._template, this._content)
    );
};

exports.HomeController = HomeController;
