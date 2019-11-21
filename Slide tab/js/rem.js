$(function(){
    function setRem(){
        var clientWidth=$(window).width();//获取浏览器的宽度
        var nowRem=(clientWidth/375*10);//设置当前浏览器1rem=10px（以设备屏幕为375宽为标准），开发者可以将设计图中量出来的尺寸直接转化为rem单位：比如设计图是1倍图，设计图中某个图片宽度为100px,css中设置的样式为width:10rem;如果设计图是2倍图，设计图中某个图片宽度为100px，css中设置的样式为width:100/2/10=5rem;
        $("html").css("font-size",parseInt(nowRem)+"px");//设置更节点html的字体大小（px）
    };
    setRem();
    $(function(){
        var timer;
        $(window).bind("resize",function(){
            clearTimeout(timer)
            timer=setTimeout(function(){
                setRem();
            }, 100) 
		})
	}); 
});
