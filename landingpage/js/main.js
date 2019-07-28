$(document).ready(function(){
  "use strict";
  // menu

  $('body').scrollspy({ target: '#myNav' })
  // Add smooth scrolling on all links inside the navbar
  $("#myNav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  var header = document.getElementById("myNav");
  var btns = header.getElementsByClassName("nav-li");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    console.log(current);
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    });
  }

  function scrollMenu(){
    var menu = document.querySelectorAll('.header-block');
    var menu = menu[0];
        //Truy xuất div menu
        var status="duoi100";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 109){
            if(status == "duoi100")
            {
                status="tren100";
                menu.classList.add('actived');
            }
        }
        else{
            if(status=="tren100"){
            menu.classList.remove('actived');
            status="duoi100";}
        }
    })
  }
  scrollMenu();

    // Menu mobie
  $('.js-menu-mobie').on('click', function(event) {
    $(".offcanvas-collapse").addClass('open')
    $(".menu-overlay").fadeIn();
    event.preventDefault()
  });
  $(".menu-overlay").click(function(event) {
    $(".offcanvas-collapse").removeClass('open')
    $(".menu-overlay").fadeOut();
  });

  // slide
  $('.js-slide').owlCarousel({
    items: 1,
    margin:0,
    loop: true,
    autoplay: false,
    dots: true,
    dotsEach: true,
    autoplayTimeout: 1000,
    nav: false
  });

  // video
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

  // services
  $('.js-services-list').owlCarousel({
    items: 4,
    margin:30,
    loop: true,
    autoplay: false,
    dots: false,
    dotsEach: true,
    autoplayTimeout: 1000,
    nav: true,
    navText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      768:{
          items:2
      },
      1024:{
          items:3
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

  // testimonials
  $('.js-testimonials-list').owlCarousel({
    items: 4,
    margin:30,
    loop: true,
    autoplay: false,
    dots: true,
    dotsEach: true,
    autoplayTimeout: 1000,
    nav: false,
    responsive:{
      0:{
          items:1
      },
      500:{
          items:2
      },
      768:{
          items:2
      },
      1024:{
          items:3
      },
      1000:{
          items:4
      }
    }
  });

  // manufacturers
  $('.js-manufacturers').owlCarousel({
    items: 5,
    margin:60,
    loop: true,
    autoplay: false,
    dots: true,
    dotsEach: true,
    autoplayTimeout: 1000,
    nav: false,
    responsive:{
      0  :{
         items:2
      },
      425:{
          items:2
      },
      768:{
          items:4
      },
      1000:{
          items:5
      }
    }
  });

  // Scrool To Top
  $(window).scroll(function(){ 
    if ($(this).scrollTop() > 200) { //thực hiện lệnh điều kiện Khi lăn chuột xuống dưới hơn 200px
      $('#scroll-to-top').fadeIn();
    } else { 
      $('#scroll-to-top').fadeOut();
    } 
  }); 
  $('#scroll-to-top').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 1200); //Animation
    return false; 
  });

});