<template>
  <div id="dashboard">
    <section>
        <div class="col1">
            <div class="profile">
                <h5>{{ userProfile.name }}</h5>
                <div class="track-data">
                    <p>What do you want to track</p>
                </div>
            </div>
        </div>
        <div class="col2">
        <div>
          <p class="no-results">There is current no data being tracked</p>
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

        }
    },
    computed: {
        ...mapState(['userProfile'])
    },
    methods: {

    }
  
}
</script>

<style lang="scss" scoped>
</style>
