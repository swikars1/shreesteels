$(document).ready(function(){
	
	
	
	
	
	$('.flextext').click(function(){
		$notselected = $('.flex-container').children().not($(this));
		$notselected.animate({
			"width":"6.5%"}
			,600
			,"swing"
			).find('img').hide();
		
		$(this).animate({"width":"54.4%"}
		,600
		,"swing");
		var selectedid = $(this).attr('id');	
	});
	
});