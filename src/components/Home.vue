<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <el-card>
        <div slot="header" class="clearfix">
          <span><b>Stock Trader</b></span>
        </div>
        <div >
          <p>To sell, visit <router-link to="/portfolio">Portfolio</router-link> page</p>
          <p>To buy, visit <router-link to="/stocks">Stock</router-link> page</p>
          <p>Click <el-button type="primary" size="mini" @click="newDay">New Day</el-button> to begin a new day</p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import { FiltersMixin } from '@/mixins/FiltersMixin.js'
export default {
  computed: { ...mapGetters(['total']) },
  mixins: [FiltersMixin],
  methods: {
    newDay () {
      this.$store.dispatch('day')
    }
  }
}
</script>

<style scoped>
</style>
