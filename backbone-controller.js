(function(root, factory) {

    // AMD
    if (typeof define === 'function' && define.amd) {
        define([
            'backbone'
        ], function(Backbone) {
            return factory(Backbone);
        });

        // Node.js or CommonJS
    } else if (typeof exports !== 'undefined') {
        var Backbone = require('backbone');
        module.exports = factory(Backbone);

        // browser global
    } else {
        factory(root.Backbone);
    }

}(this, function(Backbone) {
    var Controller = function () {
        this.initialize.apply(this, arguments);
    };

    _.extend(Controller.prototype, Backbone.Events, {
        initialize: function () {
        },
        remove: function() {
            this.stopListening();
            return this;
        }
    });

    Controller.extend = Backbone.Model.extend;
    Backbone.Controller = Controller;
    return Controller;
}));
