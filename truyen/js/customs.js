//Scroll Menu
document.addEventListener("DOMContentLoaded",function() {
    var chap = document.querySelectorAll('div.chapter-nav');
    var chap = chap[0];
        //Truy xuất div menu
        var status="duoi150";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 300){
            if(status == "duoi150")
            {
                status="tren150";
                chap.classList.add('chapter-nav-croll');
            }
        }
        else{
            if(status=="tren150"){
                chap.classList.remove('chapter-nav-croll');
            status="duoi150";}
        }
    
    })
});

//Scroll Menu
document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div.navbar-menu-line');
    var menu = menu[0];
        //Truy xuất div menu
        var status="duoi150";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 150){
            if(status == "duoi150")
            {
                status="tren150";
                menu.classList.add('menuscroll');
                $('.item-logo').removeClass('nav-item-logo');
            }
        }
        else{
            if(status=="tren150"){
            menu.classList.remove('menuscroll');
            $('.item-logo').addClass('nav-item-logo');
            status="duoi150";}
        }
    
    })
});


//------- Danh sach truyen moi --------//  

$('.active-review-carusel').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayHoverPause: true,     
    margin:30,
    dots: true
});

 $('.active-story-new').owlCarousel({
        items: 7,
        loop: true,
        autoplayHoverPause: true,
        autoplayTimeout:1500, 
        dots: false,
        autoplay: true,
        nav: true,
        navText: ["<span class='lnr lnr-arrow-up'></span>", "<span class='lnr lnr-arrow-down'></span>"],
        responsive: {
            0: {
                items: 7
            },
            320: {
                items: 3,
            },
            375: {
                items: 3,
            },
            425: {
                items: 3,
            },
            480: {
                items: 3,
            },
            768: {
                items: 5,
            },
            991: {
                items: 7,
            }
        }
    });

$('.active-brand-carusel').owlCarousel({
    items: 5,
    loop: true,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        455: {
            items: 2
        },            
        768: {
            items: 3,
        },
        991: {
            items: 4,
        },
        1024: {
            items: 5,
        }
    }
}); 


// Mobile Menu
$('.moblie-navigation').on('click', function(event) {
    $(".box-mobile-menu").addClass('open')
    $(".menu-overlay").fadeIn();
    event.preventDefault()
});
$(".menu-overlay").click(function(event) {
    $(".box-mobile-menu").removeClass('open')
    $(".menu-overlay").fadeOut();
});
$(".close-menu").click(function(event) {
    $(".box-mobile-menu").removeClass('open')
    $(".menu-overlay").fadeOut();
});

// Toggle submenu mobile / responsive
$(document).on('click', '.menu-item .toggle-submenu', function (e) {
    var $this = $(this);
    var $thisParent = $this.closest('.menu-item-has-children');
    if ($thisParent.length) {
        $thisParent.toggleClass('show-submenu').find('> .submenu').stop().slideToggle();
    }
    e.preventDefault();
    return false;
});


// BACK TOP TOP
$(document).ready(function(){ 
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 100) { //thực hiện lệnh điều kiện Khi lăn chuột xuống dưới hơn 100px
			$('#back-to-top').fadeIn(); //Xuất hiện nút
		} else { 
			$('#back-to-top').fadeOut(); //Ngược lại thì ẩn nút
		} 
	}); 
	$('#back-to-top').click(function(){ 
		$("html, body").animate({ scrollTop: 0 }, 600); //Animation giúp hoạt ảnh scroll ngược lên đầu trang sẽ mượt hơn
		return false; 
	}); 
});


$(document).ready(function(){
    $(".nav-tabs a").click(function(){
      $(this).tab('show');
    });
  });

// Short text
$(".comment").shorten({
    "showChars" : 500,
    "moreText"  : "Xem thêm",
    "lessText"  : "Rút gọn",
});

// Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


// Click to chap mobile   
$("#loadtoChap").click(function() {
    $('html, body').animate({
        scrollTop: $("#storyChap").offset().top
    }, 2000);
});