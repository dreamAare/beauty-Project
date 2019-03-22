//banner2 的js特效
$('.spread').on('click',spread);
function spread() {
    // 当展开时，将-变成+，去除act属性
    if ($(this).parent().attr('class')=='act'){
        $(this).parent().attr('class','')
        $(this).text('+')


    }else {

        $('.accColor').children('div').attr('class','')
        $('.accColor').children('div').find('h1').text('+')

        $(this).parent().attr('class','act')
        $(this).text('—')
    } //当收起时，将+变-，先将所有的act去除，再给当前添加act属性
    // console.log($(this).parent().find('div'))
}

<!-- ----------------------banner3 的js特效------------------------- -->
var myNumber = -50;//图片的移动距离，初始值
var owidth300 = $('.width300') //获得宽度为300% 的节点
//next 的函数
$('.mynext').on('click',nextImg);
function nextImg() {
    myNumber -=50;
    var str = myNumber + '%';
    owidth300.css({
        'margin-left': str,
        'transition' : 'all 0.3s'
    })

    if(myNumber==(-200)){
        setTimeout(function () {
            owidth300.css({
                'margin-left': '-50%',
                'transition' : 'all 0s'
            })
            myNumber = -50;
        },300)
    }
    // console.log(myNumber);
    //对descripe节点进行动态渲染
    if (myNumber==(-200)){
        $('.description').html('     <div class="mystar">\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                </div>\n' +
            '                <div class="mydes1" style="font-style: italic;padding: 30px 0">\n' +
            '                    I bought <br>\n' +
            '                    it from <br>\n' +
            '                    INSTA and bought it, but it <br>\n' +
            '                    is really a taste snip.\n' +
            '                </div>\n' +
            '                <div class="mydes2" style="">Lipstick NoWare Power Mat</div>\n' +
            '                <div class="mydes2" style="font-weight: bold">₩20,000</div>')

    }else if(myNumber==(-150)){
        $('.description').html('    <div class="mystar">\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                </div>\n' +
            '                <div class="mydes1" style="font-style: italic;padding: 30px 0">\n' +
            '                    I bought five of them and I <br>\n' +
            '                    like it <br>\n' +
            '                    so much!<br>\n' +
            '                </div>\n' +
            '                <div class="mydes2" style="">Color Cornic Velvet Tinted Lacquer</div>\n' +
            '                <div class="mydes2" style="font-weight: bold">₩13,300</div>')

    }else if(myNumber==(-100)){
        $('.description').html('       <div class="mystar">\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                </div>\n' +
            '                <div class="mydes1" style="font-style: italic;padding: 30px 0">\n' +
            '                    I<br>\n' +
            '                    was a faded nomad because <br>\n' +
            '                    of the sensitive skin , but <br>\n' +
            '                    I found the right fade.\n' +
            '                </div>\n' +
            '                <div class="mydes2" style="">Pro Taylor Foundation Beagle SPF25 PA ++</div>\n' +
            '                <div class="mydes2" style="font-weight: bold">₩38,000</div>')
    }
}
//pre 的函数
$('.mypre').on('click',preImg);
function preImg() {

    myNumber += 50;
    var str = myNumber + '%';
    owidth300.css({
        'margin-left': str,
        'transition' : 'all 0.3s'
    })
    if(myNumber==0){
        setTimeout(function () {
            owidth300.css({
                'margin-left': '-150%',
                'transition' : 'all 0s'
            })
            myNumber = -150;
        },300)
    }

    // console.log(myNumber)
    //对descripe节点进行动态渲染
    if (myNumber==(-50)){
        $('.description').html('     <div class="mystar">\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                </div>\n' +
            '                <div class="mydes1" style="font-style: italic;padding: 30px 0">\n' +
            '                    I bought <br>\n' +
            '                    it from <br>\n' +
            '                    INSTA and bought it, but it <br>\n' +
            '                    is really a taste snip.\n' +
            '                </div>\n' +
            '                <div class="mydes2" style="">Lipstick NoWare Power Mat</div>\n' +
            '                <div class="mydes2" style="font-weight: bold">₩20,000</div>')

    }else if(myNumber==0){
        $('.description').html('    <div class="mystar">\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                </div>\n' +
            '                <div  class="mydes1" style="font-style: italic;padding: 30px 0">\n' +
            '                    I bought five of them and I <br>\n' +
            '                    like it <br>\n' +
            '                    so much!<br>\n' +
            '                </div>\n' +
            '                <div class="mydes2" style="">Color Cornic Velvet Tinted Lacquer</div>\n' +
            '                <div class="mydes2" style="font-weight: bold">₩13,300</div>')

    }else if(myNumber==(-100)){
        $('.description').html('       <div class="mystar">\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                    <i class="fa fa-star"></i>\n' +
            '                </div>\n' +
            '                <div class="mydes1" style="font-style: italic;padding: 30px 0">\n' +
            '                    I<br>\n' +
            '                    was a faded nomad because <br>\n' +
            '                    of the sensitive skin , but <br>\n' +
            '                    I found the right fade.\n' +
            '                </div>\n' +
            '                <div class="mydes2" style="">Pro Taylor Foundation Beagle SPF25 PA ++</div>\n' +
            '                <div class="mydes2" style="font-weight: bold">₩38,000</div>')
    }
}
<!-- -------------------banner5 的js特效------------------- -->
var myNumber2 = -94;//图片的移动距离，初始值
var dataId = 0;//自己绑定的属性来决定哪张图片放大
var owidth700 = $('.width700');

$('.mynext2').on('click',nextImage); //next2的函数
function nextImage() {
    myNumber2 -=57;
    var str = myNumber2 + '%';
    owidth700.css({
        'margin-left': str,
        'transition' : 'all 0.5s'
    })
    // console.log(myNumber2)
    if(myNumber2==(-322)){
        setTimeout(function () {
            owidth700.css({
                'margin-left': '-94%',
                'transition' : 'all 0s'
            })
            myNumber2 = -94;
        },500)
    }

    $('.myactive').attr('class','myitem2')
    dataId++;
    if (dataId==4){
        dataId=0
    }
    setTimeout(function () {
        for(let i=0;i<$('.myitem2').length;i++){
            var nowId = $('.myitem2').eq(i).attr('data-id')
            if (dataId==nowId){
                $('.myitem2').eq(i).attr('class','myitem2 myactive')
            }
        }
    },500)

}

$('.mypre2').on('click',preImage);
function preImage() {
    myNumber2 +=57;
    var str = myNumber2 + '%';
    owidth700.css({
        'margin-left': str,
        'transition' : 'all 0.5s'
    })
    // console.log(myNumber2)
    if (myNumber2==(-37)){
        setTimeout(function () {
            owidth700.css({
                'margin-left': '-265%',
                'transition' : 'all 0s'
            })
            myNumber2 = -265;
        },500)
    }
    $('.myactive').attr('class','myitem2')
    dataId--;
    if (dataId==(-1)){
        dataId=3
    }
    setTimeout(function () {
        for(let i=0;i<$('.myitem2').length;i++){
            var nowId = $('.myitem2').eq(i).attr('data-id')
            if (dataId==nowId){
                $('.myitem2').eq(i).attr('class','myitem2 myactive')
            }
        }
    },500)

}



