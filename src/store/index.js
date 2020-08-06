import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)


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
    async createGraph({ state, commit }, post) {
      await fb.dataCollection.add({
        createdOn: new Date(),
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.name
      })
    },

    // realtime firebase connection
    //fb.dataCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
      // logic goes here
//}),
    async updateProfile({ dispatch }, user) {
      const userID = fb.auth.currentUser.uid
      //update user object
      const userRef = await fb.usersCollection.doc(userID).update({
        name: user.name
      })

      dispatch('fetchUserProfile', { uid: userID })
    }
})
export default store

    

    
     
       
    
    
  


