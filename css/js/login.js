//$.cookie("pwd", JSON.stringify($("#pwd").val()), {expires: 14, path: "/"});
$(function(){
$("#J_login_name").focus(function(){
		$(".u-form-tip").css({display:"block"})
	})
})
$(function(){
	isClick=true;
	if(isClick){
		$(".m-third-login a").click(function(){
			$(".z-third-way-in").css({display:"block"})
		})
	}
	
	
})


