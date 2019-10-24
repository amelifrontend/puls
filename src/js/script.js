//$(document).ready(function(){
    /* $('.carousel__inner').slick({
        speed: 1200, // скорость переключения слайдов
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>', 
        nextArrow: '<button class="slick-next" type="button"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992, // правила работают от 0 до 992
                    settings: {
                        dots: true, //включаем точечки
                        arrows: false //отключаем стрелки
                    }
            }
        ] 
    }); */

  //});

  //slider
$(document).ready(function(){
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        speed: 1000,
        slideBy: 'page',
        autoplay: false,
        nav: false,
        controls: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            971: {
                nav: false
            }
        }
    
    });
 

    document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
    }); 

    document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
    });


    //tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide (item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_mini').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        });
    });

});
  