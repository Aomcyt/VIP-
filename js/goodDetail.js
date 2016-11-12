//放大镜
$(function(){
	 var zoomWidth=$(".zoom").width();
	 var zoomHeight=$(".zoom").height();
	 var boxWidth=$(".big-box").width();
	 var boxHeight=$(".big-box").height();
	 var largeWidth=$(".large-box").width();
	 var largeHeight=$(".large-box").height();
//	 鼠标事件
	 $(".big-box").hover(function(){
	 	$(".large-box").show();
	 	$(".zoom").show();
	},function(){
		$(".large-box").hide();
		$(".zoom").hide();
	}).on("mousemove",function(e){
		var x=e.pageX;
		var y=e.pageY;
		$(".zoom").offset({
			top:y-zoomHeight/2,
			left:x-zoomWidth/2
		})
		//获取镜头相对其父元素的坐标
			var cor=$(".zoom").position();
			var _top=cor.top;
			var _left=cor.left;
			//临界值
			if(_top<0){
				_top=0;
			}else if(_top>boxHeight-zoomHeight){
				_top=boxHeight-zoomHeight;
			}
			if(_left<0){
				_left=0;
			}else if(_left>boxWidth-zoomWidth){
				_left=boxWidth-zoomWidth;
			}
			$(".zoom").css({
				top:_top,
				left:_left
			})
			$(".large-box img").css({
				top:-2*_top,
				left:-2*_left
			})
	})
	//放大镜选项卡
	$.each($(".small-box-list img"),function(index,ele){
		$(this).on("click",function(){
			$(".small-box-list li").removeClass();
			$(this).parents("li").addClass("active");
			$(".big-box img").attr("src","../img/goodDetail/small-box-list"+(index+1)+".jpg");
			$(".large-box img").attr("src","../img/goodDetail/small-box-list"+(index+1)+".jpg");
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
	 var recos=$(".reco-listbox-inner");
	 var len=recos.length;
	 var recoWidth=recos.eq(0).outerWidth();
	 var index=2;//即将显示图片索引
	 var timer=null;
	 var first=recos.eq(0).clone(true);
	 var last=recos.eq(len-1).clone(true);
	 //改变后的长度
	 len+=2;
	 $(".dt-reco-listbox").append(first);
	 $(".dt-reco-listbox").prepend(last);
	 $(".dt-reco-listbox").width(len*recoWidth);

	 //前后翻页的点击
	 $(".J_reco_perv").click(function(){
	 	if($(".dt-reco-listbox").is(":animated"))
	 	return;
	 	index-=2;
	 	move();
	 })
	 $(".J_reco_next").click(function(){
	 	//防止连续点击的时候出现空白
	 	if($(".dt-reco-listbox").is(":animated"))
	 	return;
	 	move();
	 })
	 //上面页数123
	 $(".page-num a").on("click",function(){
	 	index=$(this).index()+1;
	 	move();
	});


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
	 	$(".page-num a").eq(curr).addClass("color").siblings().removeClass("color");
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
	
	//选项卡
$("#aboutUs-logo li").mouseover(function(){
	$(".logo-list-inner .au-main").eq($(this).index()).css({display:"block"}).siblings().css({display:"none"})
})

//购物车
$("#cartAdd-sumbit").click(function(){
	//获取数据
	var _name=$(".title-left-text").html();
	var _price=$("price-num").html();
	var _size=$(".size-list-item-name").html();
	var _color=$(".color-list-item").html();
	//创建对象
	var product={
		name:_name,
		price:_price,
		size:_size,
		_color:color,
		amount:1
	}
	//将当前选购的商品信息保存到cookie中
	$.cookie.json=true;//插件配置
	var products=$.cookie("products");
	if(!product)
		product=[];
		//判断是否存在已选商品信息，若有，则修改数量
		var index=exists(_name,products);
		if(index!==-1){//存在，修改数量
			products[index].amount++;
		}else{
			products.push(product);
		}
		//保存到cookie中
		$.cookie("products", products, {expires:7, path:"/"});
})
function exist(class,products){
	var 
}
