$(function(){
<!--城市与别墅-->
	var vH=$(window).height();
	var vW=$(window).width();
	$('.part').css('width',vW);
	$('.part').css('height',vH);
	var i=0;
	$('#boxmain1').clone().appendTo($('#boxmain'));
	$('#boxnextbtn').bind('click',function(){
		i++;
		if(i==5){
			$('#boxmain').css({left:0});
			i=1;
		}
		$('#boxmain').stop().css({left:-i*vW,})
	});
	
	$('#boxprebtn').bind('click',function(){
		i--;
		if(i==-1){
			i=3;
			$('#boxmain').css({left:-i*vW});
			
		}
		$('#boxmain').stop().css({left:-i*vW,});
	});
//城市与别墅隐藏第一页	
	$('#prea').bind('click',function(){
		$('#prea').addClass("bga");
		$('#nexta').removeClass("bga");
		$('#main1Div1').css({'display':'block',});
		$('#main1Div2').css({'display':'none',});
	});	
	$('#nexta').bind('click',function(){
		$('#nexta').addClass("bga");
		$('#prea').removeClass("bga");
		$('#main1Div1').css({'display':'none',});
		$('#main1Div2').css({'display':'block',});
	});
//城市与别墅隐藏第二页
	$('.spans').hide();
	$('.spans').eq(0).show();	
	$(".spans1").show();
	$(".spans1").eq(0).hide();
	$('#main2Div div').hide();
	$('#main2Div div:eq(0)').show();
	
	$('#main2btn span').click(function(){	
		$('.spans').hide();
		$(".spans1").show();
		$(this).children().first().hide();
		$(this).children().last().show();
		var num=$(this).index();
//		alert(num);
		$('#main2Div div').hide();
		$("#main2Div div:eq('+num+')").show();
	})
});