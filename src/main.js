import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
//import Chart from 'chart.js'
//import "bootstrap/dist/css/bootstrap.css"
import './assets/app.scss'


//Vue.use(Chart);

Vue.config.productionTip = false


let app
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store: store,
      render: h => h(App)
    }).$mount('#app')
  }

 if (user) {
   store.dispatch('fetchUserProfile', user)
 }
})

