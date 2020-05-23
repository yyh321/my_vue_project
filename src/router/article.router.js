// 文章路由模块 article.router.js
export default [
  {
    path: '/post',
    name: 'post',
    component: () =>
      import(/* webpackChunkName: 'post' */ '@/views/article/Post.vue'),
    meta: {
      needLogin: true
    }
  }
]
