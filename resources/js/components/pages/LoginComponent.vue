<template>
<div>
    <hero title="Login" sub-title="Sign in to make shopping" />
	  <div class="container section">
	    <div class="box">
	      <form @submit.prevent="login" method="post">
            <b-field horizontal label="E-Mail">
              <b-input placeholder="Your E-Mail" v-model="email" name="email" type="email" expanded />
            </b-field>
            <b-field horizontal label="Password">
              <b-input placeholder="Your password" v-model="password" name="password" type="password" expanded  />
            </b-field>
            <b-field horizontal position="is-centered">
              <p class="control">
                <button class="button is-medium is-primary" type="submit">Login</button>
              </p>
            </b-field>
	      </form>
            <router-link :to="{ name: 'forgot-password' }">Forgot Password ?</router-link>
	    </div>
	  </div>
    <booter></booter>
</div>
</template>

<script>
import Hero from '../layouts/HeroLayout.vue'
import Booter from '../layouts/FooterLayout.vue'

export default {
    components: { Hero, Booter },
    data() {
		return {
		    email: '',
		    password: '',
		    error: false,
		    success: false,
		    errormsg: '',
		    errors: {}
		}
    },
    methods: {
		login() {
		    let self = this
		    this.$auth.login({
				data: {
				    email: self.email,
				    password: self.password
				},
				success() {
				    self.success = true
				    this.$router.push({ name: 'home' })
				},
				error(res) {
				    self.error = true
				    self.errormsg = res.response.data.error
				    self.errors = res.response.data.errors || {}
				}
		    })
		}
    }
}
</script>

<style></style>
