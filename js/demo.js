$(function(){
	
//全屏滚动
	var vH=$(window).height();
	var vW=$(window).width();
	$('.part').css('height',vH);
	$('.part').css('width',vW);
//	$('nav li').click(function(){
//		$('nav li').removeClass('ho');
//		$(this).addClass('ho');
//		var num=$(this).index();
//		$('body').animate({'scrollTop':num*vH},600);
//	});
	$('.sec1main div').css('width',vW);
	$('.sec1main div').css('height',vH);
//滚动对应导航显示
		$("nav a").click(function(e){
			$(window).unbind("scroll",scrollScreen);
			e.preventDefault();//阻止默认行为
			var id = $(this).attr("href");
			var offT = $(id).offset().top;
			$("body,html").animate({"scrollTop":offT-35},600,function(){
				$(window).bind("scroll",scrollScreen);	
			});
			$(this).parent().parent().find(".ho").removeClass("ho");
			$(this).addClass("ho");
		})
	
			$(window).bind("scroll",scrollScreen);
			function scrollScreen(){
				var href="";
				var winHalf=$(window).height()/2;
				var scrollT=$(window).scrollTop();
//					if(scrollT>winHalf*2){
//						$(".toTop").fadeIn()						
//					}else{
//						$(".toTop").fadeOut()
//					}
			
				$(".se").each(function(index,elem){
					var offT=$(this).offset().top;
					if(scrollT>=offT-35-winHalf){
						href=$(this).attr("id");
					}						
				})
				$("nav .ho").removeClass("ho");
				$("nav a[href=#"+href+"]").addClass("ho");					
		}
//sec1图片轮播
	var index=0;
	$('.oDIV1').clone().appendTo($('.sec1main'));
	function animate(){
		$('.sec1main').animate({'left':index*-vW},400,function(){
			if(index==4){
				index=0;
				$('.sec1main').css('left',0);
			}
			if(index==-1){				
				$('.sec1main').css({left:-4*vW}); 
				index=3;
			}
		});
		$('.yuan li.on').removeClass('on');
		$('.yuan li').eq(index).addClass('on');
		if(index==4){
			$('.yuan li').eq(0).addClass('on');
		}
		if(index==-1){
			$('.yuan li').eq(3).addClass('on');
		}
	}
	$('.yuan li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var i=$(this).index();
		index=i
		animate();
	});
	$('#nextbtn').click(function(){
		index++;
		animate();
	})
	$('#prebtn').click(function(){
//还有个小bug
		index--;
		animate();
	});
	function autoplay(){
		index++;
		animate();
	}
	var timer=setInterval(autoplay,2000);
	$('#sec1').hover(function(){
		clearInterval(timer);
		$('#nextbtn').css({'display':'block',});
		$('#prebtn').css({'display':'block',});
	},function(){
		timer=setInterval(autoplay,2000);
		$('#nextbtn').hide();
		$('#prebtn').hide();
	});
//城市与别墅
	$('.sec2btn').bind('click',function(){
		$('#sec2bl').hide();
		$('#box').show();		
	});
	$('.boxbtn').bind('click',function(){
		$('#box').hide();
		$('#sec2bl').show();
	});
	
//别墅与中国
	$('#sec3btn').bind('click',function(){
		$('#sec3bl').hide();
		$('#box1').show();
	});
	$('.box1btn').bind('click',function(){
		$('#box1').hide();
		$('#sec3bl').show();
	});
	
	
//别墅与园林
	$('#sec4a').bind('click',function(){
		$('#sec4bl').hide();
		$('#box2').show();	
	});
	$('.box2btn').bind('click',function(){
		$('#box2').hide();
		$('#sec4bl').show();	
	});
//别墅大社区
	$('.sec5a').bind('click',function(){
		$('#box3').show();	
		$('#sec5bl').hide();
	});
	$('.box3btn').bind('click',function(){
		$('#box3').hide();
		$('#sec5bl').show();	
	});
//樊街产品
	$('.sec6a').bind('click',function(){
		$('#box4').show();	
		$('#sec6bl').hide();
	});
	$('.box4btn').bind('click',function(){
		$('#box4').hide();
		$('#sec6bl').show();	
	});
});