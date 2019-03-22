$('#store1').click(function () {
    $('.store1-holder').css('display','block')
    $('.store2-holder').css('display','none')
    $('.store3-holder').css('display','none')
    $('.store4-holder').css('display','none')
})

$('#store2').click(function () {
    $('.store1-holder').css('display','none')
    $('.store2-holder').css('display','block')
    $('.store3-holder').css('display','none')
    $('.store4-holder').css('display','none')
})

$('#store3').click(function () {
    $('.store1-holder').css('display','none')
    $('.store2-holder').css('display','none')
    $('.store3-holder').css('display','block')
    $('.store4-holder').css('display','none')
})

$('#store4').click(function () {
    $('.store1-holder').css('display','none')
    $('.store2-holder').css('display','none')
    $('.store3-holder').css('display','none')
    $('.store4-holder').css('display','block')
})
