$(function(){

    $('.slider__items').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        dots: true
    });

    new WOW().init();
    
});