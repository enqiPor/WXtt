<template>
  <transition name="scaleUp">
    <div class="page" id="start">
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    
  },
  mounted () {
	//禁止页面下拉
	document.body.addEventListener('touchmove', function (e) {
       e.preventDefault()
    }, { passive: false })
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
