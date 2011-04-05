// Lightbox

$(document).ready(function(){
	$("a[rel^='prettyPhoto']").prettyPhoto({
		show_title: false,
		theme: "facebook",
		default_width: 480
	});
});

// Fade links

$(function () {
	$('.fade').hover(function() {
		$(this).fadeTo("fast", 1);
	}, function() {
		$(this).fadeTo("75", 0.5);
	});

});