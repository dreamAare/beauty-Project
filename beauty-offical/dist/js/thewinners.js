
$().ready(function(e) {
    $(".but").click(function(e) {
        $(".abc").toggle();
    });
});

$('.shop-li').on('click','.icon-heart',function () {
    let productId=$(this).attr('productId');
    let $heart=$(this);
    $.ajax({
        type:'post',
        url:'/shop/addToWish',
        data:'productId='+productId,
        success:function (data) {
            console.log(data.result);
            if (data.result==-200){
                console.log('失败！');
            }
            if (data.result==200){
                console.log($heart);
                if($heart.attr('class')=='fa fa-heart-o icon-heart'){
                    $heart.attr('class','fa fa-heart-o icon-heart color-red');
                }
                else {
                    $heart.attr('class','fa fa-heart-o icon-heart');
                }
            }
        }
    });
});

