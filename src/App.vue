<template>
  <div id="app">
    <SiteNav v-if="showNav"></SiteNav>
    <canvas id="LineChart"></canvas>
    
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SiteNav from '@/components/SiteNav'
//import LineChart from '@/components/LineChart'
//import moment from 'moment'

export default {
  components: {
    SiteNav
   
  },
  computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  },
  data () {
    return{
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },

  //methods: {
    //createChart(chartId, chartData){
      //const ctx = document.getElementByID(chartId),
      //const myChart = new Chart(ctx, {
        //type: chartData.type,
        //data: chartData.data,
        //options: chartData.options,
      //});
    }
  

</script>
