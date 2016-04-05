define(function () {
    var selector = {
        pkg: '.home_pkg',
        wrapper: '.home__wrapper'
    };
    var $pkgs = $('.home_pkg');
    var $wrapper = $('.home__wrapper');
    
    animate($pkgs);
    
    $(window).on('scroll', function (e) {
        var scrollTop = $(window).scrollTop();
        var bgPositionY = - scrollTop / 10;
        $wrapper.css('background-position-y', bgPositionY + 'px');
    });

    function animate($pkgs) {
        var length = $pkgs.length;
        var index = 0;
        
        setInterval(function () {
            if (index < length) {
                $pkgs.eq(index).removeClass('active');
                index++;
            }
        }, 300);   
    }
});