//抽头尾函数
function loadHtml(url, targetId) {
	$.ajax({
		url: url,
		async: false,
		success: function(data) {
			$("#"+targetId).html(data);
		}
	})
}

//右边侧栏-top
$(function(){
	$(".count-box").mouseover(function(){
			$("#count-tip").stop().animate({right:"30px"},200);
		})
		$(".count-box").mouseout(function(){
			$("#count-tip").stop().animate({right:"-300px"},200);
		})
		//右边鼠标移动上
		$(".sidebar-nav-list li").mouseover(function(){
			$(this).find("p").eq(0).stop().animate({right:"30px"},200);
		})
		$(".sidebar-nav-list li").mouseout(function(){
			$(this).find("p").eq(0).stop().animate({right:"-300px"},200);
	})
//右边侧栏-top-end
//右边侧栏-top-bottom
	$(".vip-words").mouseover(function(){
		$(".vip-inner").stop().animate({right:"30px"},200)
		})
		$(".vip-words").mouseout(function(){
			$(".vip-inner").stop().animate({right:"-300px"},200)
	})

	//返回顶部
	$(".return-top").mouseover(function(){
		$("#return").stop().animate({right:"30px"},200)
	})
	$(".return-top").mouseout(function(){
		$("#return").stop().animate({right:"-300px"},200)
	})

	$(".return-top").click(function(){
		$("html body").scrollTop(0);
	})
})
 //返回顶部--end
//右边侧栏-top-bottom-end

//导航鼠标移上
	$(function(){
		$(".more").mouseover(function(){
			$(".nav-list-more").css({display:"block"});
		})
		$(".more").mouseout(function(){
			$(".nav-list-more").css({display:"none"});
		})
		$(".channel-item").mouseover(function(){
			$(this).find("div").eq(0).stop().animate({top:3},200)
		})
		$(".channel-item").mouseout(function(){
			$(this).find("div").eq(0).stop().animate({top:38},200)
		})
	})
//导航鼠标移上-END