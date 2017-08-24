<template>
  <header>
    <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item class="logo" index="home">Vue + Element Implement Proof</el-menu-item>
      <el-menu-item index="portfolio">Portfolio ( {{ total | $amount }} )</el-menu-item>
      <el-menu-item index="stocks">Stocks</el-menu-item>
      <el-submenu index="save_and_load" class="el-submenu-right">
        <template slot="title">Save & Load</template>
        <el-menu-item index="save">Save</el-menu-item>
        <el-menu-item index="load">Load</el-menu-item>
      </el-submenu>
      <el-menu-item index="day" class="el-submenu-right">New Day</el-menu-item>
    </el-menu>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { FiltersMixin } from '@/mixins/FiltersMixin.js'
  import { NotificationMixin } from '@/mixins/NotificationMixin.js'

  export default {
    data () {
      return {
        activeIndex: ''
      }
    },
    computed: {
      ...mapGetters(['total'])
    },
    mixins: [FiltersMixin, NotificationMixin],
    methods: {
      handleSelect (event) {
        switch (event) {
          case 'day':
          case 'save':
          case 'load':
            this.$store.dispatch(event)
            break
          default:
            this.$router.push(event)
            break
        }
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 60px;
    width: 100%;
  }
  .el-submenu-right {
    float: right;
  }
  .logo {
    font-size: x-large;
  }
</style>
