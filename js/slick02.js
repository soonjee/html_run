$(function () {

    $('.mian_slider').on('init afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.slide01 .box .num').text("0" + (c ? c + 1 : 1) + " / " + "0" + s.slideCount);
        $('.slide01 .content>li').eq(c).addClass('on').siblings().removeClass('on');
    })

    $('.mian_slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '250px'
    });

    $('.slide01 .slide_arrows i:nth-child(1)').on('click', function () {
        $('.mian_slider').slick('slickPrev')
    });
    $('.slide01 .slide_arrows i:nth-child(2)').on('click', function () {
        $('.mian_slider').slick('slickNext')
    });

    $('.left_slider').slick({
        arrows: false,
        fade: true,
    });
    $('.right_slider').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.left_slider',
    });

    $('.slide02 .right i:nth-child(1)').on('click', function () {
        $('.right_slider').slick('slickPrev')
    });
    $('.slide02 .right i:nth-child(2)').on('click', function () {
        $('.right_slider').slick('slickNext')
    });


})