$(document).ready(function(){
"use strict";
// var wH;
// SETTING
// function heightSlide(){
//     wH = $(window).height() + 15;
//     $('.fix_h').css({'height':wH+'px'});

//     $(window).resize(function(){
//       wH = $(window).height();
//       $('.fix_h').css({'height':wH+'px'});
//     });
// }
// heightSlide();

// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Testimonials
$('.js-testimonials').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: false,
  speed: 500
});

// Slide
$('.js-slide').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  speed: 900
});

function scrollMenu(){
  var menu = document.querySelectorAll('div.header-wrapper');
  var menu = menu[0];
      //Truy xuất div menu
      var status="duoi100";
  window.addEventListener("scroll",function(){
      var x = pageYOffset;
      if(x > 95){
          if(status == "duoi100")
          {
              status="tren100";
              menu.classList.add('active');
          }
      }
      else{
          if(status=="tren100"){
          menu.classList.remove('active');
          status="duoi100";}
      }
  })
}
scrollMenu();

// Scrool To Top
$(window).scroll(function(){ 
  if ($(this).scrollTop() > 200) { //thực hiện lệnh điều kiện Khi lăn chuột xuống dưới hơn 200px
    $('#scroll-to-top').fadeIn();
  } else { 
    $('#scroll-to-top').fadeOut();
  } 
}); 
$('#scroll-to-top').click(function(){ 
  $("html, body").animate({ scrollTop: 0 }, 700); //Animation
  return false; 
});

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

// Counter
$('.js-counter-pro').counterUp({
  delay: 20,
  time: 1000
});
$('.js-counter-hours').counterUp({
  delay: 20,
  time: 1000
});
$('.js-counter-feedback').counterUp({
  delay: 20,
  time: 1000
});
$('.js-counter-client').counterUp({
  delay: 20,
  time: 1000
});

});
