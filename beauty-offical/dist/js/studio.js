window.onscroll = function () {
    // console.log(scrollY);
    if (scrollY>=30){
        $('.head_bottom_inner').css({
            'position' : 'fixed',
            'top' : '0px',
            'line-height' : '52px',
            'padding' : '1px 10%',
            'transition' : 'all 0.3s',
            'z-index' : '999',
            'height' : '55px'
        });
        $('.logo').find('img').css({
            'transform' : 'scale(0.7)',
            'transition' : 'all 0.3s'
        });
    }else {
        $('.head_bottom_inner').css({
            'position' : 'relative',
            'line-height' : '47px',
            'padding' : '20px 10%',
            'transition' : 'all 0.3s',
            'z-index' : '999',
            'height' : '75px'
        });
        $('.logo').find('img').css({
            'transform' : 'scale(1)',
            'transition' : 'all 0.3s'
        })
    }
}
var outDiv = document.getElementById('content');
outDiv.onwheel = function(event){
    //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）
    event.preventDefault();
    //设置鼠标滚轮滚动时屏幕滚动条的移动步长
    var step = 100;
    if(event.deltaY < 0){
        //向上滚动鼠标滚轮，屏幕滚动条左移
        this.scrollLeft -= step;
    } else {
        //向下滚动鼠标滚轮，屏幕滚动条右移
        this.scrollLeft += step;
    }
}