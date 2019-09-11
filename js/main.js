$('.slider-test').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
	infinite: false,
	arrows: true,
    cssEase: 'linear'
});



$(function () {
   
    "use strict";
    
    
    // Our auto slider code
    
    (function autoslider() {
        
        $('.slider-testim .active-slider').each(function () {
           
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                  
                    $(this).
                        removeClass('active-slider').next().addClass('active-slider').fadeIn();
                    autoslider();
                   
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active-slider');
                    $('.slider-testim div').eq(0).addClass('active-slider').fadeIn();
                    
                    autoslider();
                });
                
            }
            
        });
        
    }());

});