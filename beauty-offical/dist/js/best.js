$('.container90').on('click','.heart',function () {
    let productId=$(this).attr('productId');
    let isInWish=$(this).attr('data-red');
    let heart=$(this);
    $.ajax({
        type:'post',
        url:'/myPage/checkLogin',
        data:{},
        success:function (data) {
            // console.log(data);
            if(data.session==false){
                location.href='./../html/login.html'
            }else{
                user_id=data.session.user_id;
                $.ajax({
                    type:'post',
                    url:'/shop/addToWish',
                    data:{
                        'userid':user_id,
                        'productId':productId
                    },
                    success:function (data) {
                        console.log(data);
                        if(data.result==200){
                            if(isInWish=='false'){
                                alert('添加心愿单成功');
                                heart.addClass('color_red2');
                                heart.attr('data-red','true')
                            }else {
                                heart.removeClass('color_red2');
                                heart.attr('data-red','false')
                            }
                        }
                    }
                })
            }
        }
    });
});
$('.container80').on('click','.heart',function () {
    let productId=$(this).attr('productId');
    let isInWish=$(this).attr('data-red');
    let heart=$(this);
    $.ajax({
        type:'post',
        url:'/myPage/checkLogin',
        data:{},
        success:function (data) {
            // console.log(data);
            if(data.session==false){
                location.href='./../html/login.html'
            }else{
                user_id=data.session.user_id;
                $.ajax({
                    type:'post',
                    url:'/shop/addToWish',
                    data:{
                        'userid':user_id,
                        'productId':productId
                    },
                    success:function (data) {
                        console.log(data);
                        if(data.result==200){
                            if(isInWish=='false'){
                                alert('添加心愿单成功');
                                heart.addClass('color_red2');
                                heart.attr('data-red','true')
                            }else {
                                heart.removeClass('color_red2');
                                heart.attr('data-red','false')
                            }
                        }
                    }
                })
            }
        }
    });
});



$('.container90').on('click','#color_span',function () {
    $(this).parent().parent().parent().find('span').css('box-shadow','none')
    $(this).css('box-shadow','1px 1px 7px');
    let parents=$(this).parent().find('.fa-shopping-bag');
    let color_id=$(this).attr('data_id');
    parents.attr('color_id',color_id);
});

$('.container90').on('click','.fa-shopping-bag',function () {
    let productId=parseInt($(this).attr('data_id'));
    let colorId=parseInt($(this).attr('color_id'));
    $.ajax({
        type:'post',
        url:'/myPage/checkLogin',
        data:{},
        success:function (data) {
            // console.log(data);
            if(data.session==false){
                location.href='./../html/login.html'
            }else{
                user_id=data.session.user_id;
                $.ajax({
                    type:'post',
                    url:'/shop/addToCar2',
                    data:{
                        'userid':user_id,
                        'productId':productId,
                        'colorId':colorId
                    },
                    success:function (data) {
                        // console.log(data);
                        if (data.result == 1000) {
                            alert('添加购物车成功');
                        }
                    }
                })
            }
        }
    });
});



$('.container80').on('click','#color_span',function () {
    $(this).parent().parent().parent().find('span').css('box-shadow','none')
    $(this).css('box-shadow','1px 1px 10px');
    let parents=$(this).parent().parent().find('.fa-shopping-bag');
    let color_id=$(this).attr('data_id');
    parents.attr('color_id',color_id);
});

$('.container80').on('click','.fa-shopping-bag',function () {
    let productId=parseInt($(this).attr('data_id'));
    let colorId=parseInt($(this).attr('color_id'));
    $.ajax({
        type:'post',
        url:'/myPage/checkLogin',
        data:{},
        success:function (data) {
            // console.log(data);
            if(data.session==false){
                location.href='./../html/login.html'
            }else{
                user_id=data.session.user_id;
                $.ajax({
                    type:'post',
                    url:'/shop/addToCar2',
                    data:{
                        'userid':user_id,
                        'productId':productId,
                        'colorId':colorId
                    },
                    success:function (data) {
                        // console.log(data);
                        if (data.result == 1000) {
                            alert('添加购物车成功');
                        }
                    }
                })
            }
        }
    });
});




let selectState=false;
let screenState=false;
$('.item-select-btn').on('click',function () {
    let selectUl=$('.item-select-ul');
    let icon_angleUp=$('#icon-angleUp');
    let iconRotating = $('#icon');

    if (!selectState){
        selectState=true;
        selectUl.css('height','250px');
        selectUl.css('outline','1px solid #dadada');
        icon_angleUp.attr('class','fa fa-angle-down');
        iconRotating.css('transform ','rotate(180deg)')
    }
    else{
        selectUl.css('height','0');
        selectState=false;
        selectUl.css('outline','0');
        icon_angleUp.attr('class','fa fa-angle-up');
    }
});
