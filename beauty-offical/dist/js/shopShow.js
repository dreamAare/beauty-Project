let selectState = false;
let totalPrice=0;
$('.item-select-btn').on('click', function () {
    let selectUl = $('.item-select-ul');
    let icon_angleUp = $('.icon-angleUp');
    if (!selectState) {
        selectState = true;
        selectUl.css('height', 'auto');
        selectUl.css('outline', '1px solid #dadada');
        icon_angleUp.attr('class', 'fa fa-angle-up');
        $('.item-select>div:first-child').css('background-color', 'white');
    }
    else {
        selectUl.css('height', '0');
        selectState = false;
        selectUl.css('outline', '0');
        icon_angleUp.attr('class', 'fa fa-angle-down');
        $('.item-select>div:first-child').css('background-color', 'transparent');
    }
});


let infoBoxState = false;
$('.shop-infoBox').on('click', function () {
    if (infoBoxState) {
        $('.shop-infoBox-hidden').css('display', 'none');
        infoBoxState = false;
        $('#info-icon1').css('transform', 'rotate(0)');
    }
    else {
        $('.shop-infoBox-hidden').css('display', 'block');
        infoBoxState = true;
        $('#info-icon1').css('transform', 'rotate(180deg)');
    }
});
let returnInfoBox = false;
$('.return-info').on('click', function () {
    if (returnInfoBox) {
        $('.return-info-hidden').css('display', 'none');
        returnInfoBox = false;
        $('#info-icon2').css('transform', 'rotate(0)');
    }
    else {
        $('.return-info-hidden').css('display', 'block');
        returnInfoBox = true;
        $('#info-icon2').css('transform', 'rotate(180deg)');
    }
});
$('.transport-cost').on('click', function () {
    $('#myModal-cost').modal();
});

$('.choseOrderBox').on('click', '#Order a', function () {
    $('#choseOrder>span:first-child').text($(this).text());
    console.log($(this).text())
});
$('.choseColorBox').on('click', '#Color a', function () {
    $('#choseColor>span:last-child').html($(this).text() + '<i class="fa fa-angle-down"></i>');
});
window.document.onscroll = function () {

    // console.log(document.documentElement.scrollTop);
    let scrollheight = document.documentElement.scrollTop;
    if (scrollheight >= 680) {
        $('.buyNow-box-fixed').css('display', 'block');
    }
    else {
        $('.buyNow-box-fixed').css('display', 'none');
    }
};
let showTypeState = false;
$('#btnShow').on('click', function () {
    if (showTypeState) {
        $('.buyNow-show-type>div:last-child').css('display', 'none');
        $('.buyNow-show-type').css('top', '-25px');
        showTypeState = false;
        $(this).attr('class', 'fa fa-angle-up');
    }
    else {
        $('.buyNow-show-type>div:last-child').css('display', 'block');
        $('.buyNow-show-type').css('top', '-100px');
        showTypeState = true;
        $(this).attr('class', 'fa fa-angle-down');
    }
});


let colorSelecterState = false;
$('.selecter-color').on('click', function () {
    if (colorSelecterState) {
        $('.select-colors-box').css('display', 'none');
        $('.select-colors-box').css('height', '0');
        colorSelecterState = false;
        $('.selecter-color').css('border', '0');
        $('#select-shopcolorIcon').attr('class', 'fa fa-angle-down');
    }
    else {
        $('.select-colors-box').css('display', 'block');
        $('.select-colors-box').css('height', 'auto');
        colorSelecterState = true;
        $('.selecter-color').css('border', '1px solid black');
        $('#select-shopcolorIcon').attr('class', 'fa fa-angle-up');
    }
});
$('.select-colors-box').on('click', '.select-colors', function () {
    let color = $(this.children[0]).css('background-color');
    let colorName = $(this.children[1]).text();
    let oSelecter = $('.selecter-color')[0];
    $(oSelecter.children[0]).css('background-color', color);
    $(oSelecter.children[1]).text(colorName);
    $('.select-colors-box').css('display', 'none');
    $('.select-colors-box').css('height', '0');
    colorSelecterState = false;
    $('.selecter-color').css('border', '0').css('border-bottom', '1px solid grey');
    $('#select-shopcolorIcon').attr('class', 'fa fa-angle-down');
    $('#getColor').attr('value', color);
    let colorId=$(this).attr('colorid');
    $('#selecter-color').attr('colorid',colorId);
});
$('.stars').on('click', 'i', function () {
    let id = $(this).attr('data-id');
    $('#getStar').attr('value', id);
    for (let i = 0; i < id; i++) {
        $($('.stars')[0].children[i]).attr('class', 'fa fa-star');
    }
    for (let j = id; j < 5; j++) {
        $($('.stars')[0].children[j]).attr('class', 'fa fa-star-o');
    }
});


