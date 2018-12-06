$(document).ready(function(){
	$('.iconclass').css({"width":"55px"});
	$('.flextext').click(function(){
		$('.flextext img').css({"width":"100%","left":"0%"});
		$('.coverdiv').css({"width":"100%","left":"0%"});
		$notselected = $('.flex-container').children().not($(this));
		$(this).find('p').hide();
		$notselected.find('p').show();
		$notselected.animate({
			"width":"6.5%"},600,"swing")
			.find('img')
			.not($('.iconclass')).not($('.inside1'))
			.hide(400);

		$(this).find($('.iconclass'))
		.hide(400);
		$notselected.find($('.iconclass'))
		.show(400);
		$(this).animate({"width":"54.4%"}
		,600
		,"swing");
		$('.verticaltext1').css({"left":"8%","top":"34%"});
		$('.verticaltext4').css({"top":"17%"});
		
		$('.verticaltext1,.verticaltext2,.verticaltext3,.verticaltext4,.verticaltext5,.verticaltext6,.verticaltext7,.verticaltext8').css({"font-size":"23px"});
		
		$('.iconclass').css({"width":"45px"});
		var selectedid = $(this).attr('id');

	});
	
	$('#first').click(function(){
		$(this).append("<img class='inside1' src='./images/inside1.jpg'>");
		$('#second').find('img').not($('.iconclass')).remove();
		$('#third').find('img').not($('.iconclass')).remove();
		$('#fourth').find('img').not($('.iconclass')).remove();
		$('#fifth').find('img').not($('.iconclass')).remove();
		$('#sixth').find('img').not($('.iconclass')).remove();
		$('#seventh').find('img').not($('.iconclass')).remove();
		$('#eighth').find('img').not($('.iconclass')).remove();
	});
		$('#second').click(function(){
		$(this).append("<img class='inside1' src='./images/inside2.jpg'>");
		$('#first').find('img').not($('.iconclass')).remove();
		$('#third').find('img').not($('.iconclass')).remove();
		$('#fourth').find('img').not($('.iconclass')).remove();
		$('#fifth').find('img').not($('.iconclass')).remove();
		$('#sixth').find('img').not($('.iconclass')).remove();
		$('#seventh').find('img').not($('.iconclass')).remove();
		$('#eighth').find('img').not($('.iconclass')).remove();
	});
		$('#third').click(function(){
		$(this).append("<img class='inside1' src='./images/inside3.jpg'>");
		$('#second').find('img').not($('.iconclass')).remove();
		$('#first').find('img').not($('.iconclass')).remove();
		$('#fourth').find('img').not($('.iconclass')).remove();
		$('#fifth').find('img').not($('.iconclass')).remove();
		$('#sixth').find('img').not($('.iconclass')).remove();
		$('#seventh').find('img').not($('.iconclass')).remove();
		$('#eighth').find('img').not($('.iconclass')).remove();
	});
		$('#fourth').click(function(){
		$(this).append("<img class='inside1' src='./images/inside4.jpg'>");
		$('#second').find('img').not($('.iconclass')).remove();
		$('#third').find('img').not($('.iconclass')).remove();
		$('#first').find('img').not($('.iconclass')).remove();
		$('#fifth').find('img').not($('.iconclass')).remove();
		$('#sixth').find('img').not($('.iconclass')).remove();
		$('#seventh').find('img').not($('.iconclass')).remove();
		$('#eighth').find('img').not($('.iconclass')).remove();
	});
		$('#fifth').click(function(){
		$(this).append("<img class='inside1' src='./images/inside5.jpg'>");
		$('#second').find('img').not($('.iconclass')).remove();
		$('#third').find('img').not($('.iconclass')).remove();
		$('#fourth').find('img').not($('.iconclass')).remove();
		$('#first').find('img').not($('.iconclass')).remove();
		$('#sixth').find('img').not($('.iconclass')).remove();
		$('#seventh').find('img').not($('.iconclass')).remove();
		$('#eighth').find('img').not($('.iconclass')).remove();
	});
		$('#sixth').click(function(){
		$(this).append("<img class='inside1' src='./images/inside6.jpg'>");
		$('#second').find('img').not($('.iconclass')).remove();
		$('#third').find('img').not($('.iconclass')).remove();
		$('#fourth').find('img').not($('.iconclass')).remove();
		$('#fifth').find('img').not($('.iconclass')).remove();
		$('#first').find('img').not($('.iconclass')).remove();
		$('#seventh').find('img').not($('.iconclass')).remove();
		$('#eighth').find('img').not($('.iconclass')).remove();
	});
		$('#seventh').click(function(){
		$(this).append("<img class='inside1' src='./images/inside7.jpg'>");
		$('#second').find('img').not($('.iconclass')).remove();
		$('#third').find('img').not($('.iconclass')).remove();
		$('#fourth').find('img').not($('.iconclass')).remove();
		$('#fifth').find('img').not($('.iconclass')).remove();
		$('#sixth').find('img').not($('.iconclass')).remove();
		$('#first').find('img').not($('.iconclass')).remove();
		$('#eighth').find('img').not($('.iconclass')).remove();
	});
			$('#eighth').click(function(){
		$(this).append("<img class='inside1' src='./images/inside8.jpg'>");
		$('#second').find('img').not($('.iconclass')).remove();
		$('#third').find('img').not($('.iconclass')).remove();
		$('#fourth').find('img').not($('.iconclass')).remove();
		$('#fifth').find('img').not($('.iconclass')).remove();
		$('#sixth').find('img').not($('.iconclass')).remove();
		$('#seventh').find('img').not($('.iconclass')).remove();
		$('#first').find('img').not($('.iconclass')).remove();
	});
	
});