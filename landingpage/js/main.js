$(document).ready(function(){
  "use strict";

function video() {
    $('[data-fancybox]').fancybox({
      youtube : {
        controls : 0,
        showinfo : 0
      },
      vimeo : {
        color : 'f00'
      }
    });
  }
video();

$('.js-services-list').owlCarousel({
    items: 4,
    lazyLoad: true,
    margin:30,
    loop: true,
    autoplay: false,
    dots: true,
    nav: true,
    navText: ["<span class='lh-prev-slide'></span>","<span class='lh-next-slide'></span>"],
    dotsEach: true,
    autoplayTimeout: 1000,
    responsive:{
      0:{
          items:1
      },
      576:{
          items:1
      },
      1000:{
          items:4
      }
  }
});

// Counter
$('.js-counter-like').counterUp({
  delay: 20,
  time: 1000
});
$('.js-counter-year').counterUp({
  delay: 20,
  time: 1000
});
$('.js-counter-customers').counterUp({
  delay: 20,
  time: 1000
});
$('.js-counter-product').counterUp({
  delay: 20,
  time: 1000
});

});