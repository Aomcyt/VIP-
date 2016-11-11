////$.cookie("pwd", JSON.stringify($("#pwd").val()), {expires: 14, path: "/"});
//$(function(){
//$("#J_login_name").focus(function(){
//		$(".u-form-tip").css({display:"block"})
//	})
//})
//$(function(){
//	isClick=true;
//	if(isClick){
//		$(".m-third-login a").click(function(){
//			$(".z-third-way-in").css({display:"block"})
//		})
//	}
//	
//	
//})
//
//

$(function(){
	$("#J_login_submit").click(function(){
	var username = $("#J_login_name").val(),
		password = $("#J_login_pwd").val();
				
		var xhr = new XMLHttpRequest();
		xhr.open("post","login.php",true);
		 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send("username="+username+"&password="+password);
		xhr.onreadystatechange =function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					var data = xhr.responseText;
					data = JSON.parse(data);
					console.log(data)
					if(data.status === 0){
						console.log("成功");
						
						var datas={
								name: username,
								pass:password
							};
							datas = JSON.stringify(datas);  //对象中解析出字符串
							localStorage.setItem("user",datas);
							var ret = JSON.parse(localStorage.getItem('user'));
							
							// var ret =JSON.parse(localStorage.setItem("data"));
							// var user=JSON.parse(localStorage.getItem('user'));    //存储多个
							// if(!user){
							// 	user=[];
							// }
							// user.push(data);
							// user=JSON.stringify(user);
							// localStorage.setItem('user',user);
							// var ret = JSON.parse(localStorage.getItem('user'));
						//cookie
				console.log(ret)
						//页面跳转
						// window.location.href = "golin.html";
						location.assign("index.html");
					}
					else {
						$(".u-form-tip").html("用户名不存在或密码错误").show();
					}
				}
			}
		}
});
});