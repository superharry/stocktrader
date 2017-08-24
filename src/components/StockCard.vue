<template>
  <el-card style="margin-top:24px;">
    <div slot="header">
      <span><b>{{ stock.ticker }}</b></span>
    </div>
    <el-row>
     <el-col :span="22" :offset="1">
       Cash to remain: {{ Math.floor((cash - purchaseAmount * stock.price) * 100) / 100 | $amount }}
     </el-col>
    </el-row>
    <el-row>
     <el-col :span="22" :offset="1">
       <el-slider v-model="purchaseAmount" :max=" Math.floor((cash / stock.price) * 100) / 100 " showInput></el-slider>
     </el-col>
    </el-row>
    <el-row type="flex" align="middle">
      <el-col :span="4" class="price-success">{{ stock.price | $amount }}</el-col>
      <el-col :span="4" :offset="15">
        <el-button type="primary" @click="onBuy">
          Buy
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
        purchaseAmount: 0
      }
    },
    props: ['stock'],
    computed: mapGetters(['cash']),
    mixins: [FiltersMixin],
    methods: {
      onBuy () {
        this.$store.dispatch('buy', {
          'ticker': this.stock.ticker,
          'amount': this.purchaseAmount
        })
        this.purchaseAmount = 0
      }
    }
  }
</script>

<style scoped>
  .price-success {
    color: #13CE66;
    font-size: x-large;
  }
  .price-danger {
    color: #FF4949;
    font-size: x-large;
  }
  .el-row {
    min-height: 47px;
  }
</style>
