//放大镜选项卡
$(function(){
	$.each($(".small-box-list img"),function(index,ele){
		$(this).on("click",function(){
			$(".small-box-list li").removeClass();
			$(this).parents("li").addClass("active");
			$(".big-box img").attr("src","../img/goodDetail/small-box-list"+(index+1)+".jpg");
			
		})
	})
})
//点击尺码助手打开
$(".size-helper-trigger").mouseover(function(){
	$(".size-helper-notice").css("display","block");
	
})
$(".size-helper-trigger").click(function(){
	$(".ui-dialog").css("display","block");
	
})
//点击关闭按钮关闭
$(".button-size-helper-notice-close").click(function(){
	$(".size-helper-notice").css("display","none");
})
//点击尺码助手详情close按钮
$(".ui-dialog-close").click(function(){
	$(".ui-dialog").css("display","none");
})
//吸顶
	$(function(){
		var fixTop=$(".datailTop").offset().top;
			$(window).scroll(function(){
					var scrollTop=$(this).scrollTop();
					if(scrollTop>=fixTop){
						$(".datailTop").css({position:"fixed",top:0});
						
					}else{
						$(".datailTop").css({position:"static"});
					}
				})
				
	})

//楼梯效果
var isClick=false;
		$(".datailTop ul li").click(function(){
			isClick=true;
			$(this).find("a").addClass("curr").parent().siblings().find("a").removeClass("curr");
//			获取当前滚动高度
			var iTop=$(".louti").eq($(this).index()).offset().top;
			$("html,body").stop().animate({scrollTop:iTop},500,function(){
				 isClick=false;
			})
			
		})
		
		$(window).scroll(function(){
			if(!isClick){
				var iScrollTop=$(this).scrollTop();
			$(".louti").each(function(){
				if(iScrollTop>=$(this).offset().top-$(this).prev().outerHeight()/2){
					$(".datailTop ul li").eq($(this).index()).find("a").addClass("curr").parent().siblings().find("a").removeClass("curr");
				}
			})
		}
			
	})

//轮播图
	$(function(){
				 var $recos=$(".reco-listbox-inner");
				 var len=$recos.length;
				 var recoWidth=$recos.eq(0).outerWidth();
				 var index=2;//即将显示图片索引
				 var timer=null;
				 var $first=$recos.eq(0).clone(true);
				 var $last=$recos.eq(len-1).clone(true);
				 //改变后的长度
				 len+=2;
				 $(".dt-reco-listbox").append($first);
				 $(".dt-reco-listbox").prepend($last);
				 $(".dt-reco-listbox").width(len*recoWidth);
				 //上面页数的点击
//				 $("#left").click(function(){
//				 	if($(".dt-reco-listbox").is(":animated"))
//				 	return;
//				 	index-=2;
//				 	move();
//				 })
//				 $("#right").click(function(){
//				 	//防止连续点击的时候出现空白
//				 	if($(".dt-reco-listbox").is(":animated"))
//				 	return;
//				 	move();
//				 })
				 //上面页数123
				 for(var i=0;i<len-2;i++){
				 	 $(".J_fake_a").eq(1).addClass("color").end().on("click",function(){
				 	index=$(this).index();
				 	move();
					 })
				 }
				//前后翻页
//				 $("#btn-next").eq(1).click(function(){
//				 	console.log(11)
//				 	//防止连续点击的时候出现空白
//				 	if($(".dt-reco-listbox").is(":animated"))
//				 	return;
//				 	move();
//				 })
//				 $("#btn-prev").eq(0).click(function(){
//				 	if($(".dt-reco-listbox").is(":animated"))
//				 	return;
//				 	index-=2;
//				 	move();
//				 })
				 //鼠标移动事件
				 $(".dt-reco-middle-box").hover(function(){
				 	clearInterval(timer);
				 },function(){
				 	timer=setInterval(move,5000);
				 }).trigger("mouseleave");//触发事件的执行
//				 timer=setInterval(move,500);
				//初始设置显示
				$(".dt-reco-listbox").css("left",-recoWidth);
			 	function move(){
				 	var iLeft=-1*index*recoWidth;
				 	//计算小圆点索引
				 	var curr=index>len-2 ? 0: index-1;
				 	$(".J_fake_a").eq(curr).addClass("color").siblings().removeClass("color");
				 	index++;
//				 	if(index>=len){
//				 		index=0;
//				 	}
				 	 $(".dt-reco-listbox").animate({left:iLeft},function(){
				 	 	if(index===len){
				 	 		$(".dt-reco-listbox").css("left",-recoWidth);
					 	 	index=2;
					 	}else if(index===1){
					 		$(".dt-reco-listbox").css("left",-1*(len-2)*recoWidth);
					 		index=len-1;
					 	}
					 	
					});
				}
				
			})