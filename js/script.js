$(document).ready(function(){
	
	
	
	
	
	$('.flextext').click(function(){
		$('.flex-container').children().not($(this)).animate({
			"width":"6.5%"}
			,600
			,"swing"
			).find('img').hide();
			
		$('.flex-container').children().not($(this)).css({"font-size":"25px"});
		$(this).animate({"width":"54.5%"}
		,600
		,"swing");
		

		$(this).find('img').hide();
		$('#first').css({"background-color":"red"});
		
		
	});
	
});rr