/*表单控制*/


let timer2 = null;
let timer3 = null;
let timer = null;
let bannerstate = 1;
$().ready(function () {

    timer = setInterval(function () {
        beginBanner();
        clearTimeout(timer3);
    }, 5000);
});

function beginBanner() {
    bannerstate++;
    clearTimeout(timer2);
    let obox = $('.Buy-headCenter>div:first-child');
    obox.css('margin-left', '-' + 100 * bannerstate + '%');
    obox.css('transition', 'all 0.4s linear');
    if (bannerstate == 3) {
        timer2 = setTimeout(function () {
            obox.css('transition', 'none');
            bannerstate = 1;
            obox.css('margin-left', '-' + 100 * bannerstate + '%');
        }, 1000)
    }
    if (bannerstate % 2 == 0) {
        $('.bannerRight').css('background-color', 'black');
        $('.bannerLeft').css('background-color', 'white');

    }
    else {
        $('.bannerRight').css('background-color', 'white');
        $('.bannerLeft').css('background-color', 'black');
    }
}

$('.bannerRight').on('click', function () {
    $('.bannerRight').css('background-color', 'black');
    $('.bannerLeft').css('background-color', 'white');
    let obox = $('.Buy-headCenter>div:first-child');
    obox.css('margin-left', '-200%');
    obox.css('transition', 'all 0.4s linear');
    bannerstate = 2;
    clearInterval(timer);
    clearTimeout(timer3);
    timer3 = setTimeout(function () {
        timer = setInterval(beginBanner, 5000);
    }, 3000);
});
$('.bannerLeft').on('click', function () {
    $('.bannerRight').css('background-color', 'white');
    $('.bannerLeft').css('background-color', 'black');
    let obox = $('.Buy-headCenter>div:first-child');
    obox.css('margin-left', '-100%');
    obox.css('transition', 'all 0.4s linear');
    bannerstate = 1;
    clearInterval(timer);
    clearTimeout(timer3);
    timer3 = setTimeout(function () {
        timer = setInterval(beginBanner, 5000);
    }, 3000);

});
$('.shop-color-items').on('click', 'span', function () {
    let colorid = $(this).attr('data-id');
    let colorname=$(this).attr('colorname');
    changeColorAjax(colorid);
    $('.shop-addBtn').attr('colorId', colorid);
    $('.item-select>div:first-child a').text(colorname);
});
$('.item-select-ul').on('click', 'a', function () {
    let selectUl = $('.item-select-ul');
    let icon_angleUp = $('.icon-angleUp');
    selectUl.css('height', '0');
    selectState = false;
    selectUl.css('outline', '0');
    icon_angleUp.attr('class', 'fa fa-angle-down');
    $('.item-select>div:first-child').css('background-color', 'transparent');
    $('.item-select>div:first-child a').text($(this).text());
    let colorid = $(this).attr('data-id');
    changeColorAjax(colorid);
    $('.shop-addBtn').attr('colorId', colorid);
});

function changeColorAjax(colorId) {
    $.ajax({
        type: 'post',
        url: 'getcolorImg',
        data: 'color_id=' + colorId,
        success: function (data) {
            $('.Buy-headCenter>div:first-child').html('');
            let str = '';
            for (let i = 0; i < 2; i++) {
                str += '<div><img src="/' + data[i].color_pic_path + '" alt=""></div>';
            }
            for (let i = 0; i < 2; i++) {
                str += '<div><img src="/' + data[i].color_pic_path + '" alt=""></div>';
            }
            $('.Buy-headCenter>div:first-child').html(str);
            $('.shop-addBtn').attr('colorValue', data[0].color_value);
            $('.shop-addBtn').attr('colorName', data[0].color_name);
        }
    })
}
let units=0;
$('.shop-addBtn').on('click', function () {
    let colorId = $(this).attr('colorId');
    let colorname=$(this).attr('colorName');
    // console.log(colorname);
    let colorValue = $(this).attr('colorValue');
    let oldhtml = $('.buy-checked').html();

    let newhtml=oldhtml+'<div class="buy-checked-box">\n' +
        '                <div class="checked-head">\n' +
        '                    <span class="checked-head-colorValue" color-id="'+colorId+'"><i style="background-color: '+colorValue+'"></i> '+colorname+'</span><span class="del-selected">&times;</span>\n' +
        '                </div>\n' +
        '                <div class="checked-body">\n' +
        '                    <span class="num-reduce"></span>\n' +
        '                    <span class="checkedNum">1</span>\n' +
        '                    <span class="num-add"></span>\n' +
        '                    <span class="total-price">$'+$('.shop-price>span').text()+'</span>\n' +
        '                </div>\n' +
        '            </div>';
    $('.buy-checked').html(newhtml);
    totalPrice=totalPrice+parseFloat($('.shop-price>span').text());
    $('.shop-total>span:last-child').text('$'+totalPrice.toFixed(2));
    units++;
    $('.num-ofType').html(units+'&nbsp;units');
    $('.footFixed-totalPrice').text('$'+totalPrice.toFixed(2));
});
$('#addcart').on('click',function () {
let colorIdDiv=document.getElementsByClassName('checked-head-colorValue');
let checkedNum=document.getElementsByClassName('checkedNum');
let product_id=$(this).attr('product-id');
let colorIdArr=[];
let checkedNumArr=[];
for (let i=0;i<colorIdDiv.length;i++){
    colorIdArr.push($(colorIdDiv[i]).attr('color-id'));
}
for (let j=0;j<checkedNum.length;j++){
    checkedNumArr.push($(checkedNum[j]).text());
}
$.ajax({
    type:'post',
    url:'/shop/addToCar',
    data:'product_id='+product_id+'&colorIdArr='+colorIdArr+'&numArr='+checkedNumArr,
    traditional:true,
    success:function (data) {
        console.log(data);
        if (data.result==100){
            alert('请先登录！');
        }
        if (data.result==-200){
            alert('加入购物车失败');
        }   
    }
})
});

