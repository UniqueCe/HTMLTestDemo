/**
 * Created by l on 2017/3/29.
 */
$(function(){
    //首屏section高度
    var $wind=$(window);
    var winH= $wind.outerHeight();//窗口高度
    // var winW= $wind.outerWidth();//窗口宽度
    var $sectionPc=$('.section-pc');
    // $sectionPc.width(winW);
    $sectionPc.height(winH);

    //轮播切换
    var size=$('.s1_text').size();//获取s1_text的个数
    for(i=1;i<=size;i++){
        var span="<span></span>";//创建span标签
        $(".drop").append(span);//追加到drop
    }

    $('.s1_text').eq(0).show();
    $('.drop span').eq(0).addClass('active');
    // console.log($('.s1_text').eq(0));

    $('.drop span').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index=$(this).index();
        $(".s1_text").removeClass('s1_active');
        $('.s1_text').eq(index).stop().fadeIn(500).addClass('s1_active').siblings().stop().hide();
    })

    var i=0;
    var timer=0;

    function move(){
        i++;
        if(i==size){
            i=0;  //如果这是最后一张图片再按向右的按钮则切换到第一张图
        }
        $(".drop span").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
        $(".s1_text").removeClass('s1_active');
        $(".s1_text").eq(i).fadeIn(500).addClass('s1_active').siblings().hide();  //对应图片切换
    }

    function move2(){
        i--;
        if(i<0){
            i=size-1;  //如果这是最后一张图片再按向右的按钮则切换到第一张图
        }
        $(".drop span").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
        $(".s1_text").removeClass('s1_active');
        $(".s1_text").eq(i).fadeIn(500).addClass('s1_active').siblings().hide();  //对应图片切换
    }
    $('.prev_arrow').click(function(){
        move2();
    })
    $('.next_arrow').click(function(){
        move();
    })
    timer=setInterval(move,2500);

    $('.bannerBox,.prev_arrow,.next_arrow').mouseover(function(){
        console.log(123)
        clearInterval(timer);
    })
    $('.bannerBox,.prev_arrow,.next_arrow').mouseout(function(){
        console.log(456)
        timer=setInterval(move,2500);
    })

    $(window).scroll(function() {
        var s = $(window).scrollTop();
        if (s > 5) {
            $('.header-pc').addClass('headerActive');
        } else {
            $('.header-pc').removeClass('headerActive');
        }
    })


})