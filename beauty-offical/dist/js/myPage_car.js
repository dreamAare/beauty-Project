


let product_list=$('.myTbody>tr');
// console.log(product_list.length)
$('.all_products').text(product_list.length);
if(product_list.length==0){
    $('.car_text').css('display','block')
}else{
    $('.car_text').css('display','none')
}
let money2=document.getElementsByClassName('total_money');
for(var i = 0 ; i < money2.length ; i++){
    console.log(money2[i].innerText);
    let text=parseFloat(money2[i].innerText).toFixed(2);
    money2[i].innerText=text;
}
/*获得单个商品总价*/
function getTotalMoney() {
    var mountMoney=0;
    var  trList=document.getElementsByClassName('select_circle');
    for(var j=0 ; j < trList.length ; j++){
        if(trList[j].getAttribute('data-select')=='true'){
            let singleMoney=parseFloat($(trList[j]).parent().parent().find('.total_money').text());
            mountMoney+=singleMoney;
        }
    }
    /*赋值，保留两位小数*/
    $('.payAllMoney').text(mountMoney.toFixed(2));
    /*支付款总价钱*/
    var pro_money=parseFloat($('.payAllMoney').text());
    /*折扣*/
    var discount=parseFloat($('.discount').text());
    /*总价包括运费以及打折，计算出来进行汇总*/
    var payMountMoney=pro_money*0.9;

    $('.total').text(payMountMoney.toFixed(2));
}
/*全选添加背景图片*/
var haveBgPic=false;
//所有的td选中框的列表
var allSelect_circle=$('.select_circle');
var totalRedCircle=allSelect_circle.length;

/*全选按钮*/
$('.circle').on('click',function () {
    if(haveBgPic==false){
        /*当全选按钮选中时，把所有的td加上选中的class，并且把属性data-select赋值为true，表示选中状态*/
        $(this).addClass('addBgPic');
        $('.select_circle').addClass('addBgPic');
        $('.total_quantity').text(totalRedCircle);
        haveBgPic=true;
        $('.select_circle').attr('data-select','true');
        isSelected();
    }else{

        /*当全选按钮没选中时，把所有的td移出选中的class，并且把属性data-select赋值为false，表示未选中状态*/
        $(this).removeClass('addBgPic');
        $('.select_circle').removeClass('addBgPic');
        $('.total_quantity').text(0);
        haveBgPic=false;
        $('.select_circle').attr('data-select','false');
        isSelected();
    }
    getTotalMoney()
});

/*单个商品选择*/
$('.myTbody').on('click','.select_circle',function () {
    /*给每个勾选框单独添加一个属性来进行判断*/
    var selected=$(this).attr('data-select');
    if(selected=='false'){
        $(this).addClass('addBgPic');
        $(this).attr('data-select','true');
        /*调用函数*/
        getTotalMoney()
        isSelected();
    }else{
        /*单个商品的勾选框通过调用函数，
        计算所有商品被勾选的数量来得到购买的件数*/
        $(this).removeClass('addBgPic');
        $(this).attr('data-select','false');
        $('.circle').removeClass('addBgPic');
        haveBgPic=false;
        getTotalMoney()
        isSelected();
    }
});

function isSelected(){
    /*判断有哪些商品是否被选中，选中加一*/
    num2=0;
    var selectBox=document.getElementsByClassName('select_circle');
    for(var i = 0 ; i < selectBox.length;i++){
        /* console.log(w[i].getAttribute('data-select'));*/
        if(selectBox[i].getAttribute('data-select')=='true'){
            num2+=1;
        }
    }
    $('.top_select').text(num2);
    $('.all_products').text(selectBox.length)
    $('.total_quantity').text(num2);
}
/*色号下拉框li的点击事件委托*/

