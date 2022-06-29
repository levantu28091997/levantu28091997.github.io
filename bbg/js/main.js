$(document).ready(function(){
    "use strict";
    
    // slide
    $('.js-media').owlCarousel({
      items: 4,
      margin: 35,
      loop: true,
      autoplay: false,
      dots: false,
      dotsEach: true,
      autoplayTimeout: 1000,
      nav: true,
      navText: ["<img src='images/arrow_left.png'>","<img src='images/arrow_right.png'>"],
      responsive : {
        // breakpoint from 0 up
        0 : {
            items: 1,
            margin: 20,
            nav: false,
            dots: true
        },
        480 : {
            items: 2,
            margin: 20,
            nav: false,
            dots: true
        },
        768 : {
            items: 3,
            margin: 20
        },
        1199 : {
            items: 4,
            margin: 35
        }
    }
    });

    // Show menu mobie
    $('.js-toggle-menu').on('click', function(e){
        $('.js-menu-overlay').addClass('active');
        $('.menu-mobile').addClass('active');
    })
    $('.js-menu-overlay').on('click', function(e){
        $('.menu-mobile').removeClass('active');
        $('.js-menu-overlay').removeClass('active');
    })

    $('.js-toggle-menu').on('click', function(e){
        $('.js-menu-overlay').addClass('active');
        $('.menu-mobile').addClass('active');
    })

    // media category dropdown
    $('.js-media-category').on('click', function(e){
        $('.media__category ul').toggleClass('active');
    })

  });