$(document).ready(function() {

	var result = "";

	$('.num').click(function(){

		result = $(this).text();
		$('.screen').html(result);
		$('.screen').addClass('open');
	});

});