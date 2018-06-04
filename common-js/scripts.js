(function ($) {

    "use strict";

    if (isExists('#rounded-countdown')) {

        $('.countdown').ClassyCountdown({
            theme: "flat-colors-very-wide",
            end: new Date(2018, 6, 19).getTime(),
            labelsOptions: {
                lang: {
                    days: 'Дней',
                    hours: 'Часов',
                    minutes: 'Минут',
                    seconds: 'Секунд'
                }
            }
        });
    }

    $('a[href="#"]').on('click', function () {
        return false;
    });

})(jQuery);


function isExists(elem) {
    return $(elem).length > 0;
}
