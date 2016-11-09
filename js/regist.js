//手机号验证
function $(id) {
	return document.getElementById(id);
}
var regs = {
	tsReg: /[^\u4e00-\u9fa5a-zA-Z0-9]/,
	pwdReg: /^.{6,20}$/,
	numReg: /\d/,
	strReg: /[a-zA-Z]/,
}
window.onload=function(){
	var mobile = $("mobile");
	var pwd = $("pwd");
	var pwd2 = $("pwd2");
	var email = $("email");
	var btn = $("J_mobile_reg_button");
	mobile.onkeyup=mobile.onfocus=mobile.onblur=function(evt){
		var e=evt || window.event;
		checkMobile(e);
	}
	function checkMobile(_e){
		var type;
		if(_e){
			type=_e.type;
		}
		var value=mobile.value;
		var box=mobile.parentNode;
		var tip=box.nextElementSibling;
		var tip1=document.getElementsByClassName("tip-warn2")[0];
		var tip2=document.getElementsByClassName("tip-warn1")[0];
		var input1=document.getElementsByClassName("reg-input")[0];
	
		if(type=="focus"){
			if(value==""){
				tip2.style.display="block";
				return false;
			}
		}
		if(type=="blur"){
			if(value==""){
				tip2.style.display="none";
				tip1.style.display="block";
				input1.className="reg-input2";
				return false;
			}
		}
	}
}
