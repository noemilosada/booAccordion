/**
 * @Name: accordion.js
 * @Date: Wed 8 Jan 2014
 * @Author: Noemi Losada Estrella
 */

(function() {

    /**
     * Default options
     */
    var defaults = {
        speed: 300,
        action: 'mouseover'
    };

    /**
     * Config elements
     */
    var config = {
        dt: 'dt',
        dd: 'dd',
        hide: 'ninja'
    };

    /**
     * booAccordion plugin
     *
     * Usage:
     * $('#booAccordion').booAccordion({
     *     speed: 500,
     *     action: 'click'
     * });
     *
     * @return object this
     */
    $.fn.booAccordion = function() {
        // Initialize the plugin with the given arguments
        init.apply(this, arguments);

        return this;
    };

    /**
     * init function
     *
     * @params object opts
     * @return void
     */
    function init(opts) {
        // Hide all the items except the first
        $(config.dd).filter(':nth-child(n+3)').addClass(config.hide);

        // Override default options with the custom ones
        var options = $.extend(defaults, opts);

        // Save options for the current instance
        this.data(options);

        // Call to the main function which the accordion effects
        accordion(this.selector, options);
    }

    /**
     * accordion function
     *
     * @params object opts
     * @return void
     */
    function accordion(selector, opts) {
        // On click a title open his related content
        $(selector).on(opts.action, config.dt, function() {
            $(this)
                .next()
                    .slideDown(opts.speed)
                    .siblings(config.dd)
                        .slideUp(opts.speed);
        });
    }

})();
