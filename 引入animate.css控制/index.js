window.onload = function () {
    // 获取轮播图需要的元素
    var banner = document.getElementsByClassName('wrap')[0],
        lis = banner.getElementsByTagName('li'),
        prev = document.getElementsByClassName('prev')[0],
        next = document.getElementsByClassName('next')[0],
        dots = document.getElementsByClassName('dots')[0],
        dotsli = dots.getElementsByTagName('span');

    // 定义一个下标，表示当前要展示的图片
    var num = 0;
    var timer = null;

    function lunbo(){
        // 第一步取药遍历图片。更改left的值
        for( var i = 0; i<lis.length; i++){
            lis[i].style.opacity= 0
            lis[i].className=''
            dotsli[i].className =''
        }
        lis[num].style.opacity= 1
        lis[num].className ='animated fadeIn'
        dotsli[num].className = 'active'
   }

    
    function autoPlay(){
        timer = setInterval(function(){
           num ++;
           num = num%lis.length
           lunbo()
        },2000)
    }

    autoPlay()
    
    // 移入移除
    banner.addEventListener('mouseover',function(){
        clearInterval(timer)
        
    })
    banner.addEventListener('mouseout',function(){
        autoPlay()
    })


    // 点击左右切换

    prev.addEventListener('click',function(){
        num--;
        clickNav()
    })

    next.addEventListener('click',function(){
        num++;
        clickNav()
    })

    function clickNav(){
        num = num < 0? lis.length-1: num%lis.length;
        lunbo()
    }

    //点击圆点切换
    for( var i = 0; i<lis.length; i++){
        dotsli[i].id =i // 设置当前的下标
        dotsli[i].onclick = function(){
            num = this.id;
            lunbo()
        }
    }
}



