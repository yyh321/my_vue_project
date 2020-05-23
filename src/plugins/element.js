import Vue from 'vue'

// 用到哪个组件，引入哪个组件
import {Button,Container,Message} from 'element-ui'

const components = {Button, Container}

//统一注册组件
Object.entries(components).forEach(([key,component]) => {
  Vue.use(component)
})

Vue.prototype.$message = Message