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

});