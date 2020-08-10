<template>

  <div id="dashboard">
    <section>
        <div class="col1">
            <div class="profile">
                <h5>{{ userProfile.name }}</h5>
                <div class="track-data">
                    <p>Enter your blood work information</p>
                    <form @submit.prevent>
                        <textarea v-model.trim="post.data"></textarea>
                        <button @click="trackData()" :disabled="post.data ===''" class="button">Track</button>
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
import Datatracker from '@/components/DataTracker'
import moment from 'moment'

export default {
    data(){
        return {
        post: {
            data: ''
        }
       }
    },
    computed: {
        ...mapState(['userProfile'])
    },
    methods: {
        trackData() {
            this.$store.dispatch('trackData', { data: this.post.data })
            this.post.data = ''
        }
    }
  
}
</script>

<style lang="scss" scoped>
</style>
