<template>
  <div id="app">
    <app-header></app-header>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: 'app',
    components: {
      'app-header': Header
    }
  }
</script>

<style>
  html, body {
    margin: 0px;
    padding: 0px;
    background-color: #F9FAFC;
  }
  body {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  a {
    color: #20A0FF;
    text-decoration: none;
  }
  #container {
    padding: 24px;
  }
  .el-card__body {
    color : #5e6d82;
  }
</style>
