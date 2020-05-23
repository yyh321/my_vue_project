<template>
  <div id="app">
    <el-button type="primary">你好</el-button>
    用户名: {{ this.$store.state.user.userInfo.name }} 文章标题:
    {{ this.$store.state.article.article }}
    <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
      <router-link to="/forget">Forget</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss"></style>
