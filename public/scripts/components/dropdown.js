define(function () {
    var selector = {
        dropdown: '.dropdown',
        toggle: '.dropdown__toggle',
        menu: '.dropdown__menu'
    };
    var $dropdown = $(selector.dropdown);
    var timeoutId;

    $dropdown.on('mouseenter', function () {
        clearTimeout(timeoutId);
        $(this).addClass('open');
    }).on('mouseleave', function () {
        var $this = $(this);
        
        timeoutId = setTimeout(function () {
            $this.removeClass('open');    
        }, 500);
    });

});