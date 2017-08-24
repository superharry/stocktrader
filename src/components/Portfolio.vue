<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="4">
        <el-card style="margin-top:24px;">
          <div slot="header">
            <span><b>Cash</b></span>
          </div>
             {{ cash | $amount }}
        </el-card>
      </el-col>
    </el-row>
    <el-row v-for="holding in portfolio" :key="holding.ticker">
      <el-col :span="16" :offset="4">
        <app-portfolio-card :holding="holding"></app-portfolio-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { FiltersMixin } from '@/mixins/FiltersMixin.js'
  import PortfolioCard from '@/components/PortfolioCard'

  export default {
    data () {
      return {
        price: 12
      }
    },
    computed: {
      ...mapGetters(['portfolio', 'cash'])
    },
    components: {
      appPortfolioCard: PortfolioCard
    },
    mixins: [FiltersMixin]
  }
</script>

<style scoped>
  .price-success {
    color: #13CE66;
    font-size: larger;
  }
  .price-danger {
    color: #FF4949;
    font-size: larger;
  }
</style>
