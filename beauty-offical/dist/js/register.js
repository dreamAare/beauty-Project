//////用户名判断
var regName=/^(?![^a-zA-Z]+$)(?!\D+$)[\\W0-9A-Za-z]{4,16}/
$('.Name').focus(function () {
    $('.Name').css('border-bottom', '1px solid black')
    $('.NameTxt').text('')
})

$('.Name').blur(function () {
    let judgeName = $('.Name').val();
    if (!regName.test(judgeName)) {
        $('.Name').css('border-bottom', '1px solid #df2c2c')
        $('.NameTxt').text('请输入正确的(4-16位英文、数字组成)用户名')
    } else {
        $('.Name').css('border-bottom-color', '');
    }
})


///////邮箱判断
var regEmail=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

$('.Email').focus(function () {
    $('.Email').css('border-bottom','1px solid black')
    $('.EmailTxt').text('')
})

$('.Email').blur(function () {
    let judgeEmail=$('.Email').val()
    if(!regEmail.test(judgeEmail)){
    $('.Email').css('border-bottom','1px solid #df2c2c')
        $('.EmailTxt').text('请输入合法的邮箱地址')
    }else {
        $.ajax({
            url: '/user/checkRepeat',
            type: 'post',
            async : true,
            data: {judgeEmail},
            success : function (data) {
                if (data.result=='200'){
                    $('.Email').css('border-bottom', '1px solid #df2c2c')
                    $('.EmailTxt').text('该邮箱已存在')
                } else {
                    $('.Email').css('border-bottom-color', '');
                }
            },
            error : function (err) {
                console.log(err)
            }
        })

    }
})

///////密码判断
var regPass=/(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,16}$/
$('.Pass').focus(function () {
    $('.Pass').css('border-bottom','1px solid black')
    $('.PassTxt').text('')
})

$('.Pass').blur(function () {
    let judgePass = $('.Pass').val()
    if (!regPass.test(judgePass)||judgePass.length>16) {
        $('.Pass').css('border-bottom', '1px solid #df2c2c')
        $('.PassTxt').text('请输入正确的(8-16位英文、数字、符号组成)用户名')
    }
    else
    {
        $('.Pass').css('border-bottom-color','')
    }
})


///////日期判断
var regBirth=/^([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))/
$('.Birth').focus(function () {
    $('.Birth').css('border-bottom','1px solid black')
    $('.BirthTxt').text('')
})

$('.Birth').blur(function () {
    let judgeBirth = $('.Birth').val()
    if (!regBirth.test(judgeBirth)) {
        $('.Birth').css('border-bottom', '1px solid #df2c2c')
        $('.BirthTxt').text('请输入正确的(XXXX-XX-XX)日期格式')
    }
    else
    {
        $('.Birth').css('border-bottom-color','')
    }
})

//提交表单
$('#subBtn').on('click',mySubmit)
function mySubmit() {
    if(!$('.right').find('div').text()&&$('.Name').val()&&$('.Email').val()&&$('.Pass').val()&&$('.Birth').val()&&$('#check').get(0).checked==true){
        // console.log(1)
        let name = $('.Name').val();
        let email = $('.Email').val();
        let pass = $('.Pass').val();
        let birth = $('.Birth').val();
        var reqData = {name,pass,email,birth}
        $.ajax({
            url : '/user/register',
            data : reqData,
            type : 'post',
            success : function (data) {
                // console.log(data)
                // console.log(typeof data)
                if (data.result=='200'){
                    location.href = '/html/login.html'
                }
            },
            error : function (error) {
                //如果进入该函数，说明服务器错误
                console.log(error);
            }
        })
    }
}


