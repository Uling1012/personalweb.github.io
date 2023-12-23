$(document).ready(function(){
    //owl carosel
    $(".owl-carousel").owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        center:true,
        autoplay:true,
        margin: 16,
        responsive:{
            0:{items:2},
            576:{items:3},
            768:{items:3},
        }
    });

    // scroll reveal
    ScrollReveal().reveal('.slideUp',{
        origin: 'bottom',
        distance: '150px',    
        delay: 375,
        duration: 1000,
        reset: true 
    });
    ScrollReveal().reveal('.slideDown',{
        origin: 'top',
        distance: '150px',    
        delay: 400,
        duration: 1000,
        reset: true 
    });
    ScrollReveal().reveal('.slideRight',{
        origin: 'left',
        distance: '100px',    
        delay: 375,
        duration: 800,
        reset: true 
    });
    ScrollReveal().reveal('.slideLeft',{
        origin: 'right',
        distance: '100px',    
        delay: 375,
        duration: 800,
        reset: true 
    });
})