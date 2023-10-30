
const responsive = {

    160: {
        items: 1
    }, 
   
}
$(document).ready(function () {

    /***owl for blog */
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        dots: false,
        nav: false,
        cssEase: 'ease',
        fade: false,
        animateOut: "fadeOut",
        // animateIn: "slideInDown",
        // navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
       
    });

});

