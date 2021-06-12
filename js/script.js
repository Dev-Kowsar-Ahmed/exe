$(function () {


    //Banner Slider
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        vertical: false,
        dots: false,
    });
    //Accordian slider
    $('.mainbox').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
    });
    //Blog Part Slider
    $('.slid').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows: false,
        vertical: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
    },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
    }

  ]
    });
    //clients slider
    $('.all').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        vertical: false,
        dots: false,
        prevArrow: '.start',
        nextArrow: '.end',
        responsive: [
            {
                breakpoint: 922,
                settings: {
                    slidesToShow: 3,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
    }
  ]
    });
});