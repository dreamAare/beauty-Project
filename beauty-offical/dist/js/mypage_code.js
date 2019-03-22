
let user=localStorage.getItem('user');
user=JSON.parse(user);
//拿到本地存储用户的密码
let inputPassword=user.myPwd;

//点击修改按钮发送请求
var isRight=false;
$('#update').on('click',function () {
    let num=parseInt($('.num').text());
   //密码正则
    // /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/
    // let pwdReg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
    let pwdReg=/(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,16}$/;
   let oldPassword=$('.oldPassword').val();
   let newPassword=$('.newPassword').val();
   let ensurePassword=$('.ensurePassword').val();
   if(oldPassword==inputPassword&&inputPassword!=''){
       $('.span1').css('display','none');
       isRight=true;
   }else{
       $('.span1').css('display','block');
       isRight=false;
   }
    // console.log('2',isRight)
    if(newPassword==ensurePassword&&ensurePassword!=''){
        $('.span3').css('display','none');
        isRight=true;
    }else{
        $('.span3').css('display','block');
        isRight=false;
    }
    // console.log(isRight);
    if(pwdReg.test(newPassword)&&newPassword!=''){
        $('.span2').css('display','none');
        isRight=true;
    }else{
        $('.span2').css('display','block');
        isRight=false;
    }
    // console.log('3',isRight)
    // $('#myModal2').modal('show');
    if(isRight==true){
        $.ajax({
            type:'post',
            url:'/myPage/updatePassword',
            data:{'newPwd':newPassword},
            success:function (data) {
                // console.log(typeof data);
                let id=parseInt(data);
                if(id==1){
                    // alert('修改成功，请重新登录');
                    $('.container1').css('display','none');
                    $('.success_p').css('display','block');
                    $('.success_p2').css('display','block');
                    setInterval(function () {
                       num--;
                       $('.num').text(num);
                    },1000);
                    setTimeout(function () {
                        location.href='/myPage/list/1';
                    },3000);
                }else{
                    $('.container1').css('display','block');
                    $('.success_p').css('display','none');
                    $('.success_p2').css('display','none');
                }
            }
        })
    }
});