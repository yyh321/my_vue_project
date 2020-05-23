import Vue from 'vue'
import Vuex from 'vuex'

import rootModule from './root.module'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)
files.keys().forEach(key => {
  // 模块对应的内容
  let store = files(key).default

  // ./article.js => article, ./user.js => user
  let moduleName = key.replace(/^\.\//, '').replace(/\.js$/, '')

  let modules = (rootModule.modules = rootModule.modules || {})
  modules[moduleName] = store
  modules[moduleName].namespaced = true

  console.log('modules = ', rootModule)
})

let store = new Vuex.Store(rootModule)
console.log(store)
export default store
