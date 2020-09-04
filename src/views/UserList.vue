<template>
  <transition name="scaleDown">
	<div class="showPage" id="showPage">
        <div class="child-text">
            <img src="../../public/images/dian.png" alt="">
            <img src="../../public/images/ji.png" alt="">
            <img src="../../public/images/tou.png" alt="">
            <img src="../../public/images/xiang.png" alt="">
            <img src="../../public/images/liao.png" alt="">
            <img src="../../public/images/jie.png" alt="">
            <img src="../../public/images/ta.png" alt="">
            <img src="../../public/images/men.png" alt="">
            <img src="../../public/images/de.png" alt="">
            <img src="../../public/images/gu.png" alt="">
            <img src="../../public/images/shi.png" alt="">
        </div>
        <div class="airship"></div>
<!--        包包-->
        <div class="box-baobao-qiu">
            <p class="header-baobao" @click="baobaoHeader"></p>
        </div>
<!--        豪豪-->
        <div class="box-haohao-qiu">
            <p class="header-haohao"  @click="haohaoHeader"></p>
        </div>
<!--        辰辰-->
        <div class="box-chenchen-qiu">
            <p class="header-chenchen" @click="chenchenHeader"></p>
        </div>
<!--        麦兜-->
        <div class="box-maidou-qiu">
            <p class="header-maidou" @click="maidouHeader"></p>
        </div>
<!--        江一-->
        <div class="box-jiangyi-qiu">
            <p class="header-jiangyi" @click="jiangyiHeader"></p>
        </div>
<!--        融融-->
        <div class="box-rongrong-qiu">
            <p class="header-rongrong" @click="rongrongHeader"></p>
        </div>
<!--        威利-->
        <div class="box-weili-qiu">
            <p class="header-weili" @click="weiliHeader"></p>
        </div>
