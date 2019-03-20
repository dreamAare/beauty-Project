import ModuleManage from '@/components/moduManage/ModuleManage'
import Store from '../store/store'
export default [
  {
    path:'/module',
    name:'module',
    component:ModuleManage,
    meta: {
      isAuth: '模块管理'
    }
  }
]
