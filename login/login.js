 
var code ; //在全局定义验证码   
          
function createCode(){ 
	code = "";    
	var codeLength = 4;//验证码的长度   
	var checkCode = document.getElementById("code");    
	var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
		'S','T','U','V','W','X','Y','Z');//随机数   
	for(var i = 0; i < codeLength; i++) {//循环操作   
		var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）   
		code += random[index];//根据索引取得随机数加到code上   
	}   
	checkCode.value = code;//把code值赋给验证码   
} 
		          //校验验证码   
function validate(){
	var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写         
	if(inputCode.length <= 0) { //若输入的验证码长度为0   
		alert("请输入验证码！"); //则弹出请输入验证码 
		return false;
	}else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时   
		alert("验证码错误！"); //则弹出验证码输入错误   
		createCode();//刷新验证码   
		document.getElementById("input").value = "";//清空文本框   
		return false;
	}else{
		return true;
	}
} 


function check() {
				if(validate()){
					
					 var a=document.getElementById('username').value;
					 var b=document.getElementById('password').value;
					if(a=="HG"&&b=="hg"){
						alert("Welcome my Load!");
						window.location.href="users/HG.html"
					}
					else if(a=="1240579929@qq.com"&&b=="WACHGHHHHH"){
					    alert("Welcome!");
							window.location.href="users/1240579929@qq.com.html"}
					else if(a=="?"&&b=="110"){
					    alert("Welcome  巅峰召唤师!");
							window.location.href="users/hg@hg.com.html"}
					else if(a=="1220090106@qq.com"&&b=="cl269268"){
						window.location.href="users/1220090106@qq.com.html"}
					else if(b==""){
						alert("No Password!\nOpening the Alive-Model.");
						window.location.href="users/alive.html?&"+a;
					}
					else
					    window.location.href="users/aliver.html?&"+a;
					
				}
			}
