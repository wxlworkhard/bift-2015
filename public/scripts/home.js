define(function () {
    var selector = {
        pkg: '.home_pkg',
        wrapper: '.home__wrapper',
        navbar: '.home_nav__navbar'
    };
    var $pkgs = $('.home_pkg');
    var $wrapper = $('.home__wrapper');
    var $navbar = $('.home_nav__navbar');
    
    var navbarOffsetTop = $navbar.offset().top;
    
    animate($pkgs);
    
    $(window).on('scroll', function (e) {
        var scrollTop = $(window).scrollTop();
        
        // 视差滚动
        var bgPositionY = - scrollTop / 10;
        $wrapper.css('background-position-y', bgPositionY + 'px');

        if (scrollTop > navbarOffsetTop) {
            $navbar.addClass('fixed');
        } else {
            $navbar.removeClass('fixed');
        }


    });

    function animate($pkgs) {
        var length = $pkgs.length;
        var index = 0;

        $pkgs.addClass('active');
        
        setTimeout(function () {
            setInterval(function () {
                if (index < length) {
                    $pkgs.eq(index).removeClass('active');
                    index++;
                }
            }, 300);
        }, 1000);
    }
});