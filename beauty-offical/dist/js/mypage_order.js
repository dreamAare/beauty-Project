
    getCurrentDate();
    //默认给一周的li设置为黑色字体
    $('#li_one>a').addClass('colorBlack');
    week();
function getCurrentDate() {
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    //给第二个日期选择框设置初值
    // console.log(dateArr);
    if(month<10){
        month='0'+month
    }
    if(day<10){
        day='0'+day
    }
    //获取年月日
    var arr=[year,month,day];
    var dateArr=arr.join('-');
    var arrivedDate=document.getElementById('date2');
    arrivedDate.setAttribute('value',dateArr);
}

$('.order_ul>li:nth-child(1)').on('click',week);
$('.order_ul>li:nth-child(2)').on('click',monthClick);
$('.order_ul>li:nth-child(3)').on('click',threeMonth);
$('.order_ul>li:nth-child(4)').on('click',sixMonth);
$('.order_ul>li:nth-child(5)').on('click',oneYear);
//一周
function week() {
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    //设置第二个日期选择框的值
    //设置不是闰年的月份数组
    var IsNotArr=[31,28,31,30,31,30,31,31,30,31,30,31];
    var startDay=day-7;
    var startYear=year;
    var startMonth=month;
    if(startDay<=0){
        //用七天来减当前这个月的号数，在进行上一个月的计算
        var BigDay=7-day;
        for(var i = 0 ; i < IsNotArr.length;i++){
            if(startMonth==i+1){
                startMonth-=1;
                if(startMonth<=0){
                    startMonth=12;
                    startYear-=1;
                }
                /*前面month已经进行了减一，直接给赋值为下标*/
                startDay=IsNotArr[startMonth-1]-BigDay;
                break;
            }
        }
    }
    if(startDay<10){
        startDay='0'+startDay;
    }
    if(startMonth<10){
        startMonth='0'+startMonth
    }
    var DateArr=[startYear,startMonth,startDay];
    var newDateArr=DateArr.join('-');
    $('#date1').attr('value',newDateArr);
}
//一个月
function monthClick() {
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    //设置第二个日期选择框的值
    //设置不是闰年的月份数组
    var startYear=year;
    var startMonth=month-1;
    if(startMonth<=0){
        startMonth=12;
        startYear-=1;
    }
    if(day<10){
        day='0'+day;
    }
    if(startMonth<10){
        startMonth='0'+startMonth;
    }
    var DateArr=[startYear,startMonth,day];
    var newDateArr=DateArr.join('-');
    $('#date1').attr('value',newDateArr);
}
//三个月
function threeMonth() {
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var startYear=year;
    var startMonth=month-3;
    if(startMonth<=0){
        var DefferMonth=3-month;
        startYear-=1;
        startMonth=12-DefferMonth;
    }
    if(startMonth<10){
        startMonth='0'+startMonth;
    }
    if(day<10){
        day='0'+day;
    }
    var DateArr=[startYear,startMonth,day];
    var newDateArr=DateArr.join('-');
    $('#date1').attr('value',newDateArr);
}
//六个月
function sixMonth() {
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var startYear=year;
    var startMonth=month-6;
    if(startMonth<=0){
        var DefferMonth=6-month;
        startYear-=1;
        startMonth=12-DefferMonth;
    }
    if(startMonth<10){
        startMonth='0'+startMonth;
    }
    if(day<10){
        day='0'+day;
    }
    var DateArr=[startYear,startMonth,day];
    var newDateArr=DateArr.join('-');
    $('#date1').attr('value',newDateArr);
}
//一年
function oneYear() {
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var startYear=year-1;
    if(month<10){
        month='0'+month;
    }
    if(day<10){
        day='0'+day;
    }
    var DateArr=[startYear,month,day];
    var newDateArr=DateArr.join('-');
    $('#date1').attr('value',newDateArr);
}

$('.order_ul>li').on('click',function () {
    $(this).parent().find('li>a').removeClass('colorBlack');
    $(this).children().addClass('colorBlack');
});


