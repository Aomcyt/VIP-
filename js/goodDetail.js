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