
$(function(){
	var k = false;
	//用户名
	$("#mobile").blur(function(){
		if($("#mobile").val().length ==0){
			$(".tip-warn2").html("手机号不能为空").show().css("top","-40px");
			$(".tip-warn1").hide();
			$(".reg-moblie i").hide();
		}
		else if((/^1[34578]\d{9}$/.test(this.value))){
			
		$(".reg-moblie i").show();
	$(".tip-warn1,.tip-warn2").hide();
		}// return ;
		else {
	$(".tip-warn1").html("请输入正确的手机号码").show().css("top","-20px");
	$(".tip-warn2").hide();
	$(".reg-moblie i").hide();
	}
		var xhr = new XMLHttpRequest();
	
			xhr.open("GET","check_username.php?username="+this.value, true);
			xhr.send();
			xhr.onreadystatechange = function(){
				if(xhr.readyState===4){
					if(xhr.status === 200){
						var txt = xhr.responseText;
						var json = JSON.parse(txt);
						if(json.status===0){
							console.log("用户名存在，不可以注册")
						}
						else{
							console.log("可以注册")
							k = true;
						}
					}
				}
			}
	
	
});

	

	
	//密码
	$("#pwd").blur(function(){
		
	if($(this).val().length==0){
		$(".tip-warn1").html("密码不能为空").show().css("top","35px");
	}
		else if(!(/^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/.test(this.value))) {
					$(".tip-warn2").html("请输入正确的密码").show().css("top","30px");
					$(".tip-warn1").hide();
					 k =false;
					return;
				}
		

				else{$(".tip-warn2").hide();$(".tip-warn1").hide();
						k = true;
				}
	});
	
	
	$(".ui-btn-loading-before").click(function(){
		if($("#J_mobile_agree").prop("checked")===true){
			k = true;
		}
		else{
			return;
		}
		if(!k){
			return;
		}
	

		if($("#pwd2").val()!=$("#pwd").val()){
			$(".tip-warn2").html("两次输入密码不同").css("top","85px").show()
			
		}
		else{
			$(".tip-warn2").hide();
			var uname = $("#mobile").val(),
				upwd = $("#pwd").val();
			//ajax像服务器提交用户注册信息   post提交
			var xhr = new XMLHttpRequest();
			xhr.open("POST","register_do.php",true);
			//post 提交添加下面这句
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xhr.send("username="+uname+"&password="+upwd);
			//处理相应
			xhr.onreadystatechange = function(){
				if(xhr.readyState===4){
					if(xhr.status ===200){
						var txt = xhr.responseText;
						console.log(txt);
						var json = JSON.parse(txt);
						if(json.status === 0){


							
							alert("成功")
							location.assign("login.html");
							
							
						}
						else{
							console.log("失败");
						}
					}
				}
			
		
		}
//	}
	};
});
});
