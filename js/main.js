$(function () {
    $('.reviews-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1106,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }]
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });
});