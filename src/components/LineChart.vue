<!--
<template>
<div class="tracker">
    <button @click="createChart()" class="button">add data</button>

<div class="col-6 col-md-8">
    <div class="row">
        <div class="col-12">
            <v-chart v-bind:chartData="lineChartData"></v-chart>
        </div>
    </div>
    </div>


</div>
</template>

<script>
import Chart from 'chart.js';
import 'chartjs-adapter-moment';
import { line, mixins } from 'vue-chartjs'

export default {
    name: 'Track your Bloodwork',
    data (){
        return {
            lineChartData: {
                chartType: 'lineChart',
                selector: 'chart',
                title: 'Glucose levels',
                width: 300,
                height: 200,
                data: [100, 120, 180, 60]
            }
        }
    }
   // extend: Line,
   // mixins: [mixins.reactiveProp],
   // props: ['chartdata', 'options'],
    //mounted () {
       // this.renderChart(this.chartData, this.options)
    }


//methods: {

    // update comment count on post
      //await postsCollection.doc(this.post.id).update({
       // comments: parseInt(this.post.comments) + 1
     // })
//}

</script> -->