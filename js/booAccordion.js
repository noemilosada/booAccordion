/**
 * @Name: booAccordion.js
 * @Date: Wed 8 Jan 2014
 * @Author: Noemi Losada Estrella <info@noemilosada.com>
 * Creative Commons License <http://creativecommons.org/licenses/by-sa/3.0/>
 */

(function() {

    /**
     * Default options which will be
     * override by the given ones
     *
     * @property defaults
     * @type {Object}
     */
    var defaults = {
        speed: 200,
        action: 'click',
        animation: 'slide'
    };

    /**
     * Config elements
     *
     * @property config
     * @type {Object}
     */
    var config = {
        dt: 'dt',
        dd: 'dd',
        hide: 'ninja'
    };

    /**
     * Main booAccordion plugin function
     *
     * Usage:
     * $('#booAccordion').booAccordion({
     *     speed: 500,
     *     action: 'click',
     *     animation: false
     * });
     *
     * @method booAccordion
     * @return {Object} this
     */
    $.fn.booAccordion = function() {
        // Initialize the plugin with the given arguments
        init.apply(this, arguments);

        return this;
    };

    /**
     * Initialise instance and extend
     * the given options
     *
     * @method init
     * @param {Object} opts
     * @return {void}
     */
    function init(opts) {
        // Hide all the items except the first
        $(config.dd).filter(':nth-child(n+3)').addClass(config.hide);

        // Override default options with the custom ones
        var options = $.extend(defaults, opts);

        // Save options for the current instance
        this.data(options);

        // Call to the accordion effects function
        accordion(this.selector, options);
    }

    /**
     * Main function with the accordion animation
     *
     * @method accordion
     * @param {Object} opts
     * @param {String} selector
     * @return {void}
     */
    function accordion(selector, opts) {
        // On click a title: open his related content
        $(selector).on(opts.action, config.dt, function() {
            if (opts.animation === 'slide') {
                $(this).next().slideToggle(opts.speed).siblings(config.dd).slideUp(opts.speed);
            } else {
                $(this).next().toggle().siblings(config.dd).hide();
            }
        });
    }

})();
