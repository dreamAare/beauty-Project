
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
        icon_angleUp.attr('class','fa fa-angle-up');
        iconRotating.css('transform ','rotate(180deg)')
    }
    else{
        selectUl.css('height','0');
        selectState=false;
        selectUl.css('outline','0');
        icon_angleUp.attr('class','fa fa-angle-down');
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

// var aIcon = document.getElementById('i')
//
// aIcon.onclick = function(){
//     console.log('被点击了')
// //   //   aIcon.isclick = true;
// //   //   if(this.isclick){
// //   //
// //   //   }
// //   // }





