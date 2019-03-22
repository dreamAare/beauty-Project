
function category(categoryid,childid) {
    $.ajax({
        type:'post',
        url:'/shoptype/'+categoryid+childid,
        success:Fnsccuss
    });
    $(this).css('color','red');
}
function salebest(id) {
    $.ajax({
        type:'post',
        url:'/shop/shopbestsale',
        data:'id='+id,
        success:Fnsccuss
    });
    $('#dropdownMenu2').text('最畅销');
}
function bestnew(id) {
    $.ajax({
        type:'post',
        url:'/shop/shopbestsale',
        data:'id='+id,
        success:Fnsccuss
    });
    $('#dropdownMenu2').text('新的');
}
function reviewbest(id) {
    $.ajax({
        type:'post',
        url:'/shop/shopbestsale',
        data:'id='+id,
        success:Fnsccuss
    });
    $('#dropdownMenu2').text('高评价');
}

function highTolow(id) {
    $.ajax({
        type:'post',
        url:'/shop/highTolow',
        data:'id='+id,
        success:Fnsccuss
    });
    $('#dropdownMenu2').text('价格从高到低');
}

function lowTohigh(id) {
    $.ajax({
        type:'post',
        url:'/shop/lowTohigh',
        data:'id='+id,
        success:Fnsccuss
    });
    $('#dropdownMenu2').text('价格从低到高');
}

function markbest(id) {
    $.ajax({
        type:'post',
        url:'/shop/markbest',
        data:'id='+id,
        success:Fnsccuss
    });
    $('#dropdownMenu2').text('评分最高');
}

function Fnsccuss(data) {
    let str='';
    console.log(data);
    for (let i=0;i<data[0].length;i++){
        let colorstr='';
        for (var j=0;j<data[1].length;j++){
            if (data[1][j].product_id==data[0][i].product_id) {
                colorstr+='<span style="background-color:'+data[1][j].color_value+'"></span>';
            }
        }
        str+='<div class="shop-item">\n' +
            '    <div class="itemImg-box">\n' +
            '    <i class="fa fa-heart-o icon-heart"></i>\n' +
            '    <img src="../'+data[0][i].pic_path+'" alt="">\n' +
            '    </div>\n' +
            '    <p class="shopName">'+data[0][i].product_name+'</p>\n' +
            '<p class="shopMark">'+data[0][i].English_name+'</p>\n' +
            '<p class="type-color">'+colorstr+'</p>\n' +
            '<p class="shop-priceBox"><span class="price">'+data[0][i].price+'</span><span><i class="fa fa-shopping-basket"></i></span></p>\n' +
            '</div>';

    }
    $('.shopItem-box').html(str);




}


var outDiv = document.getElementById('myout');
outDiv.onwheel = function(event){
    //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）
    event.preventDefault();
    //设置鼠标滚轮滚动时屏幕滚动条的移动步长
    var step = 100;
    if(event.deltaY < 0){
        //向上滚动鼠标滚轮，屏幕滚动条左移
        this.scrollLeft -= step;
    } else {
        //向下滚动鼠标滚轮，屏幕滚动条右移
        this.scrollLeft += step;
    }
};
$('.btn-checked-ok').on('click',function () {
    let odiv=$('.type-checked-box')[0].children;
    console.log(odiv);
});


$('.shopItem-box').on('click','.icon-heart',function () {
    let heart=$(this);
    let product_id=$(this).attr('productid');
    let isInWish=$(this).attr('data-id');
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
                        'productId':product_id
                    },
                    success:function (data) {
                        // console.log(data);
                        if(data.result==200){
                            if(isInWish=='false'){

                                heart.addClass('color-red');
                                heart.attr('data-id','true')
                            }else {
                                heart.removeClass('color-red');
                                heart.attr('data-id','false')
                            }
                        }
                    }
                })
            }
        }
    });
});

$('.shopItem-box').on('click','.color_span',function () {
    $(this).parent().parent().parent().find('span').css('box-shadow','none')
    $(this).css('box-shadow','3px 3px 10px');
    let color_id=$(this).attr('color-id');
    let parent= $(this).parent().parent().find('.addToCar');
    parent.attr('color-id',color_id);
});

$('.shopItem-box').on('click','.addToCar',function () {
    let product_id=$(this).attr('product-id');
    let color_id=$(this).attr('color-id');
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
                        'productId':product_id,
                        'colorId':color_id
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
})