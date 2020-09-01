(function($) {
	jQuery(document).ready(function($) {

		// Menu Fixed
	    var nav = $('.header'),
    		animateit = function (elm){
				$(elm).
				animate({marginLeft:-10, marginRight:10},100).
				animate({marginLeft:0, marginRight:0},100).
				animate({marginLeft:-10, marginRight:10},100).
				animate({marginLeft:0, marginRight:0},100).addClass("invalid");
			};

	    $(window).scroll(function () {
	        if ($(this).scrollTop() > 0) {
	            nav.addClass("fixed");
	        } else {
	            nav.removeClass("fixed");
	        }
	    });

	    // Menu Mobile
	    $('.btn_menu').on('click', function (e){
	    	e.preventDefault();
	    	$(this).parents().find('.menu_mobile').toggleClass('open_menu');
	    	$(this).parents().find('.overlay_menu').toggleClass('show_overlay');
	    });

	     $('.close_menu').on('click', function (e){
	    	e.preventDefault();
	    	$(this).parents().find('.menu_mobile').toggleClass('open_menu');
	    	$(this).parents().find('.overlay_menu').toggleClass('show_overlay');
	    });

	    $(".overlay_menu").on("click", function (){
        	$(this).parents().find('.menu_mobile').toggleClass('open_menu');
	    	$(this).parents().find('.overlay_menu').toggleClass('show_overlay');                 
    	});

    	$(".toggle_menu").on("click", function (e){
    		e.preventDefault();
        	$(this).parent().find('.sub_menu').slideToggle();
    	});

	    // Back To Top
		if($(".tsd_backtotop").length > 0){

			$(window).scroll(function () {
				var e = $(window).scrollTop();
				if (e > 250) {
					$(".tsd_backtotop").addClass('show')
				} else {
					$(".tsd_backtotop").removeClass('show')
				}
			});

			$(".tsd_backtotop").click(function () {
				$('body,html').animate({
					scrollTop: 0
				})
			})

		}

		// tab 1
		$('.tab_group1').each(function (ind){
			var $this = $(this);
				let ev = 'click' ;


			$this.find('.tab_nav1 a').on(ev, function(e) {

				var tid = $(this).attr('href');
				
				$this.find('.tab_content1 .item').css("display", "none");
				$this.find('.tab_nav1 li').removeClass('active');


				$(this).closest('li').addClass('active');
				$(tid).css("display", "block");

				e.preventDefault();

			});
		});

		// Tab
		$('.tab_group').each(function (ind){
			var $this = $(this),
				ev = $this.data('event') || 'click' ;

			$this.find('.tab_nav a').on(ev, function(e) {

				var tid = $(this).attr('href');
				
				$this.find('.tab_content .item').css("display", "none");
				$this.find('.tab_nav li').removeClass('active');

				$(this).closest('li').addClass('active');

				$(tid).css("display", "block");

				e.preventDefault();

			});
		});
		
		if (window.utm_content !== undefined && window.utm_content !== '')
			$('.tab_nav a[href="#'+ window.utm_content+'"]').click();
		
		// Play video
		var videoId = $("#intro-video").data('videoid'),
			timerVideo,
			playVideo = function (){
				timerVideo = setInterval(function(){
					if(YTplayer_loaded && typeof YTplayer.loadVideoById === "function"){
						YTplayer.loadVideoById(videoId);
						clearInterval(timerVideo);
					}
				}, 100);
			};

		$(".hero_image .play_video").click(function(e) { 
		    e.preventDefault();
			$("#video").toggleClass('open');
			playVideo();
		});

		$(".hero_image .close_video").click(function(e) { 
		    e.preventDefault();
			$("#video").removeClass('open');
			YTplayer_loaded && YTplayer.pauseVideo();
		});

		$(".hero_image .overlay_video").click(function(e) { 
		    e.preventDefault();
			$("#video").removeClass('open');
			YTplayer_loaded && YTplayer.pauseVideo();
		});

		// Checkbox id
		$('#check_all').on('click', function() {
			$('.action_check').prop('checked', this.checked);
			var values = $("input[name='checked[]']:checked").map(function(){
				return $(this).val();
			}).get();
			$('.id_action').val(values);
		});
		
		$('.action_check').on('click', function() {
			var values = $("input[name='checked[]']:checked").map(function(){return $(this).val();}).get();
			$('.id_action').val(values);
		});

		// Submit filter form
		var form_filter = $('#filter_form');
		$('.tsd_filter').on('change', function (){
			var val = $(this).val();
			if (val == 'delete') {
				var r = confirm("Are you sure 'delete'?");
				if (r == true) {
					form_filter.submit();
				}
			} else {
				form_filter.submit();
			}
		});
		
		// /**POPUP form**/
		// $(".form_submit  input").keypress(function(event) {
		// 	if (event.which == 13) {
		// 		event.preventDefault();
		// 	}
		// });
		
		// $(".subscribe .popup_sub").click(function(e) { 
		//     e.preventDefault();
		// 	$("#form_popup").toggleClass('open');
		// });

		// $("#form_popup .close_popup").click(function(e) { 
		//     e.preventDefault();
		// 	$("#form_popup").removeClass('open');
		// });

		// $("#form_popup .overlay").click(function(e) { 
		//     e.preventDefault();
		// 	$("#form_popup").removeClass('open');
		// });
		
		// //Ajax submit
		
		// $('.box_scrb').each(function (ind){
		// 	var form = $(this).find('form'),
		// 		that = $(this),
		// 		spinner = that.find('.lumise-spinner');
			
		// 	$(this).find('input').on('click', function (e){
		// 		$(this).removeClass("invalid");
		// 	});
			
		// 	$(this).find('input[type=submit]').on('click', function (e){
		// 		e.preventDefault();
		// 		var email = form.find("input[type=email]"),
		// 			name = form.find("input[name=name]"),
		// 			platforms = form.find('input[name="platforms[]"]:checked'),
		// 			email_val = email.val(),
		// 			isvalid = true;

		// 		if( email_val.length < 8 || email_val.indexOf('@') == -1 || email_val.indexOf('.') == -1 ){
		// 			animateit(email);
		// 			isvalid = false;
		// 		}
				
		// 		if( name.val() === '' ){
		// 			animateit(name);
		// 			isvalid = false;
		// 		}

		// 		if(
		// 			form.attr('id') === 'newsletter' &&
		// 			platforms.length === 0
		// 		){
		// 			alert('Please select at least one of platform to signup')
		// 			isvalid = false;
		// 		}

		// 		if(isvalid){
		// 			spinner.fadeIn();
		// 			$.ajax({
		// 				type: "POST",
		// 				url: lumise_landing.ajax,
		// 				data: form.serialize(),
		// 				dataType: 'json',
		// 				success: function (response){
		// 					console.log(response);
		// 					spinner.fadeOut();
		// 					that.html(response.msg).addClass('success').fadeIn();
		// 					form.remove();
		// 				}
		// 			});
		// 		}
				
				
		// 	});
		// });
		
		// /**END POPUP form**/
	    

	    /**FAQ**/
	    $('.tsd_faqs .ques').on('click', function (e){
	    	e.preventDefault();
	    	$(this).next().slideToggle(300);
	    })
	});
	
})(jQuery);
