let selectState=false;
let screenState=false;
$('.item-select-btn').on('click',function () {
    let selectUl=$('.item-select-ul');
    let icon_angledown=$('#icon-angledown');
    if (!selectState){
        selectState=true;
        selectUl.css('height','250px');
        selectUl.css('outline','1px solid #dadada');
        icon_angledown.attr('class','fa fa-angle-up');
    }
    else{
        selectUl.css('height','0');
        selectState=false;
        selectUl.css('outline','0');
        icon_angledown.attr('class','fa fa-angle-down');
    }
});
$('.item-type-screen').on('click','label',function () {
   let Oinput=this.parentNode.children[0];
    let oCheckedBox=$('.type-checked-box>div')[0];
    let oSpan=document.createElement('span');
    oSpan.innerHTML=$(this).text();
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
        $('.item-type-checked').css('display','block');
    }
    else{
        screenState=false;
        $('.item-type-screen').css('height','0');
        $('#type-screen').html('<i class="fa fa-sliders" ></i>&nbsp;&nbsp;过滤');
        $('#type-screen').css('color','black');
        if ($('.type-checked-box>div').html()){
            $('.item-type-checked').css('display','block');
        }
        else{
            $('.item-type-checked').css('display','none');
        }
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



