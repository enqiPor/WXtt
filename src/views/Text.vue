<template>
	 <transition name="scaleUp">
	    <div class="text_cont">
			<div class="img_show">
				<img src='../../public/images/z1.png' alt="">
				<img src='../../public/images/z2.png' alt="">
				<img src='../../public/images/z3.png' alt="">
				<p></p>
				<img src='../../public/images/z4.png' alt="">
				<img src='../../public/images/z5.png' alt="">
				<img src='../../public/images/z6.png' alt="">
				<img src='../../public/images/z7.png' alt="">
				<img src='../../public/images/z8.png' alt="">
				<img src='../../public/images/z9.png' alt="">
				<img src='../../public/images/z10.png' alt="">
				<img src='../../public/images/z11.png' alt="">
				<img src='../../public/images/z12.png' alt="">
				<img src='../../public/images/z13.png' alt="">
				<img src='../../public/images/z14.png' alt="">
				<img src='../../public/images/z15.png' alt="">
				<img src='../../public/images/z16.png' alt="">
				<p></p>
				<img src='../../public/images/z17.png' alt="">
				<img src='../../public/images/z18.png' alt="">
				<img src='../../public/images/z19.png' alt="">
				<img src='../../public/images/z20.png' alt="">
				<img src='../../public/images/z21.png' alt="">
				<img src='../../public/images/z22.png' alt="">
				<img src='../../public/images/z23.png' alt="">
				<img src='../../public/images/z24.png' alt="">
				<img src='../../public/images/z25.png' alt="">
				<img src='../../public/images/z26.png' alt="">
				<img src='../../public/images/z27.png' alt="">
				<img src='../../public/images/z28.png' alt="">
				<img src='../../public/images/z29.png' alt="">
				<img src='../../public/images/z30.png' alt="">
				<img src='../../public/images/z31.png' alt="">
				<p></p>
				<img src='../../public/images/z32.png' alt="">
				<img src='../../public/images/z33.png' alt="">
				<img src='../../public/images/z34.png' alt="">
				<img src='../../public/images/z35.png' alt="">
				<img src='../../public/images/z36.png' alt="">
				<img src='../../public/images/z37.png' alt="">
				<img src='../../public/images/z38.png' alt="">
				<img src='../../public/images/z39.png' alt="">
				<img src='../../public/images/z40.png' alt="">
				<img src='../../public/images/z41.png' alt="">
				<img src='../../public/images/z42.png' alt="">
				<img src='../../public/images/z43.png' alt="">
				<img src='../../public/images/z44.png' alt="">
				<p></p>
				<img src='../../public/images/z45.png' alt="">
				<img src='../../public/images/z45.png' alt="">
				<img src='../../public/images/z47.png' alt="">
				<img src='../../public/images/z48.png' alt="">
				<img src='../../public/images/z49.png' alt="">
				<img src='../../public/images/z50.png' alt="">
				<img src='../../public/images/z51.png' alt="">
				<img src='../../public/images/z52.png' alt="">
				<p></p>
				<img src='../../public/images/z53.png' alt="">
				<img src='../../public/images/z54.png' alt="">
				<img src='../../public/images/z55.png' alt="">
				<img src='../../public/images/z56.png' alt="">
				<img src='../../public/images/z57.png' alt="">
				<img src='../../public/images/z58.png' alt="">
				<img src='../../public/images/z59.png' alt="">
				<img src='../../public/images/z60.png' alt="">
				<img src='../../public/images/z61.png' alt="">
				<img src='../../public/images/z62.png' alt="">
				<img src='../../public/images/z63.png' alt="">
				<img src='../../public/images/z64.png' alt="">
			</div>
			<div class="mask" :class="maskActive" v-show="showType"></div>
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
			showType:true
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
		},
		showTetx(){
			let imgLengt = $('.img_show img');
			let index = 0;
			let timer=setInterval(function(){
				$('.img_show img').each(function(thisIndex){
					if(index == thisIndex){
						$(this).animate({opacity:"1"})
					}
				})
				index++;
				if(index == $('.img_show img').length){
					clearInterval(timer);
				}
			},200)
		}
	  },
	  mounted () {
		  $('.mask').animate({
		  		opacity: 1
		  })
		  setTimeout(function(){
		  		$('.mask').animate({
		  			opacity: 0
		  		})
		  },600);
		  setTimeout(function(){
		  		this.showType=false;
		  },800);
		this.showTetx();
		//禁止页面下拉
		document.body.addEventListener('touchmove', function (e) {
	       e.preventDefault()
	    }, { passive: false })
		
		//上滑跳转
		let element = document.getElementById('video')
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
	.text_cont{
		width: 100%;
		height: 100%;
	}
	.img_show{
		text-align: center;
		position: absolute;
		width: 100%;
		left: 0;
		top: 58px;
	}
	.img_show img{
		height: 18px;
		margin-left: 5px;
		opacity: 0;
	}
	.img_show img:nth-child(3)~img{
		margin-top: 25px;
	}
	.donghua p{
			display: inline-block;
			opacity: 0;
			margin-left: 10px;
		}
		.scaleUp-enter-active, .scaleUp-leave-active {
		   transition: all 1s linear;
		 }
		.scaleUp-leave-active {
		  background: #000;
		}
</style>
