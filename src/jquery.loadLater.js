(function ($) {
    "use strict";

    // Load Later default settings:
    var defaultSettings = {
        url: null,
        selector: null,
        timer: null
    };

    $.fn.loadLater = function (options, callback) {

        if (typeof(options) === "function") {
            callback = options;
            options = {};
        }

        var globalSettings = $.extend({}, defaultSettings, options);

        return this.each(function () {

            var elementSettings = $.extend({}, globalSettings, $(this).data()),
                self,
                timer;

            if (elementSettings.url == null) {

                // script shouldn't be used without url option because this will lead to recursive loading that will
                // break you website
                return this;
            }

            self = $(this);

            // check if timer option was given, null is default value
            if (elementSettings.timer != null) {
                // simple check if timer option is a valid number
                timer = parseInt(elementSettings.timer, 10);
                // if it is a number
                if (timer !== "NaN") {
                    // create timer which will call load function
                    setTimeout(function () {
                        load(self, elementSettings, callback);
                    }, timer);
                }
            } else {
                load(self, elementSettings, callback);
            }

            return this;
        });
    };

    // private function that executes ajax loading of partial
    function load(self, elementSettings, callback) {

        $.ajax({
            url: elementSettings.url,
            dataType: "html"
        }).done(function (responseText) {

                self.html(elementSettings.selector ?
                    $("<div>").append($.parseHTML(responseText)).find(elementSettings.selector) :
                    responseText);

                // check if callback is a function
                if (typeof callback === "function") {
                    callback.call(this, self);
                }
            });
    }

})(jQuery);