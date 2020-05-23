// 用户路由模块，user.router.js
export default [
  {
    path: '/register',
    component: () =>
      import(/* webpackChunkName: 'register' */ '@/views/user/Register.vue') // 动态导入路由
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '@/views/user/Login.vue')
  },
  {
    path: '/forget',
    component: () =>
      import(/* webpackChunkName: 'forget' */ '@/views/user/Forget.vue')
  }
]
