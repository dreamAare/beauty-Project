import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store/store'
import activityManage from './activityManageRouter'
import memberManage from './memberManageRouter'
import moduManage from './moduManageRouter'
import orderManage from './orderManageRouter'
import reportManage from './reportFromRouter'
import shopManage from './shopManageRouter'
import systemMain from './systemMainRouter'
import systemManage from './systemManageRouter'
import Main from '@/components/Main'
import Login from '@/components/login/Login'

Vue.use(Router)
var myRouter = new Router({
  routes: [
    {
      path:'/',
      name:'Mian',
      component:Main,
      meta: {
        isAuth: '首页管理'
      },
      children:[
        ...activityManage,
        ...memberManage,
        ...moduManage,
        ...orderManage,
        ...reportManage,
        ...shopManage,
        ...systemMain,
        ...systemManage
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

myRouter.beforeEach((to,from,next)=>{
  // console.log(Store.state.level)
  var mystate = false
  //从vuex中拿level判断是否有访问该页面的权限
  // var myLevel = Store.state.level
  for (let i=0;i<to.matched.length;i++) {
    if (to.matched[i].meta.isAuth){
      // sessionStorage.isLogin === 'true'
      if (Store.state.isLogin){
        // console.log(to.matched[i].meta.isAuth)
        if (to.matched[i].meta.isAuth!=='首页管理'){
          for (let j=0;j<Store.state.level2.length;j++){
            if(to.matched[i].meta.isAuth===Store.state.level2[j]){
              // console.log(to.matched[i].meta.isAuth)
              // console.log(Store.state.level2[j])
              mystate = true
              break;
            }
          }
          //在登录成功的情况下
          if (mystate){
            next()
          } else{
            new Vue().$notify({
              title: '警告',
              message: '你没有权限访问该页面',
              type: 'warning',
              duration: 0
            });
            next({
              path: '/systemMain'
            })
          }
        } else {
          // console.log('先放行了路由，又被后面item拦截了，形成无法访问')
          next()
        }

      } else {
        next({
          path: '/login'
        })
      }
    } else{
      next()
    }
  }



})


export default myRouter
