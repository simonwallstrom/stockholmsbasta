(function() {

    // -------------------------------------------------------------
    // # Typed.js init
    // -------------------------------------------------------------

    $(function(){
        $(".hero-title-what").typed({
            strings: ["Hamburgare", "Sushi", "Ramen", "Falafel", "mat, helt enkelt."],
            loop: false,
            backSpeed: 50,
            typeSpeed: 50,
            callback: function() {
                $('.typed-cursor').hide();
            }
        });
    });


    // -------------------------------------------------------------
    // # About site toggle
    // -------------------------------------------------------------

    // show about site
    $('.about-site-link').on('click', function() {
        $('.blocker').addClass('show-blocker');
        $('.about-site-content').addClass('show-about');
        return false;
    });

    // Close about site
    $('.blocker, .about-site-link-close').on('click', function() {
        $('.blocker').removeClass('show-blocker');
        $('.about-site-content').removeClass('show-about');
        return false;
    });


    // -------------------------------------------------------------
    // # Dynamic height for hero section - Not used on mobile
    // -------------------------------------------------------------

    function setHeight() {
        var windowHeight = $(window).innerHeight();

        if (window.matchMedia('(min-width: 850px)').matches) {
        
            $('.site-header').css('height', windowHeight);
            $('.hero-title').css('paddingTop', windowHeight/2 - 130);
        }
        if (window.matchMedia('(max-width: 850px)').matches) {
        
            $('.site-header').css('height', 'auto');
            $('.hero-title').css('paddingTop', '3rem');
        }
    }

    setHeight();
    
    $(window).resize(function() {
        setHeight();
    });


    // -------------------------------------------------------------
    // # Fixed navbar on scroll
    // -------------------------------------------------------------

    // Scroll to section
    $('.site-nav-link').on('click', function() {

        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false;

    });

    // Change to fixed on scroll
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        var windowHeight = $(window).innerHeight();
        if (windscroll >= windowHeight) {
            $('.site-nav').addClass('fixed');
            $('.category').each(function(i) {
                if ($(this).position().top <= windscroll) {
                    $('.site-nav-link').removeClass('site-nav-link--active');
                    $('.site-nav-link').eq(i).addClass('site-nav-link--active');
                }
            });

        } else {

            $('.site-nav').removeClass('fixed');
            $('.site-nav-link--active').removeClass('site-nav-link--active');
        }

    }).scroll();

})();