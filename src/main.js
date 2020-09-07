import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(VueVideoPlayer);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
