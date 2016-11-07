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

//倒计时
function GetRTime(){
       var EndTime= new Date('2016/10/26 10:00:00'); //截止时间
       var NowTime = new Date();
       var t =EndTime.getTime() - NowTime.getTime();
       var d=Math.floor(t/1000/60/60/24);
       var h=Math.floor(t/1000/60/60%24);
       var m=Math.floor(t/1000/60%60);
       var s=Math.floor(t/1000%60);
	   document.getElementsByClassName("J_brand_countDownDay")[0].innerHTML = d + "天";
       document.getElementsByClassName("J_brand_countDownHour")[0].innerHTML = h + "时";
       document.getElementsByClassName("J_brand_countDownMin")[0].innerHTML = m + "分";
       document.getElementsByClassName("J_brand_countDownSec")[0].innerHTML = s + "秒";
   }
   setInterval(GetRTime,1000);
//倒计时--end

//动态加载
$(function(){
	load("../data/goodList/list1.json",".goods-list");
	list("../data/goodList/list0.json",".list-category");
})
function load(url,container){
		$.get(url,function(data){
			// console.log(data);
			for(var i in data){
					$(container).append(
						'<div class="goods-list-row">'+
							'<div class="goods-list-item c-goods J_pro_item  has-goods-slide">'+
								'<div class="goodslist-inner J-item_handle_height">'+
									'<div class="goods-slide J_item_mouseout_warp">'+
										'<div class="goods-image">'+
											'<a href="#" class="goods-image-link">'+
												'<img class="J_first_pic" src="'+data[i].src1+'"/>'+
												'<div class="goods-business-tag J_businessTag">'+
												'<img src="'+data[i].src2+'" width="45" height="45"/>'+
											'</div>'+
											'</a>'+
											'<div class="goods-corner-tag">'+'</div>'+
											'<div class="prepay-item-tag u-hidden">'+'</div>'+
										'</div>'+
										'<div class="goods-images">'+
											'<div id="J_imgThumbNormal126716903" class="J_goodsThumb goods-thumb  is-goods-thumb-current" data-id="126716903" data-img-type="normal">'+       
												'<a href="data[i].href1" class="goods-thumb-link" data-track="done">'+        
													'<img src="'+data[i].src3+'" width="54" height="69">'+
												'</a>'+       
											'</div>'+
											'<div class="J_goodsThumb goods-thumb" data-id="126716903" data-img-type="back">'+
												'<a href="'+data[i].href1+'" class="goods-thumb-link" data-track="done">'+   
													'<img src="'+data[i].src4+'" width="54" height="69" alt="牛仔蓝休闲宽松款连衣裙">'+
												'</a>'+                
											'</div>'+
											'<div class="J_goodsThumb goods-thumb" data-id="126716903" data-img-type="side">'+ 
												'<a href="'+data[i].href1+'" class="goods-thumb-link" data-track="done">'+ 
													'<img src="'+data[i].src5+'" width="54" height="69" alt="牛仔蓝休闲宽松款连衣裙">'+
												'</a>'+   
											'</div>'+
										'</div>'+
								'</div>'+
								'<div class="goods-info goods-price-info ">'+    
									'<span class="goods-discount">'+data[i].p1+'</span>'+    
										'<em class="goods-sells-price">'+
											'<span class="u-yen  currency-symbol">¥</span>'+
											'<span class="price">'+data[i].p2+'</span>'+
										'</em>'+            
										'<del class="goods-market-price">'+
											'<span class="u-yen  currency-symbol"></span>'+data[i].p3+'</del>'+
								'</div>'+
								'<div class="goods-info prepay-promo-info u-hidden">'+ 
									'<span class="goods-promo-price">'+'</span>'+ 
								'</div>'+
								'<h4 class="goods-info goods-title-info">'+   
									'<a href="'+data[i].href2+'" mars_sead="te_list_list_name1" target="_blank" data-track="done">'+data[i].p4+'</a>'+ 
								'</h4>'+
								'<div class="goods-info  goods-membership-benefits-info" id="J_list_warm_mprice_con_126716903" data-ismp="false">'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="goods-list-item c-goods J_pro_item  has-goods-slide">'+
								'<div class="goodslist-inner J-item_handle_height">'+
									'<div class="goods-slide J_item_mouseout_warp">'+
										'<div class="goods-image">'+
											'<a href="#" class="goods-image-link">'+
												'<img class="J_first_pic" src="'+data[i].src1+'"/>'+
												'<div class="goods-business-tag J_businessTag">'+
												'<img src="'+data[i].src2+'" width="45" height="45"/>'+
											'</div>'+
											'</a>'+
											'<div class="goods-corner-tag">'+'</div>'+
											'<div class="prepay-item-tag u-hidden">'+'</div>'+
										'</div>'+
										'<div class="goods-images">'+
											'<div id="J_imgThumbNormal126716903" class="J_goodsThumb goods-thumb  is-goods-thumb-current" data-id="126716903" data-img-type="normal">'+       
												'<a href="data[i].href1" class="goods-thumb-link" data-track="done">'+        
													'<img src="'+data[i].src3+'" width="54" height="69">'+
												'</a>'+       
											'</div>'+
											'<div class="J_goodsThumb goods-thumb" data-id="126716903" data-img-type="back">'+
												'<a href="'+data[i].href1+'" class="goods-thumb-link" data-track="done">'+   
													'<img src="'+data[i].src4+'" width="54" height="69" alt="牛仔蓝休闲宽松款连衣裙">'+
												'</a>'+                
											'</div>'+
											'<div class="J_goodsThumb goods-thumb" data-id="126716903" data-img-type="side">'+ 
												'<a href="'+data[i].href1+'" class="goods-thumb-link" data-track="done">'+ 
													'<img src="'+data[i].src5+'" width="54" height="69" alt="牛仔蓝休闲宽松款连衣裙">'+
												'</a>'+   
											'</div>'+
										'</div>'+
								'</div>'+
								'<div class="goods-info goods-price-info ">'+    
									'<span class="goods-discount">'+data[i].p1+'</span>'+    
										'<em class="goods-sells-price">'+
											'<span class="u-yen  currency-symbol">¥</span>'+
											'<span class="price">'+data[i].p2+'</span>'+
										'</em>'+            
										'<del class="goods-market-price">'+
											'<span class="u-yen  currency-symbol"></span>'+data[i].p3+'</del>'+
								'</div>'+
								'<div class="goods-info prepay-promo-info u-hidden">'+ 
									'<span class="goods-promo-price">'+'</span>'+ 
								'</div>'+
								'<h4 class="goods-info goods-title-info">'+   
									'<a href="'+data[i].href2+'" mars_sead="te_list_list_name1" target="_blank" data-track="done">'+data[i].p4+'</a>'+ 
								'</h4>'+
								'<div class="goods-info  goods-membership-benefits-info" id="J_list_warm_mprice_con_126716903" data-ismp="false">'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="goods-list-item c-goods J_pro_item  has-goods-slide">'+
								'<div class="goodslist-inner J-item_handle_height">'+
									'<div class="goods-slide J_item_mouseout_warp">'+
										'<div class="goods-image">'+
											'<a href="#" class="goods-image-link">'+
												'<img class="J_first_pic" src="'+data[i].src1+'"/>'+
												'<div class="goods-business-tag J_businessTag">'+
												'<img src="'+data[i].src2+'" width="45" height="45"/>'+
											'</div>'+
											'</a>'+
											'<div class="goods-corner-tag">'+'</div>'+
											'<div class="prepay-item-tag u-hidden">'+'</div>'+
										'</div>'+
										'<div class="goods-images">'+
											'<div id="J_imgThumbNormal126716903" class="J_goodsThumb goods-thumb  is-goods-thumb-current" data-id="126716903" data-img-type="normal">'+       
												'<a href="data[i].href1" class="goods-thumb-link" data-track="done">'+        
													'<img src="'+data[i].src3+'" width="54" height="69">'+
												'</a>'+       
											'</div>'+
											'<div class="J_goodsThumb goods-thumb" data-id="126716903" data-img-type="back">'+
												'<a href="'+data[i].href1+'" class="goods-thumb-link" data-track="done">'+   
													'<img src="'+data[i].src4+'" width="54" height="69" alt="牛仔蓝休闲宽松款连衣裙">'+
												'</a>'+                
											'</div>'+
											'<div class="J_goodsThumb goods-thumb" data-id="126716903" data-img-type="side">'+ 
												'<a href="'+data[i].href1+'" class="goods-thumb-link" data-track="done">'+ 
													'<img src="'+data[i].src5+'" width="54" height="69" alt="牛仔蓝休闲宽松款连衣裙">'+
												'</a>'+   
											'</div>'+
										'</div>'+
								'</div>'+
								'<div class="goods-info goods-price-info ">'+    
									'<span class="goods-discount">'+data[i].p1+'</span>'+    
										'<em class="goods-sells-price">'+
											'<span class="u-yen  currency-symbol">¥</span>'+
											'<span class="price">'+data[i].p2+'</span>'+
										'</em>'+            
										'<del class="goods-market-price">'+
											'<span class="u-yen  currency-symbol"></span>'+data[i].p3+'</del>'+
								'</div>'+
								'<div class="goods-info prepay-promo-info u-hidden">'+ 
									'<span class="goods-promo-price">'+'</span>'+ 
								'</div>'+
								'<h4 class="goods-info goods-title-info">'+   
									'<a href="'+data[i].href2+'" mars_sead="te_list_list_name1" target="_blank" data-track="done">'+data[i].p4+'</a>'+ 
								'</h4>'+
								'<div class="goods-info  goods-membership-benefits-info" id="J_list_warm_mprice_con_126716903" data-ismp="false">'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="goods-list-item c-goods J_pro_item  has-goods-slide">'+
								'<div class="goodslist-inner J-item_handle_height">'+
									'<div class="goods-slide J_item_mouseout_warp">'+
										'<div class="goods-image">'+
											'<a href="#" class="goods-image-link">'+
												'<img class="J_first_pic" src="'+data[i].src1+'"/>'+
												'<div class="goods-business-tag J_businessTag">'+
												'<img src="'+data[i].src2+'" width="45" height="45"/>'+
											'</div>'+
											'</a>'+
											'<div class="goods-corner-tag">'+'</div>'+
											'<div class="prepay-item-tag u-hidden">'+'</div>'+
										'</div>'+
										'<div class="goods-images">'+
											'<div id="J_imgThumbNormal126716903" class="J_goodsThumb goods-thumb  is-goods-thumb-current" data-id="126716903" data-img-type="normal">'+       
												'<a href="data[i].href1" class="goods-thumb-link" data-track="done">'+        
													'<img src="'+data[i].src3+'" width="54" height="69">'+
												'</a>'+       
											'</div>'+
											'<div class="J_goodsThumb goods-thumb" data-id="126716903" data-img-type="back">'+
												'<a href="'+data[i].href1+'" class="goods-thumb-link" data-track="done">'+   
													'<img src="'+data[i].src4+'" width="54" height="69" alt="牛仔蓝休闲宽松款连衣裙">'+
												'</a>'+                
											'</div>'+
											'<div class="J_goodsThumb goods-thumb" data-id="126716903" data-img-type="side">'+ 
												'<a href="'+data[i].href1+'" class="goods-thumb-link" data-track="done">'+ 
													'<img src="'+data[i].src5+'" width="54" height="69" alt="牛仔蓝休闲宽松款连衣裙">'+
												'</a>'+   
											'</div>'+
										'</div>'+
								'</div>'+
								'<div class="goods-info goods-price-info ">'+    
									'<span class="goods-discount">'+data[i].p1+'</span>'+    
										'<em class="goods-sells-price">'+
											'<span class="u-yen  currency-symbol">¥</span>'+
											'<span class="price">'+data[i].p2+'</span>'+
										'</em>'+            
										'<del class="goods-market-price">'+
											'<span class="u-yen  currency-symbol"></span>'+data[i].p3+'</del>'+
								'</div>'+
								'<div class="goods-info prepay-promo-info u-hidden">'+ 
									'<span class="goods-promo-price">'+'</span>'+ 
								'</div>'+
								'<h4 class="goods-info goods-title-info">'+   
									'<a href="'+data[i].href2+'" mars_sead="te_list_list_name1" target="_blank" data-track="done">'+data[i].p4+'</a>'+ 
								'</h4>'+
								'<div class="goods-info  goods-membership-benefits-info" id="J_list_warm_mprice_con_126716903" data-ismp="false">'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'
					)
				}
		})
	}
function list(url,container){
	$.get(url,function(data){
		for(var i in data){
			$(container).append(
				'<li class="list-cat-items J-lis-cat-items ">'+
			 				'<a href="#" id="J-category314" mars_sead="te_list_main_sort" class="J-secondLink J_firstsize cat-items-link " data-track="done">'+ 
			 					'<span class="cat-items-name">'+data[i].p1+'</span>'+ 
			 					'<em class="cat-items-num">'+data[i].p2+'</em>'+ 
			 				'</a>'+   
			 				'<div class="drop-cat-poup J-third-catpoup">'+ 
			 					'<i class="bding J-cat-bding">'+'</i>'+
			 				'</div>'+
			 			'</li>'
			)
		}
	})
}
//动态加载--end

//分页


