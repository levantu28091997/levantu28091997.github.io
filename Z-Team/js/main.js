$(document).ready(function(){
"use strict";
var wH;
// SETTING
function heightSlide(){
    wH = $(window).height();
    $('.fix_h').css({'height':wH+'px'});
}
heightSlide();

// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Testimonials
$('.js-testimonials').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  speed: 300
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