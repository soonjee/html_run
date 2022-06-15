$(function () {

    let createNum = 0;

    $('.main_slider').on('init afterChange', function (e, s, c) {
        $('.main_slider figure.slick-current').addClass('on').siblings().removeClass('on');
        $('.num').css({ backgroundPositionY: -100 * createNum + "px" });
        $('.custom_dots li').eq(c).addClass('on').siblings().removeClass('on');
        createNum++;
    });

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 4000,
    });

    $('.custom_dots a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.main_slider').slick('slickGoTo', idx)
        $('.num').css({ backgroundPositionY: -100 * idx + "px" });
    })



    $('.custom_arrow i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev');
    })
    $('.custom_arrow i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext');
    })

    $('.custom_play i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPause');
    })
    $('.custom_play i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickPlay');
    })


        + 4
});