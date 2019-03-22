
let flag=0;
$('.question-list').on('click','#question1',function () {

    if(flag==0){
        $('.open1').attr('class','col-lg-1 fa open1 fa-angle-down')
        /*$('.open1:first-child').attr('src','../img/imgUserCenter/bg_faq_close.png')*/
        $('#answer1').css('display','block')
        flag=1
    }
    else if(flag==1){
        $('.open1').attr('class','col-lg-1 fa open1 fa-angle-up')
        /*$('.open1:first-child').attr('src','../img/imgUserCenter/bg_faq_open.png')*/
        $('#answer1').css('display','none')
        flag=0
    }
})/**/

$('.question-list').on('click','#question2',function () {

    if(flag==0){
        $('.open2').attr('class','col-lg-1 fa open2 fa-angle-down')
        /*$('.open1:first-child').attr('src','../img/imgUserCenter/bg_faq_close.png')*/
        $('#answer2').css('display','block')
        flag=1
    }
    else if(flag==1){
        $('.open2').attr('class','col-lg-1 fa open2 fa-angle-up')
        /*$('.open1:first-child').attr('src','../img/imgUserCenter/bg_faq_open.png')*/
        $('#answer2').css('display','none')
        flag=0
    }
})

$('.question-list').on('click','#question3',function () {

    if(flag==0){
        $('.open3').attr('class','col-lg-1 fa open3 fa-angle-down')
        /*$('.open1:first-child').attr('src','../img/imgUserCenter/bg_faq_close.png')*/
        $('#answer3').css('display','block')
        flag=1
    }
    else if(flag==1){
        $('.open3').attr('class','col-lg-1 fa open3 fa-angle-up')
        /*$('.open1:first-child').attr('src','../img/imgUserCenter/bg_faq_open.png')*/
        $('#answer3').css('display','none')
        flag=0
    }
})

/*****翻页**************/

$('#page2').click(function () {
    $('.question-list-page2').css('display','block')
    $('.question-list-page1').css('display','none')
    $('#page1').css(
        {
            'color':'#000',
            'background':'#fff'
        }
    )
    $('#page2').css(
        {
            'color':'#fff',
            'background':'#000'
        }
    )
})

$('#page1').click(function () {
    $('.question-list-page2').css('display','none')
    $('.question-list-page1').css('display','block')
    $('#page2').css(
        {
            'color':'#000',
            'background':'#fff'
        }
    )
    $('#page1').css(
        {
            'color':'#fff',
            'background':'#000'
        }
    )
})

$('#book').click(function () {
    $('.book').css('display','block')
    $('.shopAsk').css('display','none')
})

$('#shopAsk').click(function () {
    $('.shopAsk').css('display','block')
    $('.book').css('display','none')
})