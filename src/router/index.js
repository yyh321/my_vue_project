import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// require.context 方法参数有4个
/*
require.context(
  directory: String,//要读取目录
  includeSubdirs: Boolean // 是否读取子目录
  filter: RegExp, // 要读取的文件
  mode: String, // 模式,'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once', default 'sync'
)
*/

const files = require.context('./', false, /\.router.js$/)
const routes = []
// require.context返回值中有 keys和resolve两个函数，还有一个id属性
files.keys().forEach(key => {
  routes.push(...files(key).default)
})

console.log(routes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
