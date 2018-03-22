import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import router from './router'

import 'common/stylus/index.styl'

//body下所有元素的点击都不将有300ms的延迟
fastclick.attach(document.body)

Vue.use(VueLazyLoad,{
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
