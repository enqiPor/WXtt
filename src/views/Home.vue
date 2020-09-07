<template>
    <div class="page" id="start" :class="bjType">
		<div class="looding" v-show="contTypeO">
			<div>
				<p class="lodding1" id="lodding_img">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d1.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d2.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d3.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d4.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d5.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d6.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d7.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d8.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d9.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d10.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d11.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d12.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d13.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d14.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d15.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d16.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d17.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d18.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d19.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d20.png" alt="">
					<img src="https://ingcare.oss-cn-beijing.aliyuncs.com/images/d21.png" alt="">
				</p>
				<p></p>
			</div>
		</div>
		<div class="vide-box"  v-show="contTypeT">
			<div class="video-style" :class="windowHeightClass">
				<video  x5-playsinline="" id="video" playsinline="" x-webkit-airplay="allow" style="object-fit:fill" poster="https://ingcare.oss-cn-beijing.aliyuncs.com/images/video_img.jpg" src="http://ingcare.oss-cn-beijing.aliyuncs.com/Seventeenthabandoned.mp4 " controls="controls"></video>
			</div>
			<div class="slide-uop">
				<p></p>
				<p class="slide-uop-d"></p>
			</div>
		</div>
		<div class="mask" :class="maskActive" v-show="showType"></div>
    </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
	return{
		maskActive:'',
		showType:true,
		contTypeO:true,
		contTypeT:false,
		bjType:'bjType1',
		appId:'',
		timestamp:'',
		nonceStr:'',
		signature:'',
		link:'',
		windowHeightClass:''
	}
  },
  mounted () {
	  if(window.innerHeight < 560){
		 this.windowHeightClass='window-height-class' 
	  }
	  var thisObj=this;
	  //监听视频是否播放
	  let videoEvn=document.getElementById("video");
	  let audio = document.getElementById("music");
		  videoEvn.addEventListener('play', function(e) {
		  				audio.pause();
		  });
		   
	  videoEvn.ontimeupdate = function() {
		  //false 点击了播放  true 点击了暂停 
		  if(videoEvn.paused == false){
			  audio.pause();
		  }else{
			  audio.play();
		  }
		}
		   

	  videoEvn.addEventListener('pause', function(e) {
	  			audio.play();
	  });
	  videoEvn.addEventListener('ended', function(e) {
	  			audio.play();
	  });
	if(window.location.href.split("?type=")[1] == "1"){
		this.showType=true;
		this.contTypeO=false;
		this.contTypeT=true;
		this.bjType="bjType2";
		setTimeout(function(){
				$('.mask').animate({
					opacity: 0
				})
		},300);
		setTimeout(function(){
				thisObj.showType=false;
		},600);
		//上滑跳转
		let element = document.getElementById('start')
		  this.addHandler(element, 'touchstart', this.handleTouchEvent)
		  this.addHandler(element, 'touchend', this.handleTouchEvent)
		  this.addHandler(element, 'touchmove', this.handleTouchEvent)
	}else{
		this.showType=false;
		this.loadding();
	}
	//禁止页面下拉
	document.body.addEventListener('touchmove', function (e) {
       e.preventDefault()
    }, { passive: false })
	//微信分享
	  this.$axios.get('http://weixin.ingclass.org/webstage/weixin/common/login/getShareInfo.do?platCode=gh&current_url='+encodeURIComponent(window.location.href)).then(({data}) => {
			thisObj.appId=data.appId;
	  		thisObj.timestamp=data.timestamp;
	  		thisObj.nonceStr=data.nonceStr;
	  		thisObj.signature=data.signature;
	  		thisObj.link=data.link;
	  });
	 setTimeout(function(){
		//微信分享
		  let imgUrl=$("#hide_img").attr("src");
		  let shareTitle="99公益日，一起为自闭症孩子助力免费课";//分享title内容
		  let shareCont="你的每一次转发，都有一个命运将被改变";//分享内容
		  let shareLink=thisObj.link+"?type=1";//分享链接
		wx.config({
			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId: thisObj.appId, // 必填，公众号的唯一标识
			timestamp: thisObj.timestamp, // 必填，生成签名的时间戳
			nonceStr: thisObj.nonceStr, // 必填，生成签名的随机串
			signature: thisObj.signature,// 必填，签名，见附录1
			jsApiList: ['onMenuShareTimeline', 'updateAppMessageShareData',"onMenuShareQQ","onMenuShareQZone"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
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
			wx.updateAppMessageShareData({
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
	},1500)
  },
  methods:{
	 loadding(){
		 let thisObj=this;
		 let imgLengt = $('.lodding1 img');
		 let index = 0;
		 let timer=setInterval(function(){
		 	$('.lodding1 img').hide().each(function(thisIndex){
		 		if(index == thisIndex){
		 			$(this).show()
		 		}
		 	})
		 	index++;
		 	if(index == 21){
		 		clearInterval(timer);
				thisObj.showType=true;
				$('.mask').animate({
					opacity: 1
				})
				setTimeout(function(){
					thisObj.contTypeO=false;
					thisObj.contTypeT=true;
					thisObj.bjType="bjType2";
					$('.mask').animate({
						opacity: 0
					})
				},300);
				setTimeout(function(){
					thisObj.showType=false;
				},600)
				let element = document.getElementById('start')
				  thisObj.addHandler(element, 'touchstart', thisObj.handleTouchEvent)
				  thisObj.addHandler(element, 'touchend', thisObj.handleTouchEvent)
				  thisObj.addHandler(element, 'touchmove', thisObj.handleTouchEvent)
		 	}
		 },200)
	 },addHandler (element, type, handler) {
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
					this.$router.replace('/text');
	            }
	            break
	        }
		}
  }
}
</script>
<style lang="scss">
	.vide-box,.video-style{
		width: 100%;
	}
	.video{
		height: 80%;
		width: 100%;
		overflow: hidden;
	}
	.video-style{
		position: absolute;
		left: 0;
		top: 190px;
		height: 210px;
	}
	.video-style video{
		width: 100%;
		height: 100%;
	}
	.slide-uop{
		position: absolute;
		bottom: 30px;
		text-align: center;
		width: 100%;
		left: 0;
		
	}
	.slide-uop p:first-child{
		width: 100px;
		height: 16px;
		background: url(https://ingcare.oss-cn-beijing.aliyuncs.com/images/hua.png) no-repeat;
		background-size: 100%;
		margin: 0 auto;
	}
	.slide-uop p:last-child{
		width: 42px;
		height: 28px;
		background: url(https://ingcare.oss-cn-beijing.aliyuncs.com/images/xia.png) no-repeat;
		background-size: 100%;
		margin: 0 auto;
		margin-top: 16px;
	}
	.slide-uop-d{
		color: red;
		animation: bounce-down 1.5s linear infinite;
	}
	@-webkit-keyframes bounce-down {
	  25% {-webkit-transform: translateY(-3px);}
	  50%, 100% {-webkit-transform: translateY(0);}
	  75% {-webkit-transform: translateY(3px);}
	 }
	 
	 @keyframes bounce-down {
	  25% {transform: translateY(-3px);}
	  50%, 100% {transform: translateY(0);}
	  75% {transform: translateY(3px);}
	 }
	.mask{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		z-index: 2;
		opacity: 1;
	}
	.looding{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		display: flex;
		-webkit-display: flex;
		-moz-display: flex;
		-o-display: flex;
		align-items: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-o-align-items: center;
		justify-content: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-o-justify-content: center;
	}
	.looding1{
		background:#fbda5c;
	}
	.looding div p:first-child{
		width: 230px;
		height: 16px;
	}
	.looding div p:last-child{
		width: 60px;
		height: 14px;
		background: url(https://ingcare.oss-cn-beijing.aliyuncs.com/images/Loading.png) no-repeat;
		background-size: 100% 100%;
		margin: 0 auto;
		margin-top: 15px;
	}
	.looding div p img{
		display: none;
		width: 100%;
		height: 100%;
	}
	.looding div p img:first-child{
		display: block;
	}
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
	.bjType1{
		background: url(https://ingcare.oss-cn-beijing.aliyuncs.com/images/max_home_bj.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		-webkit-background-size: 100% 100%;
	}
	.bjType2{
		background: url(https://ingcare.oss-cn-beijing.aliyuncs.com/images/max_home_bj1.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		-webkit-background-size: 100% 100%;
	}
	#web_bg{
	  
	}
	html,body{
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	
	
    .mask_active{
        animation:pageShow 2s;
        -moz-animation:pageShow 2s;
        -webkit-animation:pageShow 2s;
        -o-animation:pageShow 2s;
		-webkit-animation-iteration-count:1;
        height: 100%;
        width: 100%;
    }
    @-webkit-keyframes pageShow{
		 0%   {
		  opacity: 1;
		 }
		 100%  {
		  opacity: 0;
		 }
    }
	@media screen and (max-height: 670px){
		.bjType1{
			//background-size: cover;
			background: url(https://ingcare.oss-cn-beijing.aliyuncs.com/images/min_home_bj.jpg) no-repeat;
			background-size: 100% 100%;
		}
		.bjType2{
			//background-size: cover;
			background: url(https://ingcare.oss-cn-beijing.aliyuncs.com/images/min_home_bj1.jpg) no-repeat;
			background-size: 100% 100%;
		}
		.video-style{
			position: absolute;
			left: 0;
			top: 180px;
		}
	}
	@media screen and (min-width: 650px){
		.video-style{
			height: 300px!important;
			top: 280px!important;
		}
	}
	@media screen and (min-width: 400px){
		.video-style{
			height: 240px;
		}
	}
	.window-height-class{
		top: 150px!important;
		height: 200px;
	}
</style>
