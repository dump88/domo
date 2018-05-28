<!-- Hide
function killErrors() {
return true;
}
window.onerror = killErrors;
// -->


//漂浮窗口
$(function(){
	//获取要定位元素距离浏览器顶部的距离
	var navH = $(window).width()/2;
	//滚动条事件
	$(window).scroll(function(){
		//获取滚动条的滑动距离
		var scroH = $(this).scrollTop();
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		if(scroH>=navH){
		$(".bodyright dt").show();
		}else if(scroH<navH){
		$(".bodyright dt").hide();
		}
	})

//产品展示
$(function(){
	var $div_li = $("div.cpzs_item_title ul li");
	$div_li.mouseover(function(){
		$(this).addClass("selected")
		.siblings().removeClass("selected");
		var index = $div_li.index(this);
		$("div.content12 > div")
			.eq(index).show()
			.siblings().hide();
	})
})




//新闻动态
$(function(){
	$(".erfl_content cenav").find("ul li").last().css("padding-bottom","0");
	$(".ftnav_module_module").find("ul li").last().css("background","none");
	$(".yqlj_module_module").find("ul li").last().css("background","none");
	$(".td_right").find("ul li").eq(2).addClass("td_last");
	$(".nav_module").find("ul li").last().addClass("nav_last");
	$(".gyys_module_module").find("ul li").eq(2).addClass("eq3");
	$(".gyys_module_module").find("ul li").eq(3).addClass("eq3");
	var $div_li = $("div.xwdt_content_title ul li")
	$div_li.mouseover(function(){
		$(this).addClass("xwdt_selected")
		.siblings().removeClass("xwdt_selected");
		var index = $div_li.index(this);
		$("div.xwct_module > div")
			.eq(index).show()
			.siblings().hide();
	})
})


jQuery(function($){
	$(".gssl_module_module").find("ul li").eq(0).addClass("gssl_eq0");
	$("#indpro .con #indemo").find("ul li").each(function(){
		$(this).hover(function(){
			$(this).addClass("gssl_cover");
			},function(){
				$(this).removeClass("gssl_cover");
				})
	});
})


<!--indzp-->
$(function(){
	$(".indzp ul li .rsp").hide();	
	$(".indzp ul li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.5)
		$(this).find(".text").stop().animate({left:'0'}, {duration: 500})
	},
	function(){
		$(this).find(".rsp").stop().fadeTo(500,0)
		$(this).find(".text").stop().animate({left:'300'}, {duration: "fast"})
		$(this).find(".text").animate({left:'-300'}, {duration: 0})
	});
});
<!--indsp-->	

<!--Tteam-->
$(function(){
	$(".abteam").find("ul li").last().addClass("zpwuteam");
	$(".abteam ul li .rspteam").hide();	
	$(".abteam ul li").hover(function(){
		$(this).find(".rspteam").stop().fadeTo(500,0.5)
		$(this).find(".textteam").stop().animate({left:'0'}, {duration: 500})
	},
	function(){
		$(this).find(".rspteam").stop().fadeTo(500,0)
		$(this).find(".textteam").stop().animate({left:'300'}, {duration: "fast"})
		$(this).find(".textteam").animate({left:'-300'}, {duration: 0})
	});
});

$(function(){	
	$('.bodyright dd').hover(function(){
		$(this).toggleClass('hover');
		$(this).find("p").toggle();	
		$(this).find("div.pcdh_item").toggle();	
	});
})




$('.bodyright dt').click(function () {
	$('html,body').animate({
		scrollTop : '0px'
	}, 300);//返回顶部所用的时间 返回顶部也可调用goto()函数
});
});


/*导航*/
jQuery(function($){
	$(".nav_module ul li.yqlj-item").hover(function(){
	$(this).find(".second").slideDown();
	},function(){
		$(this).find(".second").slideUp();
	});
})
jQuery(function($){
	$(".nav_module ul li.yqlj-item").find(".second ul li").hover(function(){
	$(this).find(".third").slideDown();
	},function(){
		$(this).find(".third").slideUp();
	});
})	
	
	











