$(document).ready(function(){
	$('.menu-mobie').click(function(){
		$('.menu').toggleClass( "active" );
		$('.overlay').toggleClass( "active" );
	});
	$('.overlay').click(function(){
		$(this).toggleClass( "active" );
		$('.menu').toggleClass( "active" );
	})
});