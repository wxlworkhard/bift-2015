define(function () {
    var selector = {
        panel: '.pkg_menu_pnl',
    };
    var $panels = $(selector.panel);

    animate($panels);

    function animate($panels) {
        var length = $panels.length;
        var index = length - 1;
        var intervalId;

        intervalId = setInterval(function () {
            if (index >= 0) {
                $panels.eq(length - index - 1).removeClass('active');
                index--;
            } else {
                clearInterval(intervalId);
            }
        }, 500);
    }
});