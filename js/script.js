$(document).ready(function(){
	
	
	
	
	
	$('.flextext').click(function(){
		$notselected = $('.flex-container').children().not($(this));
		$notselected.animate({
			"width":"6.5%"},600,"swing")
			.find('img')
			.not($('.iconclass'))
			.hide(400);
		$(this).find($('.iconclass'))
		.hide(400);
		$notselected.find($('.iconclass'))
		.show(400);
		$(this).animate({"width":"54.4%"}
		,600
		,"swing");
		$('.verticaltext1').css({"left":"8%","top":"39%","font-size":"24px"});
		$('.iconclass').css({"width":"45px"});
		var selectedid = $(this).attr('id');	
	});
	
});