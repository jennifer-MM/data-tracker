import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'
//import { data } from 'jquery'
export default store


Vue.use(Vuex)
 // realtime firebase connection
    fb.chartCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
      let chartArray = []

      snapshot.forEach(doc => {
        let chart = doc.data ()
        chart.id = doc.id

        chartArray.push(chart)
      })

      store.commit('setChart', chartArray)
})

const store = new Vuex.Store({
  state: {
    userProfile:{}
  },

  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setPerformingRequest(state, val) {
      state.performingRequest = val
    }
  },

  actions: {
    async login({ dispatch }, form) {
      //sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

      // fetch user profile and set in store
      dispatch('fetchUserProfile', user)
    },

    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
    
      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name
      })
    
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },

    async fetchUserProfile({ commit }, user) {
      //fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()
      
      // set user profile in state
      commit('setUserProfile', userProfile.data())
      
      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/')
      }
    },

    async logout ({ commit }) {
      //log user out
      await fb.auth.signOut()

      //clear user data from state
      commit('setUserProfile', {})

      //redirect to login view
      router.push('/login')
    }
  },

    //enter data for graph
    async createChart({ state, commit }, data) {
      await fb.chartCollection.add({
        createdOn: new Date(),
        content: chart.content,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.name
      })
    },

   
   
    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid
      //update user object
      const userRef = await fb.usersCollection.doc(userId).update({
        name: user.name
      })

      dispatch('fetchUserProfile', { uid: userId })
    

    // update all posts by user
    const postDocs = await fb.postsCollection.where('userId', '==', userId).get()
    postDocs.forEach(doc => {
    fb.chartCollection.doc(doc.id).update({
    userName: user.name
    })
  })
}
})