
var user_id=0;
checkLogin();
function checkLogin() {
    $.ajax({
        type:'post',
        url:'/myPage/checkLogin',
        data:{},
        success:function (data) {
            // console.log(data);
            if(data.session==false){
                location.href='login.html'
            }else{
                user_id=data.session.user_id;
                getCarList();
            }
        }
    });

}

function getCarList(){
    $.ajax({
        type:'post',
        url:'/cart/list',
        data:'user_id='+user_id,
        /* contentType:false,//给data编码，默认为true
         processData:false,*/
        success:function (data) {
            // console.log(data);
            $('#carList').text(data[0][0].number);
            $('#wishList').text(data[1][0].number2);
            $('.userName_p').text(data[2][0].username);
            $('.username3').text(data[2][0].username);
            $('.order1').text(data[3][0].number3);
            $('.order2').text(data[4][0].number4);
        }
    })
}



let divWidth=$('.inner_content').outerWidth(true);
$('.left_shoot').on('click',function () {
    let lineWidth=$('.line').width()
    let left=$('.content').position().left;
    if(left>=-2*divWidth+10){
        $('.content').css('left',left-divWidth);
        setTimeout(function () {
            $('.line').css('width',lineWidth+divWidth)
        },300)
    }
});

$('.right_shoot').on('click',function () {
    let lineWidth=$('.line').width()
    let left=$('.content').position().left;
    if(left<0){
        // console.log(left)
        $('.content').css('left',left+divWidth)
        setTimeout(function () {
            $('.line').css('width',lineWidth-divWidth)
        },300)

    }
});

//访问购物车，发送请求