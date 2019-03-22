$('#jizhu').click(function () {
  $(this).toggleClass('img-p')
})


//判断账号是否符合正则
var regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
$('#username').focus(function () {
    $('#user').css('display','none')
    $('#username').css('border-bottom','1px solid black')
})

$('#username').blur(function () {
    let email = $('#username').val();
    if (!regEmail.test(email)) {
        $('#user').css('display','block')
        $('#username').css('border-bottom','1px solid red')
    } else {
        $('#user').css('display','none')
        $('#username').css('border-bottom','1px solid black')
    }
})

//判断密码是否符合正则
var regPwd = /(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,16}$/;
$('#password').focus(function () {
    $('#pass').css('display','none')
    $('#password').css('border-bottom','1px solid black')
})

$('#password').blur(function () {
    let Pwd = $('#password').val();
    if (!regPwd.test(Pwd)) {
        $('#pass').css('display','block')
        $('#password').css('border-bottom','1px solid red')
    } else {
        $('#pass').css('display','none')
        $('#password').css('border-bottom','1px solid black')
    }
})

$('#login').click(function () {
    if ($('#user').css('display')=='none'&&$('#pass').css('display')=='none'&&$('#password').val()&&$('#username').val()){
        let email = $('#username').val();
        let pwd = $('#password').val();
        var reqData = {email,pwd}
        $.ajax({
            url : '/user/login',
            type : 'post',
            data : reqData,
            success : function (data) {
                // console.log(data)
                if (data.result=='200'){
                    //勾选了记住密码选项时，需要把邮箱和密码 存入localstorage中
                    if ($('#jizhu').attr('class')=='img-p') {
                        // console.log('登录成功的同时，用户还勾选了记住密码选项')
                        var myEmail = $('#username').val();
                        var myPwd = $('#password').val();
                        localStorage.setItem('user',JSON.stringify({
                            'myEmail' : myEmail,
                            'myPwd' : myPwd
                        }))
                    }else {
                        localStorage.clear();
                    }

                    window.history.back();
                    // location.href = '/html/index.html'
                } else {
                  alert('你的账号或者密码错误')
                }
            },
            error : function (err) {

            }
        })
    }
})

//文档加载完成时，获得localstorage里面的值，如果有则渲染到页面中，如果没有则不做任何操作
window.onload = function () {
    var user = localStorage.getItem('user');
    user = JSON.parse(user);
    if (localStorage.getItem('user')){
        console.log(user,typeof user)
        $('#username').val(user.myEmail);
        $('#password').val(user.myPwd);
    }else {
        console.log(user,typeof user)
    }
}



