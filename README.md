# data-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-analytics.js"></script>

store/index.js


    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid
      //update user object
      //const userRef = await fb.usersCollection.doc(userId).update({
        //name: user.name
      })

      //dispatch('fetchUserProfile', { uid: userId })
   

    

    // update all chart by user
    const postDocs = await fb.chartCollection.where('userId', '==', userId).get()
    postDocs.forEach(doc => {
    fb.chartCollection.doc(doc.id).update({
    userName: user.name
    })
  })
}
})