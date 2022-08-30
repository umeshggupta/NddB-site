
$(document).ready(function () {
    // Header Menu
    $('.menu').on("click", ".dropdown-arrow-btn", function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).parent().siblings().hasClass('active')) {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('ul').slideUp(600);
        }
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).next('ul').slideUp(600);
        }
        else {
            $(this).parent().addClass('active');
            $(this).next('ul').slideDown(600);
        }
    });
    /*---------------- Mobile Menu ------------------*/
    $(".m-menu-btn").click(function () {
        $(".navigation-colum").slideToggle(600);
        $(this).toggleClass("m-menu-btn-ext");
    });



    $(".stickyelement-btn span").click(function () {
        $(".stickyelement").toggleClass("slide-open");
    });
    $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.testimonials-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.related-bull-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {

                    slidesToShow: 1
                }
            }
        ]
    });
    $('#galleryTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function (event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
    $('#activitiesTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function (event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
    $(".about-left-colum ul li a").on("click", function (t) {
        t.preventDefault();
        t = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(t).offset().top - 130
        }, 1e3)
    });

});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $('.about-right-colum').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.about-left-colum ul li a.active').removeClass('active');
            $('.about-left-colum ul li a').eq(i).addClass('active');
        }
    });
    //Header fixed 
    var sc = $(window).scrollTop()
    if (sc > 0) {
        $(".header-section").addClass("fixed")
    } else {
        $(".header-section").removeClass("fixed")
    }
});



