jQuery(document).ready(function($) {
	$(".play").click(function(e) {
		var video = document.getElementById("promo");
		var button = document.getElementById("play");
		video.play();
	});
});