$(function () {

    $('.visual_slider').slick({
        dots: true,
        autoplay: true,
        pauseOnHover: false,
    });


    $('.slider').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        dots: true,
        pauseOnHover: false,
    });

    $('.slider02').slick({
        slidesToShow: 3,
    });
});