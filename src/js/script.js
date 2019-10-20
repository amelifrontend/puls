$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200, // скорость переключения слайдов
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>', 
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: inline-block;"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992, // правила работают от 0 до 992
                    settings: {
                        dots: true, //включаем точечки
                        arrows: false //отключаем стрелки
                    }
            }
        ] 

        
        
    });
  });
