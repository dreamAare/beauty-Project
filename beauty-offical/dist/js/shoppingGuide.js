$('#transport').click(function () {
    $('.order').css('display','none')
    $('.transport').css('display','block')
    $('.back').css('display','none')
})

$('#order').click(function () {
    $('.order').css('display','block')
    $('.transport').css('display','none')
    $('.back').css('display','none')
})

$('#back').click(function () {
    $('.back').css('display','block')
    $('.transport').css('display','none')
    $('.order').css('display','none')
})