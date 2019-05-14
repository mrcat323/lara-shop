<template>
  <div>
    <div class="hero-register">
      <hero title="Register" sub-title="Sign up to create an account" />
    </div>
<div class="container">
  <form @submit.prevent="register" method="post">
    <b-field horizontal label="Name">
      <b-input placeholder="Your Name" v-model="name" name="name" expanded />
    </b-field>
    <b-field horizontal label="E-Mail">
      <b-input placeholder="Your E-Mail" v-model="email" name="email" type="email" expanded />
    </b-field>
    <b-field horizontal label="Password">
      <b-input placeholder="Your password" v-model="password" name="password" type="password" expanded />
    </b-field>
    <b-field horizontal label="Password confirm">
      <b-input placeholder="Confirm your password" v-model="password_confirm" name="password-confirm" type="password" expanded />
    </b-field>
    <b-field horizontal>
      <p class="control">
	<button class="button is-primary" type="submit">Register</button>
      </p>
    </b-field>
  </form>
</div>
</div>
</template>

<script>
import Hero from '../layouts/HeroLayout.vue'
export default {
    components: { Hero },
    data() {
	return {
	    name: '',
	    email: '',
	    password: '',
	    password_confirm: '',
	    success: false,
	    error: false,
	    errormsg: '',
	    errors: {}
	}
    },
    methods: {
	register() {
	    let self = this
	    this.$auth.register({
		data: {
		    name: self.name,
		    email: self.email,
		    password: self.password,
		    password_confirmation: self.password_confirm
		},
		success() {
		    self.success = true
		    this.$router.push({ name: 'login', params: {successRegistrationRedirect: true}})
		},
		error(res) {
		    self.error = true
		    self.errormsg = res.response.data.error
		    self.errors = res.response.data.errors || {}
		}
	    });
	}
    }
}
</script>

<style></style>
