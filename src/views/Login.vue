<template>
  <div id="login">
    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
    <section>
      <div class="col1">
        <h1>Track your bloodwork</h1>
        <p>
          Welcome to your Blook work tracker. This platform will help you track
          your blood work history so yoso you can more easily understand your
          health!
        </p>
      </div>
      <div :class="{ 'signup-form': !showLoginForm}" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>Welcome back</h1>
      <div>
        <label for="email1">Email</label>
        <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1" />
      </div>

      <div>
        <label for="password1">Password</label>
        <input v-model.trim="loginForm.password" type="text" placeholder="****" id="password1" />
      </div>
        <button @click="login()" class="button">Log In</button>
        <div class="extras">
          <a @click="togglePasswordReset()">Forgot Password</a>
          <a @click="toggleForm()">Create an account</a>
        </div>
    </form>
    <form v-else @submit.prevent>
      <h1>Get started</h1>
      <div>
        <label for="name">Name</label>
        <input v-model.trim="signupForm.name" type="text" placeholder="Nora" id="name" />
      </div>
      <div>
        <label for="email2">Name</label>
        <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />
      </div>
      <div>
        <label for="password2">Name</label>
        <input v-model.trim="signupForm.password" type="password" placeholder="minimum 6 characters" id="password2" />
      </div>
      <button @click="signup()" class="button">Sign Up</button>
          <div class="extras">
            <a @click="toggleForm()">Back to Login</a>
          </div>
        </form>
      </div>
    </section>
   
  </div>
</template>

<script>
import PasswordReset from '@/components/PasswordReset'

export default {
  components: {
    PasswordReset
  },

  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        email: '',
        password: ''
      },
      showLoginForm: true,
      showPasswordReset: false
    }
  },

methods: {
  toggleForm() {
    this.showLoginForm = !this.showLoginForm
  },
  togglePasswordReset () {
    this.showPasswordReset = !this.showPasswordReset
  },
  login() {
    this.$store.dispatch('login', {
      email: this.loginForm.email,
      password: this.loginForm.password
    })
  },
  signup() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name
      })
    }  
  }

}
</script>

<style lang="scss" scoped></style>
