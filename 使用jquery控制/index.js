$(function(){
    // 先获取需要操作的元素
    var wrap = $('.wrap'),
        banner = $('.banner'),
        lis = $('.banner li'),
        next = $('.next'),
        prev = $('.prev'),
        dots = $('.dots span');
    var num = 0;  // 当前图片的下标
    var timer = null; // 设置时间函数
    
    // 实现轮播图
    function lunbo(){
        banner.animate({marginLeft: -num*1200 +'px'},1000)
        $.each(dots,function(index,item){
            $(dots[index]).removeClass()
        })
      $( dots[num]).addClass('active')
    }

    function autoplay(){
        timer = setInterval(function(){
            num++;
            num = num%lis.length;
            lunbo()
        },3000)
    }
    autoplay()
    // 移入移除
    wrap.hover(function(){clearInterval(timer)},function(){autoplay()})
    // 点击
    next.click(function(){
        num++;
        num = num%lis.length;
        lunbo()
    })
    prev.click(function(){
        num--;
        num = num < 0? lis.length-1:num%lis.length;
        lunbo()
    })

    $.each(dots,function(i){
        $(dots[i]).click(function(){
            num = this.id;
            lunbo()
        })
    })

})