/* $(document).ready(function(){
    $('.carousel__inner').slick({
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

        
        
    });
  });
 */

let slider = tns({
    container: '.carousel__inner',
    items: 1,
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