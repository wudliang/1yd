$(function(){
	var vH=$(window).height();
	var vW=$(window).width();
	$('.part').css('width',vW);
	$('.part').css('height',vH);
//城市与别墅隐藏
<!--城市与别墅-->
	var i=0;
	$('#boxmain1').clone().appendTo($('#boxmain'));
	$('#boxnextbtn').bind('click',function(){
		i++;
		if(i==5){
			$('#boxmain').css({left:0});
			i=1;
		}
		$('#boxmain').stop().animate({left:-i*vW,},400)
	});
	
	$('#boxprebtn').bind('click',function(){
		i--;
		if(i==-1){
			$('#boxmain').css({left:-4*vW});
			i=3;			
		}
		$('#boxmain').stop().animate({left:-i*vW,},400);
	});
//城市与别墅隐藏第一页	
	$('#prea').bind('click',function(){
		$('#prea').addClass("bga");
		$('#nexta').removeClass("bga");
		$('#main1Div1').show();
		$('#main1Div2').hide();
	});	
	$('#nexta').bind('click',function(){
		$('#nexta').addClass("bga");
		$('#prea').removeClass("bga");
		$('#main1Div1').hide();
		$('#main1Div2').show();
	});
//城市与别墅隐藏第二页
	$('.spans').hide();
	$('.spans').eq(0).show();	
	$(".spans1").show();
	$(".spans1").eq(0).hide();
	$('#main2Div img').hide();
	$('#main2Div img:eq(0)').show();	
	$('#main2btn span').click(function(){	
		$('.spans').hide();
		$(".spans1").show();
		$(this).children().first().hide();
		$(this).children().last().show();
		var a=$(this).index();
//		alert(a);
		$('#main2Div img').hide();
		$('#main2Div img:eq('+a+')').show();
	});
	
	
	
//别墅与中国隐藏
	$('#box1r button').find('img').hide();
	$('#box1r button img:eq(0)').show();
	$('#box1Div').find('img').hide();
	$('#box1Div img:eq(0)').show();
	$('#box1r button').click(function(){
		$('#box1r button').find('img').hide();
		$(this).find('img').show();
		var nu=$(this).index();
		var nu=nu-1;
//		alert(nu);
		$('#box1Div').find('img').hide();
		$('#box1Div').find('img:eq('+nu+')').show();	
	})
//box3别墅大社区	
	var d=0;
	$('#box3main1').clone().appendTo($('#box3main'));
	$('#box3nextbtn').bind('click',function(){
		d++;
		if(d==4){
			$('#box3main').css({left:0});
			d=1;
		}
		$('#box3main').stop().animate({left:-d*vW,},400)
	});
	
	$('#box3prebtn').bind('click',function(){
		d--;
		if(d==-1){			
			$('#box3main').css({left:-3*vW});
			d=2;
		}
		$('#box3main').stop().animate({left:-d*vW,},400)
	});
	
//box4樊街产品
	var m=0;
	$('#box4main1').clone().appendTo($('#box4main'));
	$('#box4nextbtn').bind('click',function(){
		m++;
		if(m==4){
			$('#box4main').css({left:0});
			m=1;
		}
		$('#box4main').stop().animate({left:-m*vW},400)
	});
	
	$('#box4prebtn').bind('click',function(){
		m--;
		if(m==-1){			
			$('#box4main').css({left:-3*vW});
			m=2;			
		}
		$('#box4main').stop().animate({left:-m*vW,},400)
	});

//户型鉴赏
	$('#box4main1Divr div img:nth-child(2)').hide();
	$('#box4main1Divr div:nth-child(1) img:nth-child(1)').hide();
	$('#box4main1Divr div:nth-child(1) img:nth-child(2)').show();
	$('#box4main1Divl').find('img').hide();
	$('#box4main1Divl').find('img:eq(0)').show();
	$('#box4main1Divr div').click(function(){
//		var str=$(this).find('img').attr('src');
//		var po=str.lastIndexOf('.');
//		var picName=str.substring(0,po);
//		$('#box4main1Divr div').find('img').attr('src');
//		$(this).find('img').attr('src',picName+'_h.png');
		$('#box4main1Divr div img:nth-child(2)').hide();
		$('#box4main1Divr div img:nth-child(1)').show();
		$(this).find('img:nth-child(1)').hide();
		$(this).find('img:nth-child(2)').show();
		var num=$(this).index();
//		alert(num);
		$('#box4main1Divl img').hide();
		$('#box4main1Divl img:eq('+num+')').show();
	});

//户型鉴赏
	$('.box4main2btn img').hide();
	$('.box4main2btn img:eq(0)').show();
	$('#box4main2Div div').hide();
	$('#box4main2Div div:eq(0)').show();
	$('.box4main2btn').click(function(){
		$('.box4main2btn img').hide();
		$(this).find('img').show();
		var num=$(this).index();
			num=num-1;
//		alert(num);
		$('#box4main2Div div').hide();
		$('#box4main2Div div:eq('+num+')').show();
		
	})
//样板间
	var q=0;
//	$('#box3main1').clone().appendTo($('#box3main'));
	$('#box4main3R').bind('click',function(){
		q++;
		if(q==4){
			$('#box4main3DivBpic').css({left:0});
			q=1;
		}
		$('#box4main3DivBpic').stop().animate({left:-q*818,},400)
	});
	
	$('#box4main3L').bind('click',function(){
		q--;
		if(q==-1){
			$('#box4main3DivBpic').css({left:-2454});
			q=2;
		}
		$('#box4main3DivBpic').stop().animate({left:-q*818,},400);
	});
	$('#box4main3DivBpic img').click(function(){
		var picName=$(this).attr('src');
		$('#box4main3DivT img').attr('src',picName);
	})
});