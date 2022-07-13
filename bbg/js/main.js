$(document).ready(function(){
    "use strict";
    
    // slide
    $('.js-media').owlCarousel({
      items: 4,
      margin: 35,
      loop: true,
      autoplay: true,
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
    $('.js-close-menu').on('click', function(e){
        $('.menu-mobile').removeClass('active');
        $('.js-menu-overlay').removeClass('active');
    })

    // media category dropdown
    $('.js-media-category').on('click', function(e){
        $('.media__category ul').toggleClass('active');
    })

    // comment dropdown
    $('.js-toggle-comment').on('click', function(e){
        $('.js-form-comment').toggleClass('active');
    })

    // Resize content
    if( $('.news-details__content p').length >0 ) {
        let min=9,
            max=26;
        let reset = $('.news-details__content p').css('fontSize'); 
        let elm = $('.news-details__content p');
        let size = reset.replace('px', ''); 
        $('.js-fontsize-plus').click(function() {
            if (size<=max) {
                size++;
                elm.css({'fontSize' : size});
            }
            return false;   
        });
        $('.js-fontsize-minus').click(function() {
            if (size>=min) {
                size--;
                elm.css({'fontSize' : size});
            }
            return false;   
        });
    }
 
    // Toggle submenu mobile
    $(document).on('click', 'li .sub-menu', function (e) {
        var $this = $(this);
        var $thisParent = $this.closest('li');
        if ($thisParent.length) {
            $thisParent.toggleClass('show-submenu').find('> .sub').stop().slideToggle();
        }
        e.preventDefault();
        return false;
    });

  });
