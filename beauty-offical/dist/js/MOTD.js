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
// $('#icon').on('click',function () {
//     let isclick= $('#icon');
//     if()
//
//

// })
$('.item-type-screen').on('click','label',function () {
    let Oinput=this.parentNode.children[0];
    let oCheckedBox=$('.type-checked-box>div')[0];
    let oSpan=document.createElement('span');
    oSpan.innerHTML=$(this).text()+'&nbsp;&times;';
    if (!$(Oinput).attr('checked')){
        oCheckedBox.appendChild(oSpan);
    }
    $(Oinput).attr('checked','checked');

});
$('#type-screen').on('click',function () {
    if (!screenState){
        $('.item-type-screen').css('height','auto');
        screenState=true;
        $('#type-screen').html('<i class="fa fa-sliders" ></i>&nbsp;&nbsp;隐藏过滤器');
        $('#type-screen').css('color','grey');
    }
    else{
        screenState=false;
        $('.item-type-screen').css('height','0');
        $('#type-screen').html('<i class="fa fa-sliders" ></i>&nbsp;&nbsp;过滤');
        $('#type-screen').css('color','black');
    }
});
$('.clearAllType').on('click',function () {
    $('.type-checked-box>div').html('');
    let radioArr=$('.item-type-screen>ul input');
    for (let i=0;i<radioArr.length;i++){
        radioArr[i].removeAttribute('checked');
    }
    /*    $('.item-type-screen>ul input').removeAttribute('checked');*/
});

$('.close-box').on('click',function () {
    $('.content1-pro').css('display','none')
    $('.content1-box>p').text('在年终季节，闪光是必不可少的，举办各种聚会。')
    $('.content1-box').css({
        'top':'25%',
        'left':'14%',
        'transition':'1s'
    })
});

$('.explore').on('click',function () {
    $('.content1-pro').css('display','block')
    $('.content1-box>p').text('Bling-bling闪光是假日化妆必不可少的。在眼部化妆是一种轻松享受闪光而不太夸张的方式。金属眼睛闪光#Ring My Bell可以作为眼部化妆的点，在各个方向闪闪发光，就好像眼睛上有磨损的配件一样。在眼睛下方使用闪光时，请使用点状而不是广泛应用于该区域。你可以有更整洁，时尚的眼妆。')
    $('.content1-box').css({
        'top':'35%',
        'left':'4%',
        'transition':'1s'
    })
})

$('.close-box2').on('click',function () {
    $('.content2-pro').css('display','none')
    $('.content2-box>p').text('eSpoir最好的眼影亮片可以产生深色，闪亮的眼部彩妆。')
    $('.content2-box').css({
        'top':'25%',
        'left':'14%',
        'transition':'1s'
    })
});

$('.explore2').on('click',function () {
    $('.content2-pro').css('display','block')
    $('.content2-box>p').text('eSpoir最好的眼影亮片可以产生深色，闪亮的眼部彩妆。她的假日色彩在2018年假日季节以闪亮的液体类型回归金属般的眼睛闪光。完美滋润，闪亮夺目的眼妆，金属色的闪光#Her Holiday色彩这个假日季节。')
    $('.content2-box').css({
        'top':'35%',
        'left':'4%',
        'transition':'1s'
    })
})


$('.close-box3').on('click',function () {
    $('.content3-pro').css('display','none')
    $('.content3-box>p').text('仍然没有找到适合你皮肤的紧密粘合粉底？Pro Tailor Foundation BeGlow产品使许多粉底用户能够使用各种颜色，这些颜色非常适合亚洲肤色，并具有自然发光的光泽。')
    $('.content3-box').css({
        'top':'25%',
        'right3':'14%',
        'transition':'1s'
    })
});

$('.explore3').on('click',function () {
    $('.content3-pro').css('display','block')
    $('.content3-box>p').text('仍然没有找到适合你皮肤的紧密粘合粉底？Pro Tailor Foundation BeGlow产品使许多粉底用户能够使用各种颜色，这些颜色非常适合亚洲肤色，并具有自然发光的光泽。由于紧密贴合的特点，即使在干燥季节也可以表现出包裹皮肤的化妆品。特别适合亚洲肤色的柔和中性色调表现出适合任何肤色的美丽妆容。')
    $('.content3-box').css({
        'top':'35%',
        'right':'4%',
        'transition':'1s'
    })
})

$('.close-box4').on('click',function () {
    $('.content4-pro').css('display','none')
    $('.content4-box>p').text('如果你想要无皱，柔软，丰盈的嘴唇，尝试唇部丰满药水。')
    $('.content4-box').css({
        'top':'25%',
        'right':'14%',
        'transition':'1s'
    })
});

$('.explore4').on('click',function () {
    $('.content4-pro').css('display','block')
    $('.content4-box>p').text('如果你想要无皱，柔软，丰盈的嘴唇，尝试唇部丰满药水。轻轻涂抹在嘴唇上，令人愉悦的刺痛感和暂时的温暖感通过促进唇部的血液循环，瞬间产生丰满柔顺的双唇，同时改善唇部干燥的水分和弹性')
    $('.content4-box').css({
        'top':'35%',
        'right':'4%',
        'transition':'1s'
    })
})

$('.close-box5').on('click',function () {
    $('.content5-pro').css('display','none')
    $('.content5-box>p').text('如果你的嘴唇状况不好，即使漂亮的唇膏颜色也不会很漂亮。')
    $('.content5-box').css({
        'top':'25%',
        'right':'14%',
        'transition':'1s'
    })
});

$('.explore5').on('click',function () {
    $('.content5-pro').css('display','block')
    $('.content5-box>p').text('如果你的嘴唇状况不好，即使漂亮的唇膏颜色也不会很漂亮。使用唇部护理药水保持唇部健康，这将使您的干燥，柔嫩的嘴唇充满舒适的水分。温和的5种配方，不含人造香料或合成色素，可安全用于敏感肌肤; 当与各种唇部产品匹配时，非粘性熔化的香脂质地提供协同效应。在干燥的季节，通过涂抹在疲惫的嘴唇上，使用唇部治疗药水体验愈合，这可以立即显示您的状况。')
    $('.content5-box').css({
        'top':'35%',
        'right':'4%',
        'transition':'1s'
    })
})

$('.close-box6').on('click',function () {
    $('.content6-pro').css('display','none')
    $('.content6-box>p').text('如果你的嘴唇状况不好，即使漂亮的唇膏颜色也不会很漂亮。')
    $('.content6-box').css({
        'top':'25%',
        'right':'14%',
        'transition':'1s'
    })
});

$('.explore6').on('click',function () {
    $('.content6-pro').css('display','block')
    $('.content6-box>p').text('如果你的嘴唇状况不好，即使漂亮的唇膏颜色也不会很漂亮。使用唇部护理药水保持唇部健康，这将使您的干燥，柔嫩的嘴唇充满舒适的水分。温和的5种配方，不含人造香料或合成色素，可安全用于敏感肌肤; 当与各种唇部产品匹配时，非粘性熔化的香脂质地提供协同效应。在干燥的季节，通过涂抹在疲惫的嘴唇上，使用唇部治疗药水体验愈合，这可以立即显示您的状况。')
    $('.content6-box').css({
        'top':'35%',
        'right':'4%',
        'transition':'1s'
    })


})

$('.down').on('click',function () {
    var top = $(this).offset().top;
    console.log(top)
    $('body,html').animate(
        {scrollTop:top+400},1000
    )
})

$('.up').on('click',function () {
    var top = $('.up').offset().top;
    console.log(top+'ppppppppp')
    $('body,html').animate(
        {scrollTop:top+400},1000
    )
})


