
<template>
<div class="tracker">
    <button @click="addData()" class="button">add data</button>


</div>
</template>

<script>
//import { line, mixins } from 'vue-chartjs'

export default {
   // extend: Line,
   // mixins: [mixins.reactiveProp],
    props: ['chartdata', 'options'],
    mounted () {
        this.renderChart(this.chartData, this.options)
    }
}

//methods: {
    // update comment count on post
      //await postsCollection.doc(this.post.id).update({
       // comments: parseInt(this.post.comments) + 1
     // })
//}

</script>