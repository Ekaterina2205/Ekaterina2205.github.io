jQuery(document).ready(function () {
    // FORMS
    jQuery('form button').click(function () {
        var form = jQuery(this).closest('form');

        if (form.valid()) {
            //form.css('opacity', '.5');
            var actUrl = form.attr('action');

            jQuery.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function (data) {
                    form.html(data);
                    //form.css('opacity', '1');
                },
                error: function () {}
            });
        }
    });

    $(".phone").mask("+38 (099) 999-99-99");

    // скрипт табов //
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        $('.card-slider').slick('setPosition');
    });
    // скрипт табов //

    // слайдер swiper
    var swiper = new Swiper('.swiper-container', {
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-truck-next',
            prevEl: '.swiper-truck-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // слайдер swiper

    // var burgerCtr = document.querySelector("#burger-menu");
    // var menuCtr = document.querySelector("#mobile-menu");
    // burgerCtr.addEventListener("click", function () {
    //     this.classList.toggle("active");
    //     menuCtr.classList.toggle("show_mobile_menu");
    // });

    // Бургер меню //

    $('#burger-menu').click(function () {
        $(this).toggleClass('active');
        $('header .block').toggleClass('active');
    })

    jQuery(".m1").click(function () {
        $('#burger-menu').click();
        jQuery('html, body').animate({
            scrollTop: jQuery(".sec3").offset().top - 79
        }, 400);
    });

    jQuery(".m2").click(function () {
        $('#burger-menu').click();
        jQuery('html, body').animate({
            scrollTop: jQuery(".sec4").offset().top - 79
        }, 400);
    });

    jQuery(".m3").click(function () {
        $('#burger-menu').click();
        jQuery('html, body').animate({
            scrollTop: jQuery(".sec5").offset().top - 79
        }, 400);
    });

    jQuery(".m4").click(function () {
        $('#burger-menu').click();
        jQuery('html, body').animate({
            scrollTop: jQuery(".sec7 > .container >.block").offset().top - 79
        }, 400);
    });

});
