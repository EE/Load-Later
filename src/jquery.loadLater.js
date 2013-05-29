(function ($) {
    'use strict';

    // Load Later default settings:
    var defaultSettings = {
        url: null,
        selector: null
    };

    $.fn.loadLater = function (options, callback) {

        if (typeof(options) === "function") {
            callback = options;
            options = {};
        }

        var globalSettings = $.extend({}, defaultSettings, options);

        return this.each(function () {

            var elementSettings = $.extend({}, globalSettings, $(this).data());

            if (elementSettings.url == null) {

                // script shouldn't be used without url option because this will lead to recursive loading that will
                // break you website
                return this;
            }

            var self = $(this);

            $.ajax({
                url: elementSettings.url,
                dataType: 'html'
            }).done(function (responseText) {
                    self.html(elementSettings.selector ?
                        $("<div>").append(jQuery.parseHTML(responseText)).find(elementSettings.selector) :
                        responseText);

                    if (typeof(callback) === "function") {
                        callback.call(this, self);
                    }
                });

            return this;
        });
    }

})(jQuery);