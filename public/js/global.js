// iFrame Height
$(document).ready(function() {
	$('#larger').click(function() {
	    $('#preview').animate({"height": "+=100px"}, 500);
	});
	
	$('#smaller').click(function() {
	    $('#preview').animate({"height": "-=100px"}, 500);
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