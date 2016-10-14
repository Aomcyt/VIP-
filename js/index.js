//动态加载
$(function(){
	$.get("../data/index/list0.json",function(data){
		// console.log(data);
		for(var i in data){
				$(".louti floor1").append(
				' <div class="floor1-inner">'+
					'<a href="#">'+
						'<img class="floor1-img" src="'+data[i].src1+'" alt="JUZUI时光依存 凝聚风尚">'+
					'</a>'+
					'<a href="#" class="floor1-brand">'+
						'<img src="'+data[i].src2+'" class="floor-brand-img"/>'+
						'<p class="floor1-brand-name1">'+data[i].p1+'</p>'+
						'<p class="floor1-brand-name2">'+data[i].p2+'</p>'+
						'<div class="floor1-inner-hover" >'+
							'<div class="inner-hover-list">'+
								'<a href="#" class="list-item">'+
									'<img class="inner-hover-img" src="'+data[i].src3+'"/>'+
								'<p class="floor1-price">'+data[i].price+'</p>'+
								'</a>'+
								'<a href="#" class="list-item">'+
									'<img class="inner-hover-img" src="'+data[i].src3+'"/>'+
								'<p class="floor1-price">'+data[i].price+'</p>'+
								'</a>'+
								'<a href="#" class="list-item">'+
									'<img class="inner-hover-img" src="'+data[i].src3+'"/>'+
								'<p class="floor1-price">'+data[i].price+'</p>'+
								'</a>'+
							'</div>'+
							'<a href="#" >'+
								'<img class="floor1-inner-hover-logo" src="'+data[i].src4+'"/>'+
							'</a>'+
							'<span class="love"><img src="'+data[i].src5+'"/></span>'+
							'<a href="#" class="ground">'+data[i].join+'</a>'+
						'</div>'+
					'</a>'+
				'</div>'
				)
			}
	})
})





//楼梯
	$(function(){
		
			var isClick=false;
			$("#loutiNav ul li").click(function(){
				isClick=true;
				$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
	//			获取当前滚动高度
				var iTop=$(".louti").eq($(this).index()).offset().top;
				$("html,body").scrollTop(iTop);
					 isClick=false;
				})
			
			$(window).scroll(function(){
				if(!isClick){
					var iScrollTop=$(this).scrollTop();
				$(".louti").each(function(){
					if(iScrollTop>=$(this).offset().top-$(this).prev().outerHeight()/2){
						$("#loutiNav ul li").eq($(this).index()).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
						}
					})
				}
				
			})
	})
//吸顶
	$(function(){
		var fixTop=$("#box-header-nav").offset().top;
			$(window).scroll(function(){
					var scrollTop=$(this).scrollTop();
					if(scrollTop>=fixTop){
						$("#box-header-nav").css({position:"fixed",top:0});
						
					}else{
						$("#box-header-nav").css({position:"static"});
					}
				})
				
	})
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

//右边侧栏-top
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
 //返回顶部--end
//右边侧栏-top-bottom-end

//轮播图

			var oBox=document.getElementById("banner");
			var oSlider=document.getElementsByClassName("slider")[0];
			var sliderlist=document.getElementsByClassName("slider-list");
			var oUl=document.getElementsByClassName("slider-bottom-list")[0];
			var aLi=oUl.getElementsByTagName("li");
			var oPre=document.getElementsByClassName("prev");
			var oNext=document.getElementsByClassName("next");
			var iNow=0;//当前图片索引
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				iNow=this.index;
				tab();
			}
		}
			autoPlay();//打开就自动播放
			oNext.onclick=function(){
				iNow++;
				tab();
			}
			oPre.onclick=function(){
				iNow--;
				tab();
			}
			oSlider.onmouseover=function(){
				clearInterval(oSlider.timer);
				
			}
			oSlider.onmouseout=function(){
				autoPlay();
				
			}
			function autoPlay(){
				clearInterval(oSlider.timer);
				oSlider.timer=setInterval(function(){
					iNow++;//图片变换
					if(iNow==aLi.length){
						iNow=0;
					}
					tab();
				},3000)
			}
			function tab(){//切换函数
				for(var i=0;i<aLi.length;i++){
					aLi[i].className="";
					startMove(sliderlist[i],{opacity:0});
				}
					aLi[iNow].className="active";
					startMove(sliderlist[iNow],{opacity:100});
				
			}