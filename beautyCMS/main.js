// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/comm/iconfont/iconfont.css'
import echarts from 'echarts'
import Identify from './components/identify/identify'

Vue.prototype.$echarts = echarts
Vue.use(Identify)
Vue.use(elementUI)
Vue.$http=axios
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$http=axios

//拦截请求，打开过度动画
var lodinging
// axios.interceptors.request.use(config =>{
//   lodinging=elementUI.Loading.service({
//     fullscreen:true,text:'加载中...',background:'rgba(0,0,0,0.8)'
//   })
//   return config
// },function (error) {
//   return Promise.reject(error)
// })
// axios.interceptors.response.use(response=>{
//   lodinging.close()
//   return response
// },function (error) {
//   return Promise.reject(error)
// })
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