$('.buy-checked').on('click','.del-selected',function () {
    console.log(this.parentNode.parentNode);
    let delNode=this.parentNode.parentNode;
    let fatherNode=document.getElementsByClassName('buy-checked')[0];
    fatherNode.removeChild(delNode);
    let delprice=0;
    let num = parseInt($(this.parentNode.parentNode.children[1].children[1]).text());
    let price = parseFloat($('.shop-price>span').text());
    delprice=num*price;
    totalPrice=totalPrice-delprice;
    $('.shop-total>span:last-child').text('$'+totalPrice.toFixed(2));
    units--;
    $('.num-ofType').html(units+'&nbsp;units');
    $('.footFixed-totalPrice').text('$'+totalPrice.toFixed(2));
});


$('.buy-checked').on('click','.num-reduce' ,function () {
    let spanPrice = $(this.parentNode.children[3]);
    let num = parseInt($(this.parentNode.children[1]).text());
    let numSpan = $(this.parentNode.children[1]);
    let price = parseFloat($('.shop-price>span').text());
    if (num <=1) {
        num = 1;
    }
    else {
        num--;
        totalPrice-=price;
    }
    numSpan.text(num);
    spanPrice.text('$' + (num * price).toFixed(2));
    $('.shop-total>span:last-child').text('$' + totalPrice.toFixed(2));
    $('.num-ofType').html(units+'&nbsp;units');
    $('.footFixed-totalPrice').text('$'+totalPrice.toFixed(2));
});
$('.buy-checked').on('click', '.num-add',function () {
    let spanPrice = $(this.parentNode.children[3]);
    let num = parseInt($(this.parentNode.children[1]).text());
    let numSpan = $(this.parentNode.children[1]);
    let price =parseFloat($('.shop-price>span').text()) ;
    num++;
    numSpan.text(num);
    totalPrice+=price;
    spanPrice.text('$' + (num * price).toFixed(2));
    $('.shop-total>span:last-child').text('$' + totalPrice.toFixed(2));
    $('.num-ofType').html(units+'&nbsp;units');
    $('.footFixed-totalPrice').text('$'+totalPrice.toFixed(2));
});

$('.write-review>button').on('click',function () {
    $('#writeReivew').modal();
});
$('#SubmitReview').on('click',function () {
    let stars=document.getElementById('stars').children;
    let colorId=$('.select-colors').attr('colorid');
    let star=0;
    for (var i=0;i<5;i++){
        if ($(stars[i]).attr('class')=='fa fa-star'){
            star++;
        }
    }
    let title=$('.review-title>input').val();
    let content=$('.review-content>textarea').val();
    let productId=$(this).attr('data-id');
    let files=$('.photoUpload>input')[0].files;
    let reader=new FileReader();
    reader.readAsDataURL(files[0]);
    let imgdata=null;
    reader.onload=function () {
        imgdata=this.result;
        $.ajax({
            type:'post',
            url:'/shop/review',
            data:'produc_id='+productId+'&color_id='+colorId+'&title='+title+'&content='+content+'&imgfile='+imgdata+'&star='+star,
            success:function (data) {
                if (data){
                    $('#writeReivew').modal('hide');
                    if (data.result==100){
                        alert('请登录');
                    }
                    if (data.result==-200){
                        alert('操作失败')
                    }
                }
            }
        })
    };
});


