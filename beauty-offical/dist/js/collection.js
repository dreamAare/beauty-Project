
//下拉列表
let selectState=false;
$('.item-select-btn').on('click',function () {
    let selectUl=$('.item-select-ul');
    let icon_angleUp=$('#icon-angleUp');
    if (!selectState){
        selectState=true;+
        selectUl.css('height','220px');
        selectUl.css('outline','1px solid #dadada');
        icon_angleUp.attr('class','fa fa-angle-down');
    }
    else{
        selectUl.css('height','0');
        selectState=false;
        selectUl.css('outline','0');
        icon_angleUp.attr('class','fa fa-angle-up');
    }
});

