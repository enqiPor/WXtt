<template>
  <transition name="scaleUp">
    <div class="page" id="start">
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
     <p>上滑切换页面</p>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Home',
  data () {
      return {
        startX: 0, // 鼠标开始点击的x坐标
        startY: 0 ,
		}
  },
  methods: {
    addHandler (element, type, handler) {
        if (element.addEventListener) {
          element.addEventListener(type, handler, false)
        } else if (element.attachEvent) {
          element.attachEvent('on' + type, handler)
        } else {
          element['on' + type] = handler
        }
      },
    handleTouchEvent (event) {
        switch (event.type) {
          case 'touchstart':
            this.startX = event.touches[0].pageX
            this.startY = event.touches[0].pageY
            break
          case 'touchend':
            var spanX = event.changedTouches[0].pageX - this.startX
            var spanY = event.changedTouches[0].pageY - this.startY
            // console.log('spanY', spanY)
            if (spanY < -30) { // 向上
				this.$router.replace('/userlist')
            }
            break
        }
	}
  },
  mounted () {
	//禁止页面下拉
	document.body.addEventListener('touchmove', function (e) {
       e.preventDefault()
    }, { passive: false })
	
	//上滑跳转
	let element = document.getElementById('start')
      this.addHandler(element, 'touchstart', this.handleTouchEvent)
      this.addHandler(element, 'touchend', this.handleTouchEvent)
      this.addHandler(element, 'touchmove', this.handleTouchEvent)
	  
	//微信分享
	let imgUrl="";
	let weiXinDataObj=JSON.parse(window.localStorage.getItem("weiXinDataObj"));
	let shareTitle="宝宝 评估报告";//分享title内容
	let shareCont="VB-MAPP综合评估及改善计划";//分享内容
	let shareLink=weiXinDataObj.link;//分享链接
	wx.config({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: weiXinDataObj.appId, // 必填，公众号的唯一标识
		timestamp: weiXinDataObj.timestamp, // 必填，生成签名的时间戳
		nonceStr: weiXinDataObj.nonceStr, // 必填，生成签名的随机串
		signature: weiXinDataObj.signature,// 必填，签名，见附录1
		jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage',"onMenuShareQQ","onMenuShareQZone"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
	wx.ready(function(){
		//分享到朋友圈
		wx.onMenuShareTimeline({
			title: shareTitle, // 分享标题
			link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
			imgUrl: imgUrl, // 分享图标
			success: function () {
				// 用户确认分享后执行的回调函数
			},
			cancel: function () {
				// 用户取消分享后执行的回调函数
			}
		});
		//分享给朋友
		wx.onMenuShareAppMessage({
			title: shareTitle, // 分享标题
			desc: shareCont, // 分享描述
			link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
			imgUrl: imgUrl, // 分享图标
			type: '', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function () {
				// 用户确认分享后执行的回调函数
			},
			cancel: function () {
				// 用户取消分享后执行的回调函数
			}
		});
		//分享到QQ
		wx.onMenuShareQQ({
			title: shareTitle, // 分享标题
			desc: shareCont, // 分享描述
			link: shareLink, // 分享链接
			imgUrl: imgUrl, // 分享图标
			success: function () {
				// 用户确认分享后执行的回调函数
			},
			cancel: function () {
				// 用户取消分享后执行的回调函数
			}
		});
		//分享到空间
		wx.onMenuShareQZone({
			title: shareTitle, // 分享标题
			desc: shareCont, // 分享描述
			link: shareLink, // 分享链接
			imgUrl: imgUrl, // 分享图标
			success: function () {
				// 用户确认分享后执行的回调函数
			},
			cancel: function () {
				// 用户取消分享后执行的回调函数
			}
		});
	});
  }
}
</script>
<style lang="scss">
	.scaleUp-enter-active, .scaleUp-leave-active {
	  transition: all 1s linear;
	 }
	.scaleUp-leave-active {
	  background: #000;
	}
	#start{
		width: 100%;
		height: 100%;
	}
	html,body{
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
    .page{
        animation:pageShow 2s;
        -moz-animation:pageShow 2s;
        -webkit-animation:pageShow 2s;
        -o-animation:pageShow 2s;
        height: 100%;
        width: 100%;
    }
    @-webkit-keyframes page{
     0%   {
      background: #000;
     }
     100%  {
      background: #fff;
     }
    }
</style>
