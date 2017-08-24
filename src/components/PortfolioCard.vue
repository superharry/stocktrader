<template>
  <el-card style="margin-top:24px;">
    <div slot="header">
      <span><b>{{ holding.ticker }}</b></span>
    </div>
    <el-row>
     <el-col :span="6" :offset="1">
       Holding: {{ holding.amount }}
     </el-col>
     <el-col :span="6">
       Price: {{ stockPrice | $amount }}
     </el-col>
     <el-col :span="8">
       Total Value: {{ holding.amount * stockPrice | $amount }}
     </el-col>
    </el-row>
    <el-row>
     <el-col :span="22" :offset="1">
       <el-slider v-model="sellAmount" :max=" holding.amount " showInput></el-slider>
     </el-col>
    </el-row>
    <el-row type="flex" align="middle">
      <el-col :span="8" :offset="1">
        Sales Proceedings: {{ sellAmount * stockPrice | $amount}}
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="warning" @click="onSell">
          Sell
        </el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { FiltersMixin } from '@/mixins/FiltersMixin.js'

  export default {
    data () {
      return {
        sellAmount: 0
      }
    },
    props: ['holding'],
    computed: {
      ...mapGetters(['cash', 'stocks']),
      stockPrice () {
        const stock = this.stocks.find(s => s.ticker === this.holding.ticker)
        return stock.price
      }
    },
    mixins: [FiltersMixin],
    methods: {
      onSell () {
        this.$store.dispatch('sell', {
          ...this.holding,
          'amount': this.sellAmount
        })
        this.sellAmount = 0
      }
    }
  }
</script>

<style scoped>
  .el-row {
    min-height: 47px;
  }
</style>
