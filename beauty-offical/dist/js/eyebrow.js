$('#tab1').on('click',function () {
  $('#tab2').toggleClass('height')
})
$('#tab3').on('click',function () {
  $('#tab4').toggleClass('height')
})
$('#tab5').on('click',function () {
  $('#tab6').toggleClass('height')
})
$('#tab7').on('click',function () {
  $('#tab8').toggleClass('height')
})
$('#tab9').on('click',function () {
  $('#tab10').toggleClass('height')
})
$('#tab11').on('click',function () {
  $('#tab12').toggleClass('height')
})

function border(obj) {
  $(obj).siblings().removeClass('bor')
  $(obj).attr('class','bor')
}
function tiaozhuan() {
  var t = $('#about').offset().top
  $("html,body").animate({ scrollTop: t}, 50)
}
function tiaozhuan1() {
  var t = $('#ser').offset().top
  $("html,body").animate({ scrollTop: t}, 50)
}
function tiaozhuan2() {
  var t = $('#eye').offset().top
  $("html,body").animate({ scrollTop: t}, 50)
}
function tiaozhuan3() {
  var t = $('#brow').offset().top
  $("html,body").animate({ scrollTop: t}, 50)
}
function tiaozhuan4() {
  var t = $('#brow1').offset().top
  $("html,body").animate({ scrollTop: t}, 50)
}

