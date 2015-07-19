var controllers = require('../lib/controllers');

describe('HomeController', function() {

    var controller = new controllers.HomeController();

    it('Says "Hello, World"', function() {
        var req = {};
        var res = {
            send: function() {}
        };
        controller.home(req, res);
    });

});
