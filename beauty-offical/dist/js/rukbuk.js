 $('#rjt').on('click',xiangxia);
 $('#ljt').on('click',xiangshang);
 $('#btn1').on('click',img)
 $('#btn2').on('click',img1)
 $('#btn3').on('click',img2)

var sl=parseInt($('#shuliang').text());
var shuliang=$('#shuliang')
var xian2=$('#xian2')

function xiangshang() {
  if (sl==1){

  } else if (sl==2){
    $('#lunbo1').attr('class','dingwei1')
    sl--
    shuliang.text(sl)
    xian2.css('width','18%')
    $('#zi').css('transform','translate(0,0)')
    $('#header').attr('class','header')
  } else if (sl==3){
    $('#lunbo1').attr('class','dingwei')
    $('#lunbo2').attr('class','dingwei1')
    sl--
    shuliang.text(sl)
    xian2.css('width','36%')
    $('#header').attr('class','header1')
  } else if (sl==4){
    $('#lunbo2').attr('class','dingwei')
    $('#lunbo3').attr('class','dingwei1')
    sl--
    shuliang.text(sl)
    xian2.css('width','54%')
    $('#header').attr('class','header2')
  } else if (sl==5){
    $('#lunbo3').attr('class','dingwei')
    $('#lunbo4').attr('class','dingwei1')
    sl--
    shuliang.text(sl)
    xian2.css('width','72%')
    $('#header').attr('class','header3')
  }
}

function xiangxia() {
  if (sl==1){
    $('#lunbo1').attr('class','dingwei')
    sl++
    shuliang.text(sl)
    xian2.css('width','36%')
    $('#zi').css('transform','translate(-1000px,0)')
    $('#header').attr('class','header1')
  } else if (sl==2){
    $('#lunbo1').attr('class','dingwei2')
    $('#lunbo2').attr('class','dingwei')
    sl++
    shuliang.text(sl)
    xian2.css('width','54%')
    $('#header').attr('class','header2')
  } else if (sl==3){
    $('#lunbo2').attr('class','dingwei2')
    $('#lunbo3').attr('class','dingwei')
    sl++
    shuliang.text(sl)
    xian2.css('width','72%')
    $('#header').attr('class','header3')
  } else if (sl==4){
    $('#lunbo3').attr('class','dingwei2')
    $('#lunbo4').attr('class','dingwei')
    sl++
    shuliang.text(sl)
    xian2.css('width','90%')
    $('#header').attr('class','header1')
  } else if (sl==5){

  }

}

 function img() {
   $('#img').css('transform','translate(0,0)')
   $('#btn1').attr('class','bgc')
   $('#btn2').attr('class','bgc1')
   $('#btn3').attr('class','bgc1')
 }
function img1() {
  $('#img').css('transform','translate(-295px,0)')
  $('#btn2').attr('class','bgc')
  $('#btn1').attr('class','bgc1')
  $('#btn3').attr('class','bgc1')
}
 function img2() {
   $('#img').css('transform','translate(-600px,0)')
   $('#btn3').attr('class','bgc')
   $('#btn1').attr('class','bgc1')
   $('#btn2').attr('class','bgc1')
 }