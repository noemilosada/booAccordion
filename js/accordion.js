/**
 * Name: accordion.js
 * Date: Wed 8 Jan 2014
 * Author: Noemi Losada Estrella
 * TODO: Improve to admit params like id, speed or select open element
 */

(function() {

    /** Config elements.
     * Modify here in case you changethe html structure.
     */
    var config = {
        id: '#booAccordion',
        dt: 'dt',
        dd: 'dd',
        hide: 'ninja',
        speed: 300
    };

    /**
     * booAccordion plugin
     * usage:
     * TODO: Call the plugin with parameters we can customize
     */
    $.fn.booAccordion = function() {
        init();
        effects();
    };

    // Initialize the elements
    function init() {
        $(config.dd).filter(':nth-child(n+3)').addClass(config.hide);
    }

    // Main accordion
    function effects() {
        $(config.id).on('click', config.dt, function() {
            $(this)
                .next()
                    .slideDown(config.speed)
                    .siblings(config.dd)
                        .slideUp(config.speed);
        });
    }

    $.fn.booAccordion();
})();
