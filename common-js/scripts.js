(function ($) {

    "use strict";

    if (isExists('#rounded-countdown')) {

        var remainingSec = new Date(2018, 6, 19);
        $('.countdown').ClassyCountdown({
            theme: "flat-colors-very-wide",
            end: remainingSec.getTime(),
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
