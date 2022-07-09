$(function(){

    $('.slider-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6000,
        asNavFor: '.slider-nav'
      });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-items',
        dots: false,
        centerMode: false,
        focusOnSelect: false
      });


    $('.slick-prev.slick-arrow').on('click', function(){
        $('.slick-prev.slick-arrow').addClass('color-active');
        $('.slick-next.slick-arrow').addClass('color-off');
        $('.slick-next.slick-arrow').removeClass('color-active');
    });
    $('.slick-next.slick-arrow').on('click', function(){
        $('.slick-next.slick-arrow').removeClass('color-off');
        $('.slick-next.slick-arrow').addClass('color-active');
        $('.slick-prev.slick-arrow').removeClass('color-active');
    });

    $('.header__search').on('click', function(){
      $('.header__search > form').slideToggle();
  });

  $('.about__tabs-wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.about__tabs-wrapper').find('.tab-item').removeClass('active-tab').hide();
      $('.about__tabs-wrapper .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

    $('.services__tabs-wrapper .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.services__tabs-wrapper').find('.tab-item').removeClass('active-tab').hide();
        $('.services__tabs-wrapper .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
      });

    var mixer = mixitup('.works__inner-box');

  $('.works__inner-box').simpleLoadMore({
    item: '.works__box-item',
    count: 8,
    itemsToLoad: 4,
    btnHTML: '<a href="#" class="works__load-btn">Load More</a>',
  });

    $('.count, .count2').each(function () {
       $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
         duration: 5000,
         easing: 'swing',
         step: function (now) {
            $(this).text(Math.ceil(now));
         }
        });
    });
    
    $('.reviews__slider-items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 6000,
      asNavFor: '.reviews__slider-nav'
    });
  $('.reviews__slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.reviews__slider-items',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true
    });

});

