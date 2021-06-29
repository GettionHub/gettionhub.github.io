$(function(){
    var content='';
    content +='<!-- 客服动态内容 开始 -->';
     content +='<div class="main-im">';
    content +='<div id="open_im" class="open-im">&nbsp;</div><div class="close-ball">x</div>';
    content +='<div class="im_main" id="im_main">';
    content +='<div id="close_im" class="close-im"><a href="javascript:void(0);" title="点击关闭">&nbsp;</a></div>';
    content +='<a href="https://openai.weixin.qq.com/webapp/lEEkDwSGGj8byyOqyyUrKuP9p57Ykk?robotName=%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D" target="_blank" class="im-qq qq-a" title="在线客服">';
    content +='<div class="qq-container"></div>';
    content +='<div class="qq-hover-c"><img class="img-qq" src="https://cdn.jsdelivr.net/gh/1000gcc/1000gcc.github.io@master/kefu/images/qq.png"></div>';
    content +='<span>客服</span>';
    content +='</a>';
    content +='<div class="im-tel">';
    content +='<div>QQ群号:</div>';
    content +='<div class="tel-num">18980535</div>';
    content +='<div>梧州新云网络</div>';
    content +='<div class="tel-num"><a href="https://www.newsaas.cn" target="_blank" title="新云网络：newsaas.cn">[官网]</a><a href="https://blog.1000g.cc" target="_blank" style="margin-left:5px;" title="千稿博客：1000g.cc">[博客]</a><br /><a href="https://jq.qq.com/?_wv=1027&k=TVJyVb7F" target="_blank" style="margin-left:5px;" title="点击查看">聪明的同学点这里</a></div>';
    content +='</div>';
    content +='<div class="im-footer" style="position:relative">';
    content +='<div class="weixing-container">';
    content +='<div class="weixing-show">';
    content +='<div class="weixing-txt" style="font-size:13px;">微信扫一扫<br>关注公众号<br><br><a href="https://www.newsaas.cn" target="_blank" title="欢迎关注梧州新云网络">新云网络</a></div>';
    content +='<img class="weixing-ma" src="https://cdn.jsdelivr.net/gh/1000gcc/1000gcc.github.io@master/kefu/images/qr_gzh.jpg">';
    content +='<div class="weixing-sanjiao"></div>';
    content +='<div class="weixing-sanjiao-big"></div>';
    content +='</div>';
    content +='</div>';
    content +='<div class="go-top"><a href="javascript:;" title="返回顶部"></a> </div>';
    content +='<div style="clear:both"></div>';
    content +='</div>';
    content +='</div>';
    content +='</div>';
    content +='<!-- 客服动态内容 结束 -->';
    $("body").append(content);
	$('#close_im').bind('click',function(){
		$('#main-im').css("height","0");
		$('#im_main').hide();
		$('#open_im').show();
	});
	$('#open_im').bind('click',function(e){
		$('#main-im').css("height","272");
		$('#im_main').show();
		$(this).hide();
	});
	$('.go-top').bind('click',function(){
		$(window).scrollTop(0);
	});
	$(".weixing-container").bind('mouseenter',function(){
		$('.weixing-show').show();
	})
	$(".weixing-container").bind('mouseleave',function(){        
		$('.weixing-show').hide();
	});

//	定时关闭
  setTimeout(function () {
    $('#im_main').hide();
  },3000);
      //    关闭小球，防止遮挡
  $('.close-ball').bind('click', function() {
    if ($('.close-ball').hasClass('show')) {
      $('#open_im').show()
      $('.close-ball').removeClass('show')
    } else {
      $('.close-ball').addClass('show')
      $('.im_main').hide()
      $('#open_im').hide()
    }
  })
});