$('#check').on('click',function () {
    /*查询按钮的操作*/
    let selectValue='';
    let options=$('#mySelect>option');
    for(var i = 0 ; i < options.length;i++){
        if(options[i].selected==true){
            if(options[i].value!=0){
                selectValue=options[i].innerText;
            }
            break;
        }
    }
    var date1=$('#date1').val();
    var date2=$('#date2').val();
    $.ajax({
        type:'post',
        url:'/myPage/timeChoose',
        data:{
            'selectValue':selectValue,
            'date1':date1,
            'date2':date2
        },
        success:function (data) {
            // console.log(data);
            if(data!='false'){
                $('.myTbody').html('');
                let str='';
                for(var i = 0 ; i < data.length ; i++){
                    str+='  <tr>\n' +
                        '                    <td >'+data[i].order_id+'</td>\n' +
                        '                    <td>'+data[i].pay_time+'</td>\n' +
                        '                    <td class="td_products">\n' +
                        '                        <div><a href="/shop/shopshow?productId='+data[i].product_id+'"><img src="/'+data[i].pic_path+'" alt=""></a></div>' +
                        '                        <div>\n' +
                        '                            <div class="product_name">'+data[i].product_name+'</div>\n' +
                        '                            <div class="color_name">\n' +
                        '                                <div style="background-color:'+data[i].color_value+'">\n' +
                        '\n' +
                        '                                </div>\n' +
                        '                                <span>'+data[i].color_name+'</span>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </td>\n' +
                        '                    <td>'+data[i].quantity+'</td>\n' +
                        '                    <td >$<span class="money2">'+data[i].quantity*data[i].price+data[i].fare+'</span></td>\n' +
                        '                    <td>'+data[i].STATUS+'</td>\n' +
                        '                </tr>'
                }
                $('.myTbody').html(str);
                $('.haveOrder').css('display','none');
                $('.selectPage').css('display','none');
                moneyToFixed();
            }else{
                $('.myTbody').html('');
                $('.haveOrder').css('display','block')
                $('.selectPage').css('display','none');
            }
        }
    })
});

moneyToFixed();
function moneyToFixed() {
    let money2=document.getElementsByClassName('money2');
    for(var i = 0 ; i < money2.length ; i++){
        let text=parseFloat(money2[i].innerText).toFixed(2);
        money2[i].innerText=text;
    }
}

/*分页功能  /*查询总页数*/
    var pageCount=0;
    var currentPage=1;
function getCountPage() {
    $.ajax({
        type: 'post',
        url:'/myPage/getCountOrderPage',
        data:{},
        success:function (data) {
            pageCount=data;
            if(data>1){
                $('.selectPage').css('display','block')
            }
        }
    });
    current(currentPage);
}
getCountPage();

/*获得当前页面的数据*/
function current(currentPage) {
    $.ajax({
        type:'post',
        url:'/myPage/currentPage',
        data:{'currentPage':currentPage},
        success:function (data) {
            // console.log(data)
            if(data.length>0){
                $('.myTbody').html('');
                let str='';
                for(var i = 0 ; i < data.length ; i++){
                    str+='  <tr>\n' +
                        '                    <td >'+data[i].order_id+'</td>\n' +
                        '                    <td>'+data[i].pay_time+'</td>\n' +
                        '                    <td class="td_products">\n' +
                        '                        <div><a href="/shop/shopshow?productId='+data[i].product_id+'"><img src="/'+data[i].pic_path+'" alt=""></a></div>' +
                        '                        <div>\n' +
                        '                            <div class="product_name">'+data[i].product_name+'</div>\n' +
                        '                            <div class="color_name">\n' +
                        '                                <div style="background-color:'+data[i].color_value+'">\n' +
                        '\n' +
                        '                                </div>\n' +
                        '                                <span>'+data[i].color_name+'</span>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </td>\n' +
                        '                    <td>'+data[i].quantity+'</td>\n' +
                        '                    <td >$<span class="money2">'+data[i].quantity*data[i].price+data[i].fare+'</span></td>\n' +
                        '                    <td>'+data[i].STATUS+'</td>\n' +
                        '                </tr>'
                }
                $('.myTbody').html(str);
            }else{
                toastr.warning("查询无果！");
            }
        }
    })
}

$('.banner').on('click','.preBtn',function () {
    currentPage--;
    if(currentPage == 0 ){
        currentPage=1;
        pageNow = 1;
        toastr.warning("已经是第一页了！");
    }else{
        current(currentPage)
    }
});
    $('.banner').on('click','.nextBtn',function () {
        currentPage++;
        if(currentPage>pageCount ){
            currentPage=pageCount;
            toastr.warning("已经是最后一页了！");
        }else{
            current(currentPage)
        }
    });
