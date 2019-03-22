/*初始化弹窗提示框*/


$().ready(function() {
    $(".but1").click(function() {
        $(".table_container").toggle();
        $(".downShoot").toggle();
        $(".upShoot").toggle();
    });
});
$().ready(function() {
    $(".but2").click(function() {
        $(".Account").toggle();
        $(".yunFei_down").toggle();
        $(".yunFei_up").toggle();
    });
});
$().ready(function() {
    $(".but3").click(function() {
        $(".discount-div").toggle();
        $(".onsale_down").toggle();
        $(".onsale_up").toggle();
    });
});

$().ready(function() {
    $(".but4").click(function() {
        $(".pay-div").toggle();
        $(".pay_down").toggle();
        $(".pay_up").toggle();
    });
});

getTotalProduct();
function getTotalProduct() {
    var productsList=0;
    /*获得所有商品列表*/
    var trList=$('.tbody1').find('tr');
    for(var i = 0 ; i < trList.length;i++){
        productsList+=1;
    }
    $('.total_product').text(productsList);
}
/*获取商品总价钱*/
allProductMoney()
function allProductMoney() {
    var price=0;
    var moneyList=document.getElementsByClassName('money');
    for(var i = 0;i < moneyList.length;i++){
        price+=parseFloat(moneyList[i].innerText);
    }
    $('.payAllMoney').text(price);
}
/*选择运输方式*/
$('.delivery').on('click','.delivery_logo',function () {
    $('.delivery .delivery_logo').removeClass('bgBlack');
  $('.delivery .delivery_select').attr('data-choose','false');
    $(this).addClass('bgBlack');
    $(this).parent().parent().attr('data-choose','true');

    getYunFei();
    getTotalMoney()
});

/*支付方式*/
payId=0;
/*计算运费*/
getYunFei()
function getYunFei() {
    var yunFeiList= document.getElementsByClassName('delivery_select');
    // console.log(yunFeiList)
    for(var i=0 ; i < yunFeiList.length ; i++){
        if(yunFeiList[i].getAttribute('data-choose')=='true'){
            // console.log($(yunFeiList[i]))
            var yunFei=$(yunFeiList[i]).find('.yunFei').text();
            break;
        }
    }
    $('.total_yunFei').text(parseFloat(yunFei));
}

/*获得总付金额*/
getTotalMoney()
function getTotalMoney() {
    var summary=parseFloat($('.total_yunFei').text())+parseFloat($('.payAllMoney').text());
    var discount = parseFloat($('.discount').text())/10
    summary = summary*discount;
    $('.total').text(summary.toFixed(2))
}
/*是否保存地址*/
var isSave=false;
$('.save_pic').on('click',function () {
    if(isSave==false){
        $(this).addClass('save');
        $(this).attr('data-select','true');
        isSave=true;
    }else{
        $(this).removeClass('save');
        $(this).attr('data-select','false');
        isSave=false;
    }
});
/*同意获取个人信息*/
var isAgree=false;
$('.agree_pic').on('click',function () {
    if(isAgree==false){
        $(this).addClass('save');
        $(this).attr('data-agree','true');
        isAgree=true;
    }else{
        $(this).removeClass('save');
        $(this).attr('data-agree','false');
        isAgree=false;
    }
})

$('#mypay').on('click',mypay)
var regTell =/^1[34578]\d{9}$/;
var regEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
function mypay() {
    //正则判断用户所填的支付信息，填写成功好，才能付钱！
    var flag = true;
    var address = $('input[name=address]').val();
    var email = $('input[name=email]').val();
    var username = $('input[name=userName]').val();
    var usertell = $('input[name=userTell]').val();
    var necessary = $('#necessary').attr('data-agree');
    if(!address){
        $('.myHint').eq(0).css('display','inline-block')
        flag = false;
    }else {
        $('.myHint').eq(0).css('display','none')
    }
    if(!regEmail.test(email)){
        $('.myHint').eq(1).css('display','inline-block')
        flag = false;
    }else {
        $('.myHint').eq(1).css('display','none')
    }
    if(!username){
        $('.myHint').eq(2).css('display','inline-block')
        flag = false;
    }else {
        $('.myHint').eq(2).css('display','none')
    }
    if(!regTell.test(usertell)){
        $('.myHint').eq(3).css('display','inline-block')
        flag = false;
    }else {
        $('.myHint').eq(3).css('display','none')
    }
    if (necessary=='false') {
        $('.myHint').eq(4).css('display','inline-block')
        flag = false;
    }else {
        $('.myHint').eq(4).css('display','none')
    }
    let payWay=$('.pay-div .pay_choose')
    let newFalse=false;
    for(var k = 0 ; k < payWay.length ; k++){
        let okFalse=$(payWay[k]).attr('data-false');
        if(okFalse=='true'){
            newFalse=true
        }
    }
    if(newFalse==false){
        toastr.warning("请选择一个支付方式！");
        flag = false;
    }

    if (flag){   //填写成功后，如果勾选了保存地址，则将地址存到localStorage!
        // console.log('可以弹模态框了')
        if(payId==1){
            $('.twoCode>img').attr('src','/img/cheeck/zpZfb.jpg')
        }else if(payId==2){
            $('.twoCode>img').attr('src','/img/cheeck/zpWx.png')
        }
        $('#mypay').attr('data-target','#payModal')

        var uProvince = $('#address').find('select').eq(0).find('option:selected').text()
        var uCity = $('#address').find('select').eq(1).find('option:selected').text()
        var uCounty = $('#address').find('select').eq(2).find('option:selected').text()
        var uAddress = $('input[name=address]').val()
        var uEmail = $('input[name=email]').val()
        var uName = $('input[name=userName]').val()
        var uTell = $('input[name=userTell]').val()
        localStorage.setItem('address',JSON.stringify({
            'uProvince':uProvince,
            'uCity':uCity,
            'uCounty':uCounty,
            'uAddress':uAddress,
            'uEmail':uEmail,
            'uName':uName,
            'uTell':uTell
        }))
    }else {
        $('#mypay').attr('data-target','')
    }

}


