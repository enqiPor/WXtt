<template>
  <transition name="scaleUp">
    <div class="page" id="start">
		<div class="looding">
			<div>
				<p class="lodding1" id="lodding_img">
					<img src="../../public/images/d1.png" alt="">
					<img src="../../public/images/d2.png" alt="">
					<img src="../../public/images/d3.png" alt="">
					<img src="../../public/images/d4.png" alt="">
					<img src="../../public/images/d5.png" alt="">
					<img src="../../public/images/d6.png" alt="">
					<img src="../../public/images/d7.png" alt="">
					<img src="../../public/images/d8.png" alt="">
					<img src="../../public/images/d9.png" alt="">
					<img src="../../public/images/d10.png" alt="">
					<img src="../../public/images/d11.png" alt="">
					<img src="../../public/images/d12.png" alt="">
					<img src="../../public/images/d13.png" alt="">
					<img src="../../public/images/d14.png" alt="">
					<img src="../../public/images/d15.png" alt="">
					<img src="../../public/images/d16.png" alt="">
					<img src="../../public/images/d17.png" alt="">
					<img src="../../public/images/d18.png" alt="">
					<img src="../../public/images/d19.png" alt="">
					<img src="../../public/images/d20.png" alt="">
					<img src="../../public/images/d21.png" alt="">
				</p>
				<p></p>
			</div>
		</div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Home',
  mounted () {
	let imgLengt = $('.lodding1 img');
	let index = 0;
	let timer=setInterval(function(){
		$('.lodding1 img').hide().each(function(thisIndex){
			if(index == thisIndex){
				$(this).show()
			}
		})
		index++;
		if(index == 20){
			clearInterval(timer);
		}
	},300)
	//禁止页面下拉
	document.body.addEventListener('touchmove', function (e) {
       e.preventDefault()
    }, { passive: false })
  },
  methods:{
	  
  }
}
</script>
<style lang="scss">
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
	.looding div p:first-child{
		width: 230px;
		height: 16px;
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
		background: url(../../public/images/max_home_bj.png);
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
	
	@media screen and (max-height: 670px){
		#start{
			//background-size: cover;
			background: url(../../public/images/min_home_bj.png) no-repeat;
			background-size: 100% 100%;
		}
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
