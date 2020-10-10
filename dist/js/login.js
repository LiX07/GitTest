define(["jquery","jquery-cookie"],function($){

    function login(){
        var ophoneL = $(".mainbox main .loginbox .login form").find(".phoneL");
        var opasswordL = $(".mainbox main .loginbox .login form").find(".passwordL");
        
        var ophoneR = $(".mainbox main .registerbox .register form").find(".phoneR");
        var opasswordR = $(".mainbox main .registerbox .register form").find(".passwordR");
        var oipasswordR = $(".mainbox main .registerbox .register form").find(".ipasswordR");
        
        // var oinput = $(".mainbox main ").find("input");
        ophoneL.focus(function(){
            // css = this.css;
            ophoneL.css("border","1px solid black");
        })
        ophoneL.blur(function(){
            var ovalue = this.value;
            if(!ovalue){
                $(".phoneLspan").html("输入框不能为空");
            }else{
               if(ovalue.length != 11){
                $(".phoneLspan").html("请您输入有效的手机号");
                } 
            }
        })

        opasswordL.focus(function(){
            opasswordL.css("border","1px solid black");
        }).blur(function(){
            var ovalue = this.value;
            if(!ovalue){
                $(".passwordLspan").html("输入框不能为空");
            }else{
                var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
               if(!RegExp(reg).test(ovalue)){
                $(".passwordLspan").html("密码须为6~16位数字和字母组合");
                } else{
                    $(".passwordLspan").html("");
                }
            }
        })

        // register
        ophoneR.focus(function(){
            // css = this.css;
            ophoneR.css("border","1px solid black");
        }).blur(function(){
            var ovalue = this.value;
            if(!ovalue){
                $(".phoneRspan").html("输入框不能为空");
            }else{
               if(ovalue.length != 11){
                $(".phoneRspan").html("请您输入有效的手机号");
                } 
            }
        })

        opasswordR.focus(function(){
            opasswordR.css("border","1px solid black");
        }).blur(function(){
            var ovalue = this.value;
            if(!ovalue){
                $(".passwordRspan").html("输入框不能为空");
            }else{
                var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
               if(!RegExp(reg).test(ovalue)){
                $(".passwordRspan").html("密码须为6~16位数字和字母组合");
                } else{
                    $(".passwordRspan").html("");
                }
            }
        })
        
        oipasswordR.focus(function(){
            oipasswordR.css("border","1px solid black");
        }).blur(function(){
            var pvalue = this.value;
            if(!pvalue){
                $(".ipasswordRspan").html("输入框不能为空");
            }else{
               if(pvalue == $(".passwordR").value){
                $(".ipasswordRspan").html("");
                } else{
                    $(".ipasswordRspan").html("确认密码输入不匹配，请重新输入");
                }
            }
        })

    }

    return {
        login:login,
    }
})