window.onload=function(){
    getTotalProduct();
    allProductMoney();
    getYunFei();
    getTotalMoney()
    //从本地存储中拿地址，渲染到页面
    var myaddress = localStorage.getItem('address');
    myaddress = JSON.parse(myaddress);
    if (localStorage.getItem('address')){
        // console.log(myaddress,typeof myaddress)
        $('input[name=address]').val(myaddress.uAddress)
        $('input[name=email]').val(myaddress.uEmail)
        $('input[name=userName]').val(myaddress.uName)
        $('input[name=userTell]').val(myaddress.uTell)

    }
    var total = $('.total').text()
    $('#suremoeny').text(total);

};

//该函数在付款成功后执行，向订单表插入数据，并
//并将购物车里面选中的商品删除，或者更改数量
$('#surePay').on('click',addOrderList);
function addOrderList() {
    //删除或者更新购物车表的数据的参数
    var deleteArr =[];
    var updataArr= [];
    var mytr = $('.mytr');
    for (var i=0;i<mytr.length;i++){
        var carId = mytr.eq(i).attr('check-id');
        carId = parseInt(carId);
        deleteArr.push(carId);
    }
    for (var j=0;j<mytr.length;j++){
        var carId = mytr.eq(j).attr('check-id')
        var myQuantity = mytr.eq(j).find('.myQuantity').text();
        myQuantity = parseInt(myQuantity);
        carId = parseInt(carId);
        updataArr.push(carId,myQuantity);
    }


    //向订单表添加数据的参数
    var orderArr = [];
    var user_id = $('.tbody1').attr('user-id')
    console.log(user_id)

    let y=new Date().getFullYear();
    let m=new Date().getMonth()+1;
    let d=new Date().getDate();
    if (m<10){
        m='0'+m;
    }
    if (d<10){
        d='0'+d;
    }
    let nowdate = y+'-'+m+'-'+d;

    for (var i=0;i<mytr.length;i++) {
        var product_id = mytr.eq(i).attr('product-id')
        var color_id = mytr.eq(i).attr('color-id')
        var quantity = mytr.eq(i).find('.myQuantity').text();
        var fare = $('.total_yunFei').text();
        orderArr.push(user_id,product_id,color_id,quantity,fare,nowdate)
    }
    // console.log(nowdate,orderArr)

    // 第一次请求执行对购物车表的更新或者删除
    $.ajax({
        url : '/cart/delcart',
        type : 'post',
        data: {deleteArr,updataArr},
        traditional : true,
        success : function (data) {
            if (data.result==200){
                console.log(data.msg)
            } else {
                console.log(data.msg)
            }
        }
    });

    //第二次请求，执行对订单表插入数据
    $.ajax({
        url : '/cart/addorder',
        type : 'post',
        data : {orderArr},
        traditional : true,
        success : function (data) {
            if (data.result==200){
                setTimeout(function () {
                    toastr.success("购买成功！");
                    window.location.href = '/myPage/list/2'
                },1000)
            } else {
                // console.log('插入失败')
                toastr.warning("购买失败！");
            }
        }
    })
}


/*修改支付方式图片路径*/
$('.pay-div').on('click','.pay_choose',function () {
    $('.pay_choose').removeClass('save')

    let isFalse=$(this).attr('data-false');
    let id=$(this).attr('data-id');
    if(isFalse=='false'){
        $(this).addClass('save')
        $(this).attr('data-false','true')
        payId=id;
    }else{
        $(this).removeClass('save')
        $(this).attr('data-false','false')
        payId=0;
    }
})