/*减商品*/
$('.myTbody').on('click','.reduce',function () {
    /*减商品，通过事件委托，依次通过父元素进行得到每一个节点*/
    var text=$(this).parent().find('.number>span').text();
    var myTr=$(this).parent().parent().parent();
    var pay_money=myTr.find('.money').find('.pay_money').text();

    var span_quantity=$(this).parent().find('.number>span');
    if(text<=1){
        /*减数量，当为1时。不在继续往下减，永远为1*/
        text=1;
        span_quantity.text(text);
        // $('.total_money').text()
        let mountMoney=pay_money*text;
        myTr.find('.span_money').find('.total_money').text(mountMoney.toFixed(2));
        getTotalMoney();
    }else {
        text=text-1;
        span_quantity.text(text);
        let mountMoney=pay_money*text;
        myTr.find('.span_money').find('.total_money').text(mountMoney.toFixed(2));
        getTotalMoney();
    }
});

/*加商品*/
$('.myTbody').on('click','.add',function () {
    var text=parseInt($(this).parent().find('.number>span').text())+1;
    var myTr=$(this).parent().parent().parent();
    var pay_money=parseFloat(myTr.find('.money').find('.pay_money').text());
    let mountMoney=pay_money*text;
    var span_quantity=$(this).parent().find('.number>span');
   span_quantity.text(text);
   myTr.find('.span_money').find('.total_money').text(mountMoney.toFixed(2));
    getTotalMoney();
});

$('.del_car').on('click',deleteCar)
function deleteCar() {
    // console.log(1)
    // var carId = $('.select_circle').attr('car_id');
    var select = $('.select_circle');
    var reqDataArr = [];
    for (var i=0;i<select.length;i++){
        if (select.eq(i).attr('data-select')=='true') {
            // console.log(select.eq(i).attr('car_id'))
            let carId = select.eq(i).attr('car_id');
            reqDataArr.push(carId);
        }
    }
    if (reqDataArr.length>0){
        console.log(reqDataArr)
        $.ajax({
            url : '/cart/delete',
            type : 'post',
            data : {reqDataArr},
            traditional:true,
            success :function (data) {
                // console.log(data)
                if (data.result==200){
                     window.location.reload();
                }

            },
            error : function (err) {
                console.log(err)
            }
        })
    }
}
//转到支付页面，（临时表）
$('.btn1').on('click',toCheck)
function toCheck() {
    var num = $('.total_quantity').text();
    num = parseInt(num);
    //获得用户选择到的商品，将对应商品的信息，发送给后台
    var myselect = $('.select_circle');
    var myreqDataArr = [];
    for (var i=0;i<myselect.length;i++){
        if (myselect.eq(i).attr('data-select')=='true') {
            // console.log(select.eq(i).attr('car_id'))
            let car_id = myselect.eq(i).attr('car_id');
            let user_id = myselect.eq(i).attr('user_id');
            let img = myselect.eq(i).parent().parent().find('.checkImg').attr('src')
            let name = myselect.eq(i).parent().parent().find('.checkName').text()
            let colorVal = myselect.eq(i).parent().parent().find('.checkColorVal').css('background-color')
            let count = myselect.eq(i).parent().parent().find('.checkNum').text()
            let price = myselect.eq(i).parent().parent().find('.checkPrice').text()
            let colorName = myselect.eq(i).parent().parent().find('.checkColorName').text()
            let product_id = myselect.eq(i).attr('product_id');
            let color_id = myselect.eq(i).attr('color_id');
            console.log(colorName)

            myreqDataArr.push(car_id,img,name,colorVal,count,price,user_id,colorName,product_id,color_id);
        }
    }
    // console.log(myreqDataArr);
    if (num>0){
        //当用户勾选了要付款的商品，点击结账时，将当前商品插入到临时表当中。付款后自动删除
        $.ajax({
            url : '/cart/addcheck',
            type: 'post',
            data: {myreqDataArr},
            traditional : true,
            success : function (data) {
                if (data.result==200){
                    // console.log('ok')
                    location.href='/myPage/list/12';
                } else {
                    console.log('客户端错误')
                }
            }
        })

    }
}






