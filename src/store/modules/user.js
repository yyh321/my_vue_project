import * as types from '../action-types'

// 用户模块
export default {
  state: {
    userInfo: { name: '于云浩' }, //用户信息
    hasPermission: false, // 权限
    menuPermission: false
  },

  mutations: {
    [types.SET_USER](state, userInfo) {
      state.userInfo = userInfo
      console.log('mutations 设置用户')
    }
  },

  actions: {
    async [types.SET_USER]({ commit }, { payload }) {
      commit(types.SET_USER, payload)
      console.log('actions 设置用户')
    }
  }
}
