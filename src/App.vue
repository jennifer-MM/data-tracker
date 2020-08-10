<template>
  <div id="app">
    <SiteNav v-if="showNav"></SiteNav>
    
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
    SiteNav,
    //DataTracker
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
  }
}
</script>