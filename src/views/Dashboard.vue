<template>
  <div id="dashboard">
    <section>
        <div class="col1">
            <div class="profile">
                <h5>{{ userProfile.name }}</h5>
                <div class="create-chart">
                    <p>Enter your blood work information</p>
                    <form @submit.prevent>
                        <textarea v-model.trim="chart.content"></textarea>
                        <button @click="createChart()" :disabled="post.content ===''" class="button">Track</button>
                    </form>
                    
                </div>
            </div>
        </div>
        <div class="col2">
       <!-- <div>
          <p class="no-results">There is current no data being tracked</p>
        </div> -->
        <div class="chart-wrapper">
            <chart :options="chartOptionsLine"></chart>
            </div>

        </div>
    </section>
    
  </div>

</template>

<script>
import { mapState } from 'vuex'
//import LineChart from '@/components/LineChart'
//import moment from 'moment'

export default {
    data(){
        return {
        post: {
            chart: ''
        }
       }
    },
    computed: {
        ...mapState(['userProfile'])
    },
    methods: {
        createChart() {
            this.$store.dispatch('createChart', { data: this.chart.content })
            this.chart.content = ''
        },
   // filters: {
     //   formatDate(val) {
       //     if (!val) { return '-' }

         //   let date = val.toDate()
           // return moment(date).fromNow()
        //},
        //trimLength(val) {
          //  if (val.length < 200) { return val }
            //return `${val.substring(0, 200)}...`
        //}
    }
    }
  
//}
</script>

<style lang="scss" scoped>
</style>
