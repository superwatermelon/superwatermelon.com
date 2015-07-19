"use strict";

function ContactController() {

}

ContactController.prototype.contact = function(req, res) {
    res.send('Hello, Contact!');
};

exports.ContactController = ContactController;
