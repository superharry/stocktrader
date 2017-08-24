<template>
  <div>
    <el-row v-for="stock in stocks" :key="stock.ticker">
      <el-col :span="16" :offset="4">
        <app-stock-card :stock="stock"></app-stock-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { FiltersMixin } from '@/mixins/FiltersMixin.js'
  import StockCard from '@/components/StockCard'

  export default {
    data () {
      return {
        price: 12
      }
    },
    computed: mapGetters(['stocks']),
    components: {
      appStockCard: StockCard
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