<!--        七个孩子海报-->
        <div class="child-box chenchen" :status="childStatus">
            <img :src=childImage alt="" class="chiild-image">
            <img src="../../public/images/guanbi.png" alt="" class="close-image" @click="closeChild">
            <img src="../../public/images/fenxiang.png" alt="" class="share-image" @click="shareFunc" v-show="shareHidden">
            <img src="../../public/images/baocun.png" alt="" class="save-image" v-show="saveHidden">
        </div>

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
              childStatus:'',
              childImage:'',
              shareHidden:true,
              saveHidden:false
          }
	  },
	  methods: {
          chenchenHeader(){
              $('.child-box').fadeIn();
              this.childStatus = 3;
              this.childImage = require('../../public/images/chenchen.jpg');
          },
          baobaoHeader(){
              $('.child-box').fadeIn();
              this.childStatus = 1;
              this.childImage = require('../../public/images/baobao.png');
          },
          haohaoHeader(){
              $('.child-box').fadeIn();
              this.childStatus = 2;
              this.childImage = require('../../public/images/haohao.png');
          },
          maidouHeader(){
              $('.child-box').fadeIn();
              this.childStatus = 4;
              this.childImage = require('../../public/images/maidou.png');
          },
          jiangyiHeader(){
              $('.child-box').fadeIn();
              this.childStatus = 5;
              this.childImage = require('../../public/images/jiangyi.png');
          },
          rongrongHeader(){
              $('.child-box').fadeIn();
              this.childStatus = 6;
              this.childImage = require('../../public/images/rongrogn.png');
          },
          weiliHeader(){
              $('.child-box').fadeIn();
              this.childStatus = 7;
              this.childImage = require('../../public/images/weli.png');
          },
          closeChild(){
              $(".child-box").fadeOut();
              this.childImage = '';
              this.shareHidden = true;
              this.saveHidden = false;
          },
          shareFunc(){
              var v = this.childStatus;
              if (v == 1){
                  this.childImage = require('../../public/images/baobao2.jpg');
                  // $('.child-box').css("background","url(../../public/images/bag.png)");
                  // $(".")
                  this.shareHidden = false;
                  this.saveHidden = true;
              }else if(v == 2){
                  this.childImage = require('../../public/images/haohao2.jpg');
                  // $('.child-box').css("background","url(../../public/images/bag.png)");
                  // $(".")
                  this.shareHidden = false;
                  this.saveHidden = true;
              }else if(v == 3){
                  this.childImage = require('../../public/images/chenchen2.jpg');
                  // $('.child-box').css("background","url(../../public/images/bag.png)");
                  // $(".")
                  this.shareHidden = false;
                  this.saveHidden = true;
              }else if (v == 4){
                  this.childImage = require('../../public/images/maidou2.jpg');
                  // $('.child-box').css("background","url(../../public/images/bag.png)");
                  // $(".")
                  this.shareHidden = false;
                  this.saveHidden = true;
              }else if (v == 5){
                  this.childImage = require('../../public/images/jiangyi2.jpg');
                  // $('.child-box').css("background","url(../../public/images/bag.png)");
                  // $(".")
                  this.shareHidden = false;
                  this.saveHidden = true;
              }else if (v == 6){
                  this.childImage = require('../../public/images/rongrong2.jpg');
                  // $('.child-box').css("background","url(../../public/images/bag.png)");
                  // $(".")
                  this.shareHidden = false;
                  this.saveHidden = true;
              }else if (v == 7){
                  this.childImage = require('../../public/images/weili2.jpg');
                  // $('.child-box').css("background","url(../../public/images/bag.png)");
                  // $(".")
                  this.shareHidden = false;
                  this.saveHidden = true;
              }
              console.log(v)
          },
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
	            this.startX = event.touches[0].pageX;
	            this.startY = event.touches[0].pageY;
	            break
	          case 'touchend':
	            var spanX = event.changedTouches[0].pageX - this.startX;
	            var spanY = event.changedTouches[0].pageY - this.startY;
	            // console.log('spanY', spanY)
	            // if (spanY > 30) { // 向上
				// 	this.$router.replace('/text')
	            // }else if (spanY > -30){
				// 	this.$router.replace('/childpage')
				// }
	            break
	        }
		}
	  },
	  mounted () {
		//上滑跳转
		let element = document.getElementById('showPage')
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
	.scaleDown-enter-active, .scaleDown-leave-active {
	  transition: all 1s linear;
	 }
	.scaleDown-leave-active {
		background: #000;
	}
    .child-text{
        width: 320px;
        display: flex;
        position: absolute;
        left: 50%;
        margin-left: -160px;
        top: 124px;
        img{
            display: block;
            width: 28px;
            height: 30px;
        }
    }
	.showPage{
		animation:pageShow 2s;
		-moz-animation:pageShow 2s;
		-webkit-animation:pageShow 2s;
		-o-animation:pageShow 2s;
		height: 100%;
		width: 100%;
	}
	#showPage{
		width: 100%;
		height: 100%;
		background: url(../../public/img-bg/bg1.jpg) no-repeat;
		background-size: 100% 100%;
		-webkit-background-size: 100% 100%;
		background-attachment: fixed;
		-webkit-background-attachment: fixed;
	}
	@-webkit-keyframes pageShow
	{
	    0%   {
			background: #000;
		}
	    100%  {
			background: #fff;
		}
	}
    .child-box{
        width: 100%;
        height: 100%;
        background: url("../../public/images/bag.png") no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        position: relative;
        display: none;
        img{
            display: block;
            position: absolute;
        }
    }
    .chiild-image{
        width: 83%;
        left: 50%;
        margin-left: -41.5%;
        top: 30px;
    }
    .close-image{
        width: 22px;
        height: 22px;
        top: 44px;
        right: 44px;
    }
    .share-image{
        width: 109px;
        height: 38.5px;
        bottom: 22px;
        left: 50%;
        margin-left: -54.5px;
    }
    .save-image{
        width: 161px;
        height: 48.5px;
        left: 50%;
        margin-left: -80.5px;
        bottom: 28px;
    }
    /*飞船*/
    .airship{
        width: 154px;
        height: 153px;
        background: url("../../public/images/feichuan.png") no-repeat;
        position: absolute;
        background-size: 100% 100%;
        top: 27px;
        left: 11px;
    }
    .box-baobao-qiu{
        width: 78px;
        height: 51px;
        position: absolute;
        background: url("../../public/images/qiu1.png") no-repeat;
        background-size: 100% 100%;
        right: 17px;
        top: 55px;
    }
    .header-baobao{
        width: 42.5px;
        height: 65.5px;
        position: absolute;
        background: url("../../public/images/bao.png") no-repeat;
        background-size: 100% 100%;
        top: -46px;
        right: 59px;
        animation: bounce-down 1.5s linear infinite;
    }
    .box-haohao-qiu{
        width: 61px;
        height: 77px;
        position: absolute;
        background: url("../../public/images/qiu2.png") no-repeat;
        background-size: 100% 100%;
        top: 203px;
        left: 82px;
    }
    .header-haohao{
        width: 43.5px;
        height: 63px;
        position: absolute;
        background: url("../../public/images/hao.png") no-repeat;
        background-size: 100% 100%;
        top: -39px;
        left: -21px;
        animation: bounce-down 1.5s linear infinite;
    }
    .box-chenchen-qiu{
        width: 89.5px;
        height: 64px;
        position: absolute;
        background: url("../../public/images/qiu3.png") no-repeat;
        background-size: 100% 100%;
        top: 230px;
        right: 21.5px;
    }
    .header-chenchen{
        width: 42.5px;
        height: 65.5px;
        position: absolute;
        background: url("../../public/images/chen.png") no-repeat;
        background-size: 100% 100%;
        top: -52px;
        right: 65px;
        animation: bounce-down 1.5s linear infinite;
    }
    .box-maidou-qiu{
        width: 115px;
        height: 80.5px;
        position: absolute;
        background: url("../../public/images/qiu4.png") no-repeat;
        background-size: 100% 100%;
        left: 0px;
        top: 390px;
    }
    .header-maidou{
        width: 43px;
        height: 63px;
        position: absolute;
        background: url("../../public/images/mai.png") no-repeat;
        background-size: 100% 100%;
        top: -58px;
        left: 64px;
        animation: bounce-down 1.5s linear infinite;
    }
    .box-jiangyi-qiu{
             width: 42px;
             height: 42px;
             position: absolute;
             background: url("../../public/images/qiu5.png") no-repeat;
             background-size: 100% 100%;
             right: 23px;
             top: 378.5px;
         }
    .header-jiangyi{
        width: 43px;
        height: 63px;
        position: absolute;
        background: url("../../public/images/jiang.png") no-repeat;
        background-size: 100% 100%;
        top: -50px;
        right: 25px;
        animation: bounce-down 1.5s linear infinite;
    }
    .box-rongrong-qiu{
             width: 55.5px;
             height: 53.5px;
             position: absolute;
             background: url("../../public/images/qiu6.png") no-repeat;
             background-size: 100% 100%;
             left: 110px;
             top: 522px;
         }
    .header-rongrong{
        width: 43px;
        height: 63px;
        position: absolute;
        background: url("../../public/images/rong.png") no-repeat;
        background-size: 100% 100%;
        top: -56px;
        right: -23px;
        animation: bounce-down 1.5s linear infinite;
    }
    .box-weili-qiu{
        width: 92px;
        height: 68.5px;
        position: absolute;
        background: url("../../public/images/qiu7.png") no-repeat;
        background-size: 100% 100%;
        right: 51.5px;
        bottom: 0;
    }
    .header-weili{
        width: 43px;
        height: 60px;
        position: absolute;
        background: url("../../public/images/wei.png") no-repeat;
        background-size: 100% 100%;
        top: -56px;
        right: -23px;
        animation: bounce-down 1.5s linear infinite;
    }
</style